define( function ( require ) {
	'use strict';

	var _          = require( 'underscore' );
	var Marionette = require( 'marionette' );

	var template = require( 'text!apps/modal/templates/ModalPageLayout.html' );

	return Marionette.Layout.extend( {

		'template' : _.template( template ),

		'regions'  : {
			'contentRegion' : '#modalContent'
		}

	} );

} );
