define( function ( require ) {
	'use strict';

	var Backbone        = require( 'backbone' );
	var ConfessionModel = require( 'apps/home/models/ConfessionModel' );

	return Backbone.Collection.extend( {
		model : ConfessionModel,
		url   : '/confessions'
	} );

} );
