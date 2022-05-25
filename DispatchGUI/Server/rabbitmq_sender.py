import pika
import json
from colorama import Fore, Style

# HOST = '10.10.0.14'
HOST = '127.0.0.1'
NAME = 'user'
PASSWORD = 'qagv'
NoticeData = { 'fromId': 'v14', 'toId': 'v16', 'carrierId': 'carrier12' }
# print('NAME : ' + NAME)
# print('PASSWORD : ' + PASSWORD)
# print('HOST : ' + HOST)

def Sending(jsonData):
    credentials = pika.PlainCredentials(NAME, PASSWORD)
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=HOST , credentials=credentials))
    jsonData_string = json.dumps(jsonData)
    print(Fore.LIGHTBLUE_EX + jsonData_string + Fore.WHITE)
    
    channel = connection.channel()
    # channel.queue_declare(queue='work_queue_to_MCS')
    channel.basic_publish(exchange='',
                        routing_key='work_queue_to_MCS',
                        body=jsonData_string)

    print(Fore.YELLOW + 'Send Success!' + Fore.WHITE)
    connection.close()

print('RabbitMQ Sender Start!')