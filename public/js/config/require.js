require.config( {

	'baseUrl' : 'js/',

	'paths' : {

		// Libraries
		'jquery'              : 'libs/jquery/dist/jquery',
		'json2'               : 'libs/json2/json2',
		'bootstrap'           : 'libs/bootstrap/dist/js/bootstrap',
		'backbone'            : 'libs/backbone/backbone',
		'underscore'          : 'libs/underscore/underscore',
		'backbone.babysitter' : 'libs/backbone.babysitter/lib/backbone.babysitter',
		'backbone.wreqr'      : 'libs/backbone.wreqr/lib/backbone.wreqr',
		'marionette'          : 'libs/backbone.marionette/lib/core/amd/backbone.marionette',
		'classie'             : 'libs/classie/classie',

		// Application Files
		'App'    : 'App',
		'Router' : 'Router'


	},

	'shim' : {
		'bootstrap' : {
			'deps'    : [ 'jquery' ],
			'exports' : 'bootstrap'
		},
		'classie' : {
			'deps'    : [ 'jquery' ],
			'exports' : 'classie'
		}

	}

} );

