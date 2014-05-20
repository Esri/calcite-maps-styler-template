CKEDITOR.plugins.add('storymapsInlineMedia', {
	icons: 'inlineMedia',
	init: function(editor) {
		
		var inlineMediaExec = function(isEditing)
		{
			var path = editor.elementPath(),
				elemIsImg = path.lastElement.getName() == "span" && $(path.lastElement.$).data('cke-display-name') == 'image';
			
			require(["dojo/topic"], function(topic){
				var media = null;
				
				if ( elemIsImg ) {
					var mediaImg = $(path.lastElement.$).children('img').eq(0),
						caption = mediaImg.parents('figure').children('figcaption'),
						title = caption && caption.length ? caption.html() : mediaImg.attr('title');
					
					media = {
						type: "image",
						image: {
							url: mediaImg.attr('src'),
							titleDisplay: caption && caption.length ? 'caption' : 'hover',
							title: title,
							width: mediaImg.attr('width'),
							height: mediaImg.attr('height')
						}
					};
				}
				
				topic.publish("EDITOR-OPEN-INLINE-MEDIA", {
					selectedMedia: media,
					editorCallback: function(cfg){
						var outputEl,
							imgHTML = '<div class="btn-fullscreen-container"><img src="" /></div>',
							captionHTML = '<figure class="caption">' + imgHTML + '<figcaption></figcaption>' + '</figure>';
						
						if ( cfg.titleDisplay == 'caption' ) {
							outputEl = CKEDITOR.dom.element.createFromHtml(captionHTML, editor.document);
							$(outputEl.getChildren().$).eq(0).children().attr({
								'src': cfg.url,
								// TODO test on small size image ; what to do with the commented dialog in configure?
								'width': '100%' //cfg.width,
								//'height': cfg.height
							});
							outputEl.getChildren().$[1].innerHTML = cfg.title;
						}
						else {
							outputEl = CKEDITOR.dom.element.createFromHtml(imgHTML, editor.document);
							outputEl.getChildren().$[0].setAttribute('src', cfg.url);
							// TODO
							outputEl.getChildren().$[0].setAttribute('width', '100%'); //cfg.width);
							//outputEl.getChildren().$[0].setAttribute('height', cfg.height);
							if ( cfg.titleDisplay == 'hover' )
								outputEl.getChildren().$[0].setAttribute('title', cfg.title);
						}
						
						var sel = editor.getSelection(),
							node = sel.getRanges()[0].getCommonAncestor(),
							wasCaption = !! $(node.$).parents('figure').length;
						
						// Add when editor is not focused
						if( ! editor.getData() ) {
							editor.insertElement(outputEl);
						}
						else {
							if ( wasCaption )
								node = node.getParent();
							
							node.insertBeforeMe(outputEl);
							
							// Add an empty line when adding a media to not mess with the caption
							if ( isEditing !== true )
								node.insertBeforeMe(CKEDITOR.dom.element.createFromHtml('<br/>', editor.document));
							
							node.remove();
						}
						
						// TODO must be a better way to refresh the editor
						// Something like that seems needed for the resize plugin to detect the new image
						CKEDITOR.instances.addEditRTE.setData(CKEDITOR.instances.addEditRTE.getData());
					}
				});
			});
		};
		
		// Double click event (trigger in ckeditor/plugins/image2/dialogs/image2.js > onShow (around line 400)
		require(["dojo/topic"], function(topic){
			topic.subscribe("EDITOR-DOUBLE-CLICK-IMAGE", function(){
				inlineMediaExec(true);
			});
		});
		
		CKEDITOR.inlineMediaCommand = function(){ };
		CKEDITOR.inlineMediaCommand.prototype = {
			exec: inlineMediaExec,
			startDisabled: 0
		};
		
		editor.addCommand('inlineMediaCommand', new CKEDITOR.inlineMediaCommand());
		editor.ui.addButton( 'InlineMedia', {
			label: i18n.commonMedia.editorInlineMedia.lblTitle,
			command: 'inlineMediaCommand',
			toolbar: 'storymapsInlineMedia'
		});
	}
});