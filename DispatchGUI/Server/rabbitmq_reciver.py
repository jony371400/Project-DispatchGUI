import pika
import json
from colorama import Fore, Style
import threading
import time

# HOST = '10.10.0.14'
HOST = '127.0.0.1'
NAME = 'user'
PASSWORD = 'qagv'
NoticeData = { 'fromId': 'v14', 'toId': 'v16', 'carrierId': 'carrier12' }
# print('NAME : ' + NAME)
# print('PASSWORD : ' + PASSWORD)
# print('HOST : ' + HOST)

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

t = threading.Thread(target = Reciving)
t.start()
print('Rabbit Reciver Start!')