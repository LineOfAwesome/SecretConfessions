define( function ( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );


	var template = require( 'text!apps/home/templates/SubmissionTemplate.html' );

	return Marionette.ItemView.extend( {

		template : _.template( template ),
		events   : {
			"click p" : "action"
		},
		action : function() {
			Backbone.history.length+=1;
        	Backbone.history.navigate('#show/'+this.model.get('_id'), true);

		}

	} );

} );