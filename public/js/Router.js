define( function( require ){
	var $          = require( 'jquery' );
	var Marionette = require( 'marionette' );
	var classies   = require( 'classie' );

	return Marionette.AppRouter.extend( {

		routes: {
			'*other'   : 'default'
		},

		default : function(other) {
			alert('Hmmm..not sure what you need here? You accessed to: ' + other);
		}

	} );

} );



