from Python.config_reader import ConfigReader
import requests
settings = ConfigReader()
api_url = settings.getapikey()
api_token = settings.getapitoken()
forex_symbol = settings.getusersetexchange()


class ForexRate:

    def getexchangeslist():
        parameters = {
            "token": api_token}
        response = requests.get(api_url, params=parameters)
        return response

    def getexchangesymbol(self):
        parameters = {
            "exchange": forex_symbol,
            "token": api_token}
        response = requests.get(api_url, params=parameters)
        return response
