define( function ( require ) {
	'use strict';

	var Backbone = require( 'backbone' );

	return Backbone.Model.extend({
		initialize : function () {
			Backbone.Model.prototype.initialize.apply(this, arguments);
			var error = this.validate(this.attributes);
			if (error) {
				this.trigger('error', this, error);
			}
		},

		url : '/confessions',

		'validate' : function ( attr ) {
			if ( ! attr.message ) {
				return 'message must not be empty.';
			}
			if ( ! attr.alias ) {
				return 'alias must not be empty.';
			}
		}
	} );
} );
