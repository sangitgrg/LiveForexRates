from Python.ConfigReader import ConfigReader
import requests
settings = ConfigReader()
api_url = settings.get_api_key()
api_token = settings.get_api_token()
forex_symbol = settings.get_user_set_exchange()


class ForexRate:

    def get_exchanges_list():
        parameters = {
            "token": api_token}
        response = requests.get(api_url, params=parameters)
        return response

    def get_exchange_symbol(self):
        parameters = {
            "exchange": forex_symbol,
            "token": api_token}
        response = requests.get(api_url, params=parameters)
        return response
