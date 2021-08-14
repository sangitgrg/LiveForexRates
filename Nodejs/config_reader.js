const fs = require('fs')
    , ini = require('ini')

const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'))

const getwebscoketurl = config.api.websocket_url;

const getapikey = config.api.api_url;

const getapitoken = config.api.token;

const getusersetrate = config.user_settings.user_set_rate;

exports.getapikey = getapikey;
exports.getusersetrate = getusersetrate;
exports.getwebscoketurl = getwebscoketurl;
exports.getapitoken = getapitoken;