define( function ( require ) {
	'use strict';

	var Marionette  = require( 'marionette' );
	var Backbone    = require( 'backbone' );
	var $           = require( 'jquery' );
	var router		= require( 'Router' );

	// main app
	var App = new Marionette.Application();

	App.addRegions( {
		mainRegion           : ".message",
		trendingRegion       : "#trending",
		footRegion           : "#modalFooter",
		confessionFormRegion : '#confessFormRegion',
		wrapper              : '.wrapper',
		modalRegion          : '#msgModal',
		content				 : '#content'
	} );

	// Allow sub apps to update history fragment when using events
	App.navigate = function ( route, options ) {
		options = options || { };
		Backbone.history.navigate( route, options );
	};

	App.getCurrentRoute = function () {
		return Backbone.history.fragment;
	};

	// start history after initialization.
	App.on( 'initialize:after', function () {
		Backbone.history.start();
		Backbone.history.length=0;

		console.log( 'App has been initialized :)' );
	} );

	// convenience access for jquery methods
	App.when     = $.when;
	App.Deferred = $.Deferred;

	return App;
} );
