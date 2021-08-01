import configparser


class ConfigReader:

    def __init__(self):
        self.config = configparser.ConfigParser()
        self.config.read(
            'E:/Projects/Side Projects/LiveForexRates/Python/config.ini')

    def getwebsocketurl(self):
        return self.config['api']['websocket_url']

    def getapitoken(self):
        return self.config["api"]["token"]

    def getapikey(self):
        return self.config['api']['api_url']

    def getusersetrate(self):
        return self.config['user_settings']['user_set_rate']

    def getusersetexchange(self):
        return self.config['user_settings']['forex_symbol']

    def getusersetexchangesymbol(self):
        return self.config['user_settings']['forex_exchange_symbol']
