簡単な実装サンプル(client側)

```javascript
// websocket接続
var ws = new WebSocket('ws://[hostname]:8080');
console.log('start ws');

// open check
ws.onopen = function(e){
	console.log('open', e);
}
// error handling
ws.onerror=function(e){
	console.log('err', e);
}
// get message action
ws.onmessage=function(e){
	console.log('message',e);
}
```

アクションする時は以下のコマンドをコンソールで
```javascript
ws.send(JSON.stringify({hoge:"hello websocket!"}))
```

そうすると「message, [送信した内容]」がコンソールに出力される
