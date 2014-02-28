CKEDITOR.plugins.add( 'storymaps2', {
    icons: 'anchor1,anchor2,anchor3',
    init: function( editor ) {
        editor.addCommand( 'testStorymaps1', {
            exec: function( editor ) {
                var now = new Date();
                editor.insertHtml("I'm changing map views (zooming to one Extent, layers, popup)");
            }
        });
        editor.ui.addButton( 'Anchor1', {
            label: 'Test Storymaps 1',
            command: 'testStorymaps1',
            toolbar: 'about'
        });
		
		editor.addCommand( 'testStorymaps2', {
            exec: function( editor ) {
                var now = new Date();
                editor.insertHtml("I'm geocoding the selected string");
            }
        });
        editor.ui.addButton( 'Anchor2', {
            label: 'Test Storymaps 2',
            command: 'testStorymaps2',
            toolbar: 'about'
        });
		
		editor.addCommand( 'testStorymaps3', {
            exec: function( editor ) {
                var now = new Date();
                editor.insertHtml("I'm loading a new map");
            }
        });
        editor.ui.addButton( 'Anchor3', {
            label: 'Test Storymaps 3',
            command: 'testStorymaps3',
            toolbar: 'about'
        });
    }
});