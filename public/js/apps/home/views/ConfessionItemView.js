define( function ( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );
	var _          = require( 'underscore' );

	var template = require( 'text!apps/home/templates/ConfessionDisplay.html' );

	return Marionette.ItemView.extend( {

		tagName   : 'li',
		className : 'col-md-3 col-sm-4',
		template  : _.template( template ),
		events    : {
			'click p' : 'action'
		},
		action    : function () {
			Backbone.history.length+=1;
			Backbone.history.navigate('#show/' + this.model.get('_id'), true);
		}

	} );

} );
