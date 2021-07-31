import WebSocket from 'ws';

const socket = new WebSocket('wss://ws.finnhub.io?token=');

// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'JPYNPR' }))
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

// Unsubscribe
// var unsubscribe = function (symbol) {
//     socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
// }