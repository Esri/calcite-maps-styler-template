CKEDITOR.plugins.add( 'storymaps', {
    icons: 'storymaps',
    init: function( editor ) {
        editor.addCommand( 'testStorymaps', {
            exec: function( editor ) {
                var now = new Date();
                editor.insertHtml( 'The current date and time is: <em>' + now.toString() + '</em>' );
            }
        });
        editor.ui.addButton( 'Storymaps', {
            label: 'Test Storymaps',
            command: 'testStorymaps',
            toolbar: 'about'
        });
    }
});