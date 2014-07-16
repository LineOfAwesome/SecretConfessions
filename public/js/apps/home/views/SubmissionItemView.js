/* global alert */
define( function ( require ) {
	'use strict';

	var _          = require( 'underscore' );
	var Marionette = require( 'marionette' );
	var Confession = require( 'apps/home/models/ConfessionModel' );

	var template = require( 'text!apps/home/templates/SubmissionTemplate.html' );

	return Marionette.ItemView.extend( {

		template : _.template( template ),

		events   : {
			'click #add' : 'submit'
		},

		ui       : {
			'addButton' : '#add',
			'message'   : '#message',
			'alias'     : '#alias'
		},

		submit   : function ( e ) {
			e.preventDefault();

			var msg = new Confession( {
				'message' : this.ui.message.val(),
				'alias'   : this.ui.alias.val()
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
