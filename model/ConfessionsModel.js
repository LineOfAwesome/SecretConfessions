var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var Confession = new Schema( {
	message : {
		'type'     : String,
		'required' : true
	},

	alias : {
		'type'    : String,
		'default' : 'Anonymous'
	},

	type : {
		'type'    : String,
		'default' : 'pending'
	}
} );

module.exports = mongoose.model( 'confession', Confession );