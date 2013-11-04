
var  server = require('websocket.io').listen(80, function(){
	console.log('server start');
});

server.on('connection', function(socket){
	console.log('connect!', socket);
	socket.on('message', function(event){
		console.log('message', event);
	});
});


