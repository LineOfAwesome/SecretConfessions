'use strict';
var gulp = require('gulp');
var fs   = require('fs');
// include plug-ins
var jshint      = require( 'gulp-jshint' );
var map         = require( 'map-stream' );
var jscs        = require( 'gulp-jscs' );
var eslint      = require( 'gulp-eslint' );
var Combine     = require( 'stream-combiner' );

var jshinterror = 0;

var src = [ './*.js', './controller/*.js', './public/*.js', './public/js/apps/**/*.js' ] ;

var errorReporter = function ( ) {
	return map(function (file, cb) {
		if ( !file.jshint.success ) {
			jshinterror = 1;
		}
		cb( null, file );
	} );
};

gulp.task( 'setup', function ( ) {
	fs.readFile( './precommit.sh', function ( err, data ) {
		if (err) {
			throw err;
		}
		setTimeout( function () {
			fs.chmodSync( '.git/hooks/pre-commit', '755' );
		}, ( function () {
			fs.writeFileSync( '.git/hooks/pre-commit', data);
			return 100;
		} )()
		);

	} );
} );

gulp.task( 'default', [ 'jshint', 'jscs', 'eslint' ], function () {} );

// JShint task
gulp.task( 'jshint', function ( ) {
	gulp.src( src )
		.pipe( jshint( ) )
		.pipe( jshint.reporter( 'jshint-stylish' ) )
		.pipe( errorReporter( ) )
		.on('end', function ( ) {
			if ( jshinterror === 1 ) {
				console.log( '\n >>> REFUSING COMMIT DUE TO SYNTAX ERRORS <<<' );
				jshinterror = 0;
				process.exit( 1 );
			}
		} );
} );

// JSCS task
gulp.task( 'jscs', function ( ) {
	var combined = new Combine( gulp.src( src ).pipe( jscs( ) ) );
	combined.on('error', function ( err ) {
		console.warn( err.message + '\n >>> REFUSING COMMIT DUE TO UNCONVENTIONAL CODING PATTERNS <<<' );
		process.exit( 1 );
	} );
	return combined;
} );

// ESLint task
gulp.task( 'eslint', function ( ) {
	return gulp.src( src )
			.pipe(eslint())
			.pipe(eslint.format())
			.pipe(eslint.failOnError());
} );

// JSCS task for gulp
gulp.task( 'check-gulp', function ( ) {
	var combined = new Combine (
		gulp.src( './gulpfile.js' ).pipe( jscs( ) )
	);
	combined.on( 'error', function ( err ) {
		console.warn( err.message + '>>> FOLLOW CODING STANDARDS! <<<' );
		process.exit( 1 );
	} );
	return combined;
} );
