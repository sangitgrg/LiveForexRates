import WebSocket from 'ws';
import { doesRateMatch } from './rate_checker';
import { getapikey, getusersetrate } from './config_reader';

const socket = new WebSocket(getapikey);

// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:USD_JPY' }))
});

// Listen for messages
socket.addEventListener('message', function (event) {
    const rate_obj = event.data;
    // check if user set rate is equal to rate_obj
    // and send notification
    if (doesRateMatch(rate_obj.p, 123))
        console.log('rate matches')
    else
        console.log('rate doesnot match')


    console.log('Message from server ', event.data);
});

// Unsubscribe
// var unsubscribe = function (symbol) {
//     socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
// }