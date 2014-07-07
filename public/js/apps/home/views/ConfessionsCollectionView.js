define( function ( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );

	var ItemView = require( 'apps/home/views/ConfessionItemView' );

	return Marionette.CollectionView.extend( {

		tagName   : 'ol',
		className : 'grid fixed-height',
		itemView  : ItemView

	} );

} );
