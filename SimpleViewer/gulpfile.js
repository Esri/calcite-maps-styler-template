var gulp = require("gulp");
var jshint = require("gulp-jshint");
var beautify = require("gulp-beautify");
var sass = require("gulp-sass");
var cssbeautify = require("gulp-cssbeautify");



//Define a task. Takes two arguments the name of the task and a function
//which will be run when you call the task
//In this example we specify that we want to run jshint on each .js file 
//in the javascript folder and report the results using the jshint reporter. 
//In this example we have a file that is already minified and want to exclude
//it from lint and beautify. 
gulp.task("lint", function(){
	gulp.src(["./js/*.js", "!./js/selectivizr-min.js"])
	.pipe(jshint())
	.pipe(jshint.reporter("default"));
});

//Run the beautify task and specify options in this example 
//I added a base to overwrite existing files. You could 
//specify that results are written to another location by specifying
//a different destination instead. 
gulp.task("beautify", function(){
	gulp.src(["./js/*.js", "!./js/*-min.*"],{base:"./"})
	.pipe(beautify({indentSize:4}))
	.pipe(gulp.dest("./"));
});

//Process sass
gulp.task('sass', function () {
    gulp.src("./css/*.scss")
        .pipe(sass())
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest("./css"));
});

//Beautify css 
gulp.task("css",function(){
	gulp.src("./css/*.css", {base:"./"})
	.pipe(cssbeautify())
	.pipe(gulp.dest("./"))
});

//define a default task that will run if you type gulp at the command line

gulp.task('default', ["lint","beautify","sass","css"]);

