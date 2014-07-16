/* global require: false, console: false */
'use strict';

var express      = require( 'express' );
var mongoose     = require( 'mongoose' );
var app          = express();
var bodyParser   = require( 'body-parser' );
var utils        = require( './utils' );
var config       = require( './config' );

mongoose.connect( utils.mongoUrl( config.db ) );

mongoose.connection.on( 'open', function () {
	console.log( 'Connection to mongodb is open' );
} );

mongoose.connection.on( 'error', function ( error ) {
	console.log( 'Error on mongodb connection : ', error );
} );

app.use( bodyParser.json() );
app.use( express.static('public/'));

app.use( '/', require( './controller/ConfessionsController' ) );
app.use( '/', require( './controller/AdminController' ) );

app.listen( config.port );

module.exports = app;
