module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-handlebars');

	grunt.initConfig({
		handlebars: {
			compile: {
				options: {
					namespace: 'Handlebars.templates',
					processName: function(filePath) {
						var pieces = filePath.split('/');
						return pieces[pieces.length - 1].split('.')[0];
					}
				},
				files: {
					'templates/templates.js': 'templates/*.handlebars'
				}
			}
		}
	});
};