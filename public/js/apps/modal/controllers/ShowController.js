define( function ( require ) {
	'use strict';

	var App = require( 'App' );

	App.module( 'Modal.Controller', function ( Controller ) {

		var modalLayout = new App.Modal.Views.PageLayout();
		App.content.show( modalLayout );

		Controller.Show = {

			'showModal' : function ( contents ) {

			}

		};

	} );

} );
