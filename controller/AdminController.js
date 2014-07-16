'use strict';
var express = require( 'express' );
var Admin   = require( '../model/AdminModel' );
var Router  = express.Router();

Router
	.get( '/admin', function ( request, response ) {
		Admin.find( function ( error, doc ) {
			if ( error ) {
				return response.send( 500, error );
			}
			response.send( 200, doc );
		} );
	} )

	.post( '/admin', function ( request, response ) {
		console.log( request.body.username );
		var newPost = new Admin( {
			username : request.body.username,
			password : request.body.password
		} );

		newPost.save( function ( error, doc ) {
			if ( error ) {
				return response.send( 500, error );
			}
			response.send( 200, doc);
		} );
	} )

/* Not sure to include this API or not.. */
	.put('/admin/:messageId', function ( request, response ) {
		Admin.update(
			{ _id : request.params.messageId },
			{ password : request.body.password, username : request.body.username },
			{ multi : true },
			function ( error, doc ) {
				if (error) {
					response.send( 500, error );
				}
				response.send( 200 );
			} );
	} )
/* Planning to change to oAuth v1.0a */
	.post('/admin/login', function ( request, response ) {
		Admin.findOne( { 'username' :  request.body.username }, function ( error, user ) {
			if ( error ) {
				return error;
			}else if ( !user ) {
				response.redirect('/#login');
			}else {
				response.redirect('/adminPage');
			}
		} );
	} );

module.exports = Router;
