const WebSocket = require('ws')
const { getapitoken, getusersetrate, getwebscoketurl } = require('./config_reader');
const rate_checker = require('./rate_checker');
const socket = new WebSocket(`${getwebscoketurl}${getapitoken}`);

// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:USD_JPY' }))
});

// Listen for messages
socket.addEventListener('message', function (event) {
    const rate_obj = JSON.parse(event.data);
    if (rate_obj['type'] == 'trade') {
        console.log('Message from server ', rate_obj.data[0].p);
        // check if user set rate is equal to rate_obj
        // and send notification
        if (rate_checker.doesRateMatch(getusersetrate, rate_obj.data[0].p))
            console.log('rate matches')
        else
            console.log('rate doesnot match')
    }
});

// Unsubscribe
// var unsubscribe = function (symbol) {
//     socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
// }