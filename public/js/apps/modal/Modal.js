define( function ( require ) {
	'use strict';

	return function () {

		var App      = require( 'App' );
		var Router   = require( 'Router' );

		App.module( 'Modal', function ( Modal ) {

			require( 'apps/modal/views/Views' );
			require( 'apps/modal/controllers/ShowController' );

			Modal.Router = Router.extend( {
				'appRoutes' : {
					'show/:id' : 'showModal'
				}
			} );

			var API = {

				'showModal' : function ( content ) {
					Modal.Controller.Show.showModal( content );
				}

			};

			App.addInitializer( function () {
				new Modal.Router( {
					'controller' : API
				} );
			} );

		} );

	};

} );
