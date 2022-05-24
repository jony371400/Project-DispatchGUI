import pika, sys, os
import json
import colorama
from colorama import Fore, Style
import threading
import time

# HOST = '10.10.0.14'
HOST = '127.0.0.1'
NAME = 'user'
PASSWORD = 'qagv'
NoticeData = {
    "spec": "MCS Communication Message Spec",
    "version": " 1.0",
    "head": {
        "date": "2020-05-23T11:59:59.999",
        "uuid": "b6b11e0c-1764-11eb-adc1-0242ac120002",
        "priority": 2,
        "agent": "UI"
    },
    "data": {
        "command": "move",
        "params": {
            "mrName": "I001MR",
            "operator": "cmdline",
            "mode": "0",
            "toPort": "store1",
            "carrierID": "",
            "carrierType": ""
        }
    }
}


# print('NAME : ' + NAME)
# print('PASSWORD : ' + PASSWORD)
# print('HOST : ' + HOST)
# print('Recive RabbitMQ !')

def Reciving():
    credentials = pika.PlainCredentials(NAME, PASSWORD)
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=HOST , credentials=credentials))
    channel = connection.channel()
    channel.queue_declare(queue='work_queue_to_MES')

    def callback(ch, method, properties, body):
        NoticeData = json.loads(body)
        print(Fore.YELLOW + 'NoticeData : ' + Fore.WHITE)
        print(NoticeData)

    channel.basic_consume(queue='work_queue_to_MES', on_message_callback=callback, auto_ack=True)
    channel.start_consuming()

def job():
  for i in range(5):
    print("Child thread:", i)
    time.sleep(1)

print('Rabbit Reciver Start!')
t = threading.Thread(target = Reciving)
t.start()