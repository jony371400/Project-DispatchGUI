const WebSocket = require('ws');

const ws = new WebSocket.Server({ port: 7890 }, () => {
    console.log('Socket Start!');
});

ws.on('connection', (client) => {
    client.on('message', (msg) => {
        console.log('前端數據 ： ' + msg);
        client.send('Welcome');
    })

    client.on('close', (msg) => {
        console.log('斷開連接');
    })
})