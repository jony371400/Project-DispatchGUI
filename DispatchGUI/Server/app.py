import sys , os
from flask import Flask
from flask import render_template
from flask import request
from flask_cors import CORS
# import colorama
from colorama import Fore, Style
import pika
import json
import threading
from flask_socketio import SocketIO , send , emit
import time
import uuid
import config

app = Flask(__name__)

socketio = SocketIO(app , cors_allowed_origins="*", async_mode='threading')

CORS(app)

# API {Home Page}
@app.route("/")
def index():
    return  render_template("/Client/index.html")

# API {SKYEYES Page(Not-USE)}
@app.route("/skyeyes")
def skyeyes():
    return  render_template("/Client/skyeyes.html")

# API {TRANSFER(Not-USE)}
# We don't have Track or Jackup module
@app.route('/amr/transfer', methods=['POST'])
def transfer():
    print(Fore.YELLOW + 'API[transfer] Success!' + Fore.WHITE)
    jsonData = request.get_json()
    return jsonData

# API {MOVE}
@app.route('/amr/moveto', methods=['POST'])
def moveto():
    print(Fore.YELLOW + 'API[moveto] Success!' + Fore.WHITE)
    date = time.strftime('%Y-%m-%d  %H:%M:%S.', time.localtime())
    guuid = uuid.uuid4()
    guuid_str = str(guuid)

    jsonData = request.get_json()
    jsonData["head"]["date"] = date
    jsonData["head"]["uuid"] = guuid_str

    print('JSON DATA : ')
    print(jsonData)
    
    Sending(jsonData)
    return jsonData

# API {Charge Start(Not-USE)}
# We don't have Charge Station
@app.route('/amr/gocharge', methods=['POST'])
def gocharge():
    print(Fore.YELLOW + 'API Success!' + Fore.WHITE)
    jsonData = request.get_json()
    return jsonData

# API {Charge Stop(Not-USE)}
# We don't have Charge Station
@app.route('/amr/stopcharge', methods=['POST'])
def stopcharge():
    print(Fore.YELLOW + 'API[stopcharge] Success!' + Fore.WHITE)
    jsonData = request.get_json()
    return jsonData

# SocketIO connection connect (Init)
@socketio.on('message')
def Recive(msg) : 
    print('Recive From Client Message : ' , msg)
    send('Got it!' , broadcast = True)

# Send DATA to MCS
def Sending(jsonData):
    print(Fore.LIGHTBLUE_EX + 'Sending Function' + Fore.WHITE)
    credentials = pika.PlainCredentials(config.RabbitMQ_NAME, config.RabbitMQ_PASSWORD)
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=config.RabbitMQ_HOST , credentials=credentials))
    SendingData = json.dumps(jsonData)

    print(Fore.YELLOW + 'SendingData : ' + Fore.WHITE)
    print(Fore.YELLOW + SendingData + Fore.WHITE)
    
    channel = connection.channel()

    # channel.queue_declare(queue='work_queue_to_MES')
    # channel.basic_publish(exchange='',
    #                     routing_key='work_queue_to_MES',
    #                     body=SendingData)
    
    channel.queue_declare(queue='work_queue_to_MCS')
    channel.basic_publish(exchange='',
                        routing_key='work_queue_to_MCS',
                        body=SendingData)

    connection.close()
    print(Fore.GREEN + 'Send Success!' + Fore.WHITE)

# Recive DATA from MCS
def Reciving():
    print(Fore.RED + 'Thread Start Success!' + Fore.WHITE)
    credentials = pika.PlainCredentials(config.RabbitMQ_NAME, config.RabbitMQ_PASSWORD)
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=config.RabbitMQ_HOST , credentials=credentials))
    channel = connection.channel()
    
    channel.queue_declare(queue='work_queue_to_MES')

    def callback(ch, method, properties, body):
        print(Fore.LIGHTBLUE_EX + 'Reciving Function' + Fore.WHITE)

        RecivingData = json.loads(body)

        print(Fore.YELLOW + 'RecivingData : ' + Fore.WHITE)
        print(Fore.YELLOW + str(RecivingData) + Fore.WHITE)
        Notice(RecivingData)

    channel.basic_consume(queue='work_queue_to_MES', on_message_callback=callback, auto_ack=True)
    channel.start_consuming()

# Notice Frontend and Send Para
def Notice(NoticeData):
    print(Fore.LIGHTBLUE_EX + 'Notice Function' + Fore.WHITE)
    print(Fore.YELLOW + 'NoticeData : ' + Fore.WHITE)
    print(Fore.YELLOW + str(NoticeData) + Fore.WHITE)

    # print('Here I Want MSG : ' , NoticeData["data"]["params"]["vehicleID"])
    socketio.emit('message' , NoticeData["data"]["params"] ,  broadcast = True)

# Create a thread to LISTEN rabbitmq
t = threading.Thread(target = Reciving)
t.start()

if __name__ == "__main__":
    try:
        print(Fore.RED + 'App Run !' + Fore.WHITE)
        socketio.run(app , host=config.HOST, port=config.PORT)
    except KeyboardInterrupt:
        print('Interrupted')

        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)