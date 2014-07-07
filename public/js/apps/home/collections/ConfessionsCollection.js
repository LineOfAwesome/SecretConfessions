define( function ( require ) {
	'use strict';

	var ConfessionModel = require( 'apps/home/models/ConfessionModel' );

	return Backbone.Collection.extend( {
		model : ConfessionModel,
		url   : '/confessions'
	} );

} );
