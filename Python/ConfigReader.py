import configparser


class ConfigReader:

    def __init__(self):
        self.config = configparser.ConfigParser()
        self.config.read(
            'E:/Projects/Side Projects/LiveForexRates/Python/config.ini')

    def get_web_socket_url(self):
        return self.config['api']['websocket_url']

    def get_api_token(self):
        return self.config["api"]["token"]

    def get_api_key(self):
        return self.config['api']['api_url']

    def get_user_set_rate(self):
        return self.config['user_settings']['user_set_rate']

    def get_user_set_exchange(self):
        return self.config['user_settings']['forex_symbol']

    def get_user_set_exchange_symbol(self):
        return self.config['user_settings']['forex_exchange_symbol']
