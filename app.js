var express = require( 'express' );
var app = express();
app.use( express.static( 'views' ) );
app.get( '*', function( res, req ) {
	res.sendFile( __dirname + '/views/index.html' );
} );

app.listen( 3000, function( res, req ) {
	console.log( "listening on 3000" );
} )
