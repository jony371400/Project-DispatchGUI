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
# import rabbitmq_sender
# import rabbitmq_reciver

app = Flask(__name__)

socketio = SocketIO(app , cors_allowed_origins="*", async_mode='threading')

CORS(app)

@app.route("/DispatchSys")
def DispatchSys():
    return  render_template("/Client/index.html")

@app.route('/amr/transfer', methods=['POST'])
def transfer():
    print(Fore.YELLOW + 'API[transfer] Success!' + Fore.WHITE)
    jsonData = request.get_json()
    # rabbitmq_sender.Sending(jsonData)
    return jsonData

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
    
    # rabbitmq_sender.Sending(jsonData)
    Sending(jsonData)
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

    # NoticeData = rabbitmq_sender.NoticeData
    # print(Fore.YELLOW + 'NoticeData : ' + Fore.WHITE)
    # print(NoticeData)

    # return rabbitmq_sender.NoticeData
    return 'yes'

@socketio.on('message')
def Recive(msg) : 
    print('Recive From Client Message : ' , msg)
    send('Got it!' , broadcast = True)

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
    
    # channel.queue_declare(queue='work_queue_to_MCS')
    channel.basic_publish(exchange='',
                        routing_key='work_queue_to_MCS',
                        body=SendingData)

    connection.close()
    print(Fore.GREEN + 'Send Success!' + Fore.WHITE)

def Reciving():
    print(Fore.RED + 'Thread Start Success!' + Fore.WHITE)
    credentials = pika.PlainCredentials(config.RabbitMQ_NAME, config.RabbitMQ_PASSWORD)
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=config.RabbitMQ_HOST , credentials=credentials))
    channel = connection.channel()
    # channel.queue_declare(queue='work_queue_to_MES')

    def callback(ch, method, properties, body):
        print(Fore.LIGHTBLUE_EX + 'Reciving Function' + Fore.WHITE)

        RecivingData = json.loads(body)

        print(Fore.YELLOW + 'RecivingData : ' + Fore.WHITE)
        print(Fore.YELLOW + str(RecivingData) + Fore.WHITE)
        Notice(RecivingData)

    channel.basic_consume(queue='work_queue_to_MES', on_message_callback=callback, auto_ack=True)
    channel.start_consuming()

def Notice(NoticeData):
    print(Fore.LIGHTBLUE_EX + 'Notice Function' + Fore.WHITE)
    print(Fore.YELLOW + 'NoticeData : ' + Fore.WHITE)
    print(Fore.YELLOW + str(NoticeData) + Fore.WHITE)

    # print('Here I Want MSG : ' , NoticeData["data"]["params"]["vehicleID"])
    socketio.emit('message' , NoticeData["data"]["params"] ,  broadcast = True)

t = threading.Thread(target = Reciving)
t.start()

if __name__ == "__main__":
    try:
        print(Fore.RED + 'App Run !' + Fore.WHITE)
        # app.run(host="localhost", port=3000) 
        socketio.run(app , host=config.HOST, port=config.PORT)
    except KeyboardInterrupt:
        print('Interrupted')

        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)