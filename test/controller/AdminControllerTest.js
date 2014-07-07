'use strict';

var request  = require( 'supertest' );
var should   = require( 'should' );
var mongoose = require('mongoose');
var fixtures = require( '../fixtures' );



describe ( 'AdminController', function() {
	var app, mongodb;
	var testAccount = {
		'username' : 'admin',
		'password'   : 'test'
	};

	before( function ( done ) {
		fixtures.createServer( 'AdminController',
			function ( error, server ) {
				app = server;

				fixtures.connectMongo( null, function ( error, conn ) {
					if ( error ) {
						done( error );
					}
				mongodb = conn.db;
				done();
			} );
		} );
	} );

	after( function ( done ) {
		mongodb.dropDatabase( function () {
			done();
		} );
	} );

	describe( 'POST' , function () {

		it( 'should return a response', function ( done ) {

			request( app )
				.post( '/admin' )
				.send( testAccount )
				.expect( 200 )
				.end( function ( err, res ) {
					if ( err ) throw err;
					res.body.should.be.ok;
					res.body.username.should.equal( testAccount.username );
					res.body.password.should.equal( testAccount.password );
					done();
				} );

		} );

	} );

	describe( 'GET', function( done ){

		it( 'should return a response', function ( done ) {
			request( app )
				.get( '/admin' )
				.expect( 'Content-Type', /json/ )
				.expect( 200 )
				.end( function ( err, res ) {
					if( err ) throw err;
					testAccount.id = res.body[0]._id;
					res.body.should.be.ok;
					res.body.should.be.an.instanceof( Array );
					res.body.should.not.be.above( 1 );
					done();
				} );
		} );

	} );

} );
