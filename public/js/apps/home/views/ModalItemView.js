define( function ( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );
	var classie    = require( 'classie' );

	var template = require( 'text!apps/home/templates/ModalTemplate.html' );

	return Marionette.ItemView.extend( {

		template : _.template( template ),
		events   : {
			'click a' : 'action'
		},
		action   : function ( e ) {

			e.preventDefault();

			classie.remove( $( '#msgOverlay' )[ 0 ], 'overlay-open' );
			classie.add( $( '#msgOverlay' )[ 0 ], 'overlay-closed' );
			classie.remove( $( '.wrapper' )[ 0 ], 'sendtoBack' );
			classie.add( $( '.wrapper' )[ 0 ], 'sendtoForward' );

			$( '#msgModal' ).html( '' );

			if ( Backbone.history.length === 0 ) {
				console.log('router backing');
				Backbone.history.navigate( '', true);

			}else {
				console.log('history backing');
				window.history.back();

			}

		}

	} );

} );
