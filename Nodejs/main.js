import WebSocket from 'ws';
const socket = new WebSocket('wss://ws.finnhub.io?token=c43jglqad3if0j0sp18g');

// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:USD_JPY' }))
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

// Unsubscribe
// var unsubscribe = function (symbol) {
//     socket.send(JSON.stringify({ 'type': 'unsubscribe-news', 'symbol': symbol }))
// }