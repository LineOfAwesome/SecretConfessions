define( function ( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );
	var confession = require( 'apps/home/models/ConfessionModel' );

	var template = require( 'text!apps/home/templates/SubmissionTemplate.html' );

	return Marionette.ItemView.extend( {

		template : _.template( template ),
		events   : {
			'click #add' : 'submit'
		},
		submit   : function ( e ) {
			e.preventDefault();

			var msg = new Confession( {
				'message' : $('#message').val(),
				'alias'   : $('#alias').val()
			} );

			if ( msg.isValid() ) {
				msg.save( {}, {
					wait        : true,
					forceUpdate : true,
					success     : function () {
						alert('All. iz well!');
					},
					error       : function () {
						alert( 'An error has occured!' );
					}
				} );

			}else {
				alert( 'Pls fill up all fields!' );
			}
		}

	} );

} );
