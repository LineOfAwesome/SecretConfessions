define( function ( require ) {
	'use strict';

	/*jshint unused:false*/
	var App = require( 'App' );

	//var admin = require( 'apps/admin/Admin' );
	var home  = require( 'apps/home/Home' );
	var modal = require( 'apps/modal/Modal' );

	//admin();
	home();
	modal();

} );
