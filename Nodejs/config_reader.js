var fs = require('fs')
    , ini = require('ini')

var config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'))

const getapikey = () => {
    return config.api.api_url;
}

const getusersetrate = () => {
    return config.user_settings.user_set_rate;
}

export const getapikey, getusersetrate;