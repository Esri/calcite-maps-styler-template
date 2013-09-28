dojo.provide("extras.FeatureLayerChart");

dojo.require("dojox.charting.Chart2D");

dojo.declare("extras.FeatureLayerChart", null, {
  featureLayer: null,
  layerAttribute: null, // name of the attribute to chart
  data: null, // data to be charted
  dataMin: null, // possibly negative
  dataMax: null,
  dataLabel: null, // element to show point value as mouse moves over the chart
  elevationString: null,
  isLabelVisible: false,
  chart: null, // an instance of dojox.charting.Chart2D
  chartCoords: null,
  mouseGroup: null, // group to show point in the series as the mouse moves
  pointGroup: null, // group to show point on the chart that corresponds to the selected point on the map
  xPlotStart: null,
  plotMiddle: null,
  xScale: null, // number of pixels on the x-axis that represents one data point
  yScale: null, // number of pixels on the y-axis that represents one data point
  yMax: null,
  yRange: null,

  collectData: null, // generate an array of values to be charted
  createChart: null,
  selectFirstPoint: null, // runs when chart loads to select first point
  updateMousePoint: null, // show white circle as mouse moves
  highlightPoint: null, // show cyan square corresponding to current feautre layer point
  hideDataLabel: null, // set visibility to false on data label
  setDataLabel: null, // update data label

  constructor: function(options, node) {  
    //  expected values:
    //    options.featureLayer:  layer with data to be charted
    //    options.layerAttribute:  layer attribute with data to be charted

    this.id = node;
    dojo.mixin(this, options);

    this.collectData = dojo.hitch(this, this.collectData);
    this.createChart = dojo.hitch(this, this.createChart);
    this.updateMousePoint = dojo.hitch(this, this.updateMousePoint);
    this.selectFirstPoint = dojo.hitch(this, this.selectFirstPoint);
    this.highlightPoint = dojo.hitch(this, this.highlightPoint);
    this.hideDataLabel = dojo.hitch(this, this.hideDataLabel);

    this.collectData();
  },

  collectData: function() {
    this.data = dojo.map(this.featureLayer.graphics, function(g, idx) {
      return parseFloat((g.attributes[this.layerAttribute] || 0).toFixed(2));
    }, this);

    this.createChart();
  },

  createChart: function() {
    this.dataMax = Math.max.apply(null, this.data);
    this.dataMin = Math.min.apply(null, this.data);
    this.yMax = Math.floor(this.dataMax * 1.1); // pad the y-axis
    this.yRange = this.yMax - this.dataMin;

    this.chart = new dojox.charting.Chart2D(this.id);
    this.chart.addPlot("elevation", { 
      type: "Areas", markers: false, tension: "X" 
    });
    this.chart.addPlot("grid", { 
      type: "Grid"
    });
    this.chart.addAxis("y", { vertical: true, max: this.yMax });
    this.chart.addSeries("elevations", this.data, { 
      plot: "elevation", 
      stroke: { color: new dojo.Color("#146ca1") }, 
      fill: new dojo.Color([20, 108, 161, 0.75]) 
    });
    this.chart.render();

    // add groups for the point used to highlight
    // the current map feature and mouse position
    this.mouseGroup = this.chart.surface.createGroup();
    this.pointGroup = this.chart.surface.createGroup();

    // add an element for the mouse over
    this.dataLabel = dojo.create("span", { 
      "class": "chartTooltip",
      "id": "chartLabel"
    }, dojo.byId(this.id).parentNode);

    this.chartCoords = dojo.coords(this.chart.node);
    this.xPlotStart = this.chartCoords.x + Math.floor(this.chart.offsets.l);
    this.plotMiddle = this.chart.plotArea.width / 2;
    
    this.xScale = this.chart.plotArea.width / this.data.length;
    this.yScale = this.chart.plotArea.height / this.yRange;
    
    this.selectFirstPoint();

    this.chart.surface.connect("onmousemove", this.updateMousePoint);
  },

  selectFirstPoint: function() {
    // show the first point on the chart
    var map = this.featureLayer._map;
    var feature = map.infoWindow.getSelectedFeature();
    if ( ! feature ) {
      feature = this.featureLayer.graphics[0];
      map.infoWindow.setFeatures([feature]);
      map.infoWindow.show(feature.geometry);
    }
    this.highlightPoint([feature])

    if ( map.infoWindow.declaredClass == "esri.dijit.Popup" ) {
      dojo.connect(map.infoWindow, "onHide", this, function() {
        this.pointGroup.clear();
      });
      dojo.connect(map.infoWindow, "onSelectionChange", this, function(e) {
        // console.log("sel changed");
        var selected = map.infoWindow.getSelectedFeature();
        if ( selected && selected.geometry.type == "point" ) {
          // update the point on the chart
          this.highlightPoint([selected]);
        } else {
          this.pointGroup.clear();
        }
      });
    }
  },

  highlightPoint: function(feature) {
    // find the index for the first selected graphic 
    var idx = dojo.indexOf(this.featureLayer.graphics, feature[0]);
    var point = this.data[idx];

    this.pointGroup.clear();
    var x = (idx * this.xScale) + this.chart.offsets.l;
    // calculate the chart height, plus the padding at the top
    // then subtract the data point scaled to the plot to get the y value
    var y = (this.chart.plotArea.height + this.chart.offsets.t) - 
      ((point - this.dataMin) * this.yScale);
    
    // use a rectangle to match the symbol on the map
    this.pointGroup.createRect({ 
      // offset x and y so the rect is centered on the chart
      x: x - 6, 
      y: y - 6,
      height: 12,
      width: 12 
    }).setStroke({color: "#0ff", width: 2}); 

    // set visibility to hidden on the elevation label on the chart
    // as points are highlighted
    this.hideDataLabel();
  },

  updateMousePoint: function(evt) {
    if ( evt.clientX >= this.xPlotStart ) {
      // calculate the x coordinate of the mouse over the plot
      var xPos = evt.clientX - this.xPlotStart;
      // find the array index of the current elevation 
      var dataIdx = Math.floor(xPos / this.xScale);
      // make sure our elevation point index isn't out of bounds
      if ( dataIdx > this.data.length - 1 ) {
        return;
      }
      // update the elevation label
      this.setDataLabel(dataIdx, xPos);

      // update the circle that corresponds to mouse position 
      var x = xPos + Math.floor(this.chart.offsets.l);
      var y = (this.chart.plotArea.height + this.chart.offsets.t) - 
        ((this.data[dataIdx] - this.dataMin) * this.yScale);
      this.mouseGroup.clear();
      this.mouseGroup.createCircle({
        cx: x, 
        cy: y,
        r: 5 
      }).setFill(new dojo.Color("#fff")).setStroke({color: "#146ca1",width: 2});
    }
  },

  hideDataLabel: function() {
    if ( this.isLabelVisible ) {
      dojo.style(this.dataLabel, "visibility", "hidden");
      this.isLabelVisible = false;
    }
  },

  setDataLabel: function(idx, xPos) {
    // this.dataLabel.innerHTML = app.i18n.appStrings.elev + this.data[idx];
    this.dataLabel.innerHTML = this.elevationString + this.data[idx];

    // var coords = dojo.coords(chart.node);
    dojo.style(this.dataLabel, "top", 15 + this.chartCoords.t + "px");
    if ( xPos < this.plotMiddle ) { // show the elevation on the right side of the chart
      dojo.style(this.dataLabel, "right", this.chart.offsets.l - 10 + "px");
      dojo.style(this.dataLabel, "left", "");
    } else { // show the elevation on the left side of the chart
      dojo.style(this.dataLabel, "right", "");
      dojo.style(this.dataLabel, "left", this.chart.offsets.l + 10 + "px");
    }
    if ( ! this.isLabelVisible ) {
      dojo.style(this.dataLabel, "visibility", "visible");
      this.isLabelVisible = true;
    }
  }
});

