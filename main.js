
var  server = require('websocket.io').listen(8080, function(){
	console.log('server start');
});

server.on('connection', function(socket){
	//console.log('connect!', socket);
	socket.on('message', function(event){
		console.log('message', event);
		var data = JSON.parse(event);
		server.clients.forEach(function(client){
			if(client){
				client.send(JSON.stringify({ data : 'hello websocket!' }));
			}
		});
	});
});


