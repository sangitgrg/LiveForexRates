from ConfigReader import ConfigReader
import websocket
import json
settings = ConfigReader()
exch_symb = settings.get_user_set_exchange_symbol()


def on_message(ws, message):
    rate_obj = json.loads(message)
    print(rate_obj["data"][0]["p"])


def on_error(ws, error):
    print(error)


def on_close(ws):
    print("### closed ###")


def on_open(ws):
    ws.send('{"type": "subscribe", "symbol": %s}' % (exch_symb))


def start_socket_connection():
    websocket_url = settings.get_web_socket_url() + settings.get_api_token()
    print('socket url' + websocket_url)
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp(websocket_url,
                                on_message=on_message,
                                on_error=on_error,
                                on_close=on_close)
    ws.on_open = on_open
    ws.run_forever()
