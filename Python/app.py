from config_reader import ConfigReader
import websocket
settings = ConfigReader()
api_token = settings.getapitoken()
exch_symb = settings.getusersetexchangesymbol()
websocket_url = settings.getwebsocketurl()


def on_message(ws, message):
    rate_obj = message
    print(message)


def on_error(ws, error):
    print(error)


def on_close(ws):
    print("### closed ###")


def on_open(ws):
    ws.send('{"type": "subscribe", "symbol": %s}' % (exch_symb))


if __name__ == "__main__":
    websocket_url += api_token
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp(websocket_url,
                                on_message=on_message,
                                on_error=on_error,
                                on_close=on_close)
    ws.on_open = on_open
    ws.run_forever()
