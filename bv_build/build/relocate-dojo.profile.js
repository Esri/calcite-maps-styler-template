// This profile is used solely to modify the destination locations for
// dijit, dojo and dojox packages. See "destLocation" below. Use this
// profile as a mixin on top of the primary build profiles.

// Without this relocation, all top-level packages become siblings inside
// a parent folder. But we want dijit, dojo and dojox to be buried one-level
// deeper compared to esri, dgrid etc - for backward compatiblity. Prior to
// Dojo v1.7, we've been performing this relocation manually after the build
// is completed - this breaks CSS optimization in some cases. See this ticket:
// https://support.sitepen.com/issues/21775
// The new build system at Dojo v1.7 allows us to do this as part of the build
// without any breakages.


var profile = {
  basePath: "..",
  packages: [
    {
      name: "dijit",
      location: "../../../dojo/dijit",
      destLocation: "./dojo/dijit"
    },
    {
      name: "dojo",
      location: "../../../dojo/dojo",
      destLocation: "./dojo/dojo"
    },
    {
      name: "dojox",
      location: "../../../dojo/dojox",
      destLocation: "./dojo/dojox"
    }
  ]
};