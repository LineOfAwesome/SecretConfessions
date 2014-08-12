define( function ( require ) {
	'use strict';

	return function () {

		var App      = require( 'App' );
		var Router   = require( 'Router' );

		App.module( 'Home', function ( Home ) {

			require( 'apps/home/views/Views' );
			require( 'apps/home/controllers/ShowController' );

			Home.Router = Router.extend( {
				'appRoutes' : {
					'' : 'showHomePage'
				}
			} );

			var API = {

				'showHomePage'       : function () {
					Home.Controller.Show.showHome();
				},
				'showConfessionPost' :  function ( id ) {
					Home.Controller.Show.showConfession(id);
				}

			};

			App.addInitializer( function () {
				new Home.Router( {
					'controller' : API
				} );
			} );

		} );

	};

} );
