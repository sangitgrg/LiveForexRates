import WebSocket from 'ws';
import { doesRateMatch } from './rate_checker'

const socket = new WebSocket('wss://ws.finnhub.io?token=');

// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:USD_JPY' }))
});

// Listen for messages
socket.addEventListener('message', function (event) {
    const rate_obj = event.data;
    // check if user set rate is equal to rate_obj
    doesRateMatch(rate_obj.p, 123)
    // and send notification

    console.log('Message from server ', event.data);
});

// Unsubscribe
// var unsubscribe = function (symbol) {
//     socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
// }