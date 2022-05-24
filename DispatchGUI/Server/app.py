import sys , os
# from http.client import FORBIDDEN
from flask import Flask
from flask import redirect
from flask import request
from flask_cors import CORS
import colorama
from colorama import Fore, Style
import rabbitmq_sender
import rabbitmq_reciver

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "Flask on port 3000."

@app.route('/amr/transfer', methods=['POST'])
def transfer():
    print(Fore.YELLOW + 'API[transfer] Success!' + Fore.WHITE)
    jsonData = request.get_json()
    rabbitmq_sender.Sending(jsonData)
    return jsonData

@app.route('/amr/moveto', methods=['POST'])
def moveto():
    print(Fore.YELLOW + 'API[moveto] Success!' + Fore.WHITE)

    jsonData = request.get_json()
    print('JSON DATA : ')
    print(jsonData)
    
    rabbitmq_sender.Sending(jsonData)
    return jsonData

@app.route('/amr/gocharge', methods=['POST'])
def gocharge():
    print(Fore.YELLOW + 'API Success!' + Fore.WHITE)
    jsonData = request.get_json()
    # rabbitmq_sender.Sending(jsonData)
    return jsonData

@app.route('/amr/stopcharge', methods=['POST'])
def stopcharge():
    print(Fore.YELLOW + 'API[stopcharge] Success!' + Fore.WHITE)
    jsonData = request.get_json()
    # rabbitmq_sender.Sending(jsonData)
    return jsonData

@app.route('/amr/notice', methods=['GET'])
def notice():
    print(Fore.YELLOW + 'API[notice] Success!' + Fore.WHITE)    

    NoticeData = rabbitmq_sender.NoticeData
    print(Fore.YELLOW + 'NoticeData : ' + Fore.WHITE)
    print(NoticeData)

    return rabbitmq_sender.NoticeData

if __name__ == "__main__":
    try:
        app.run(host="localhost", port=3000) 
        print('APP RUN!')
    except KeyboardInterrupt:
        print('Interrupted')

        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)