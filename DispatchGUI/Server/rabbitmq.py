import pika, sys, os
import json
import websockets
import asyncio

RabbitMQ_IP = '127.0.0.1'
# RabbitMQ_IP = '10.10.0.14'

# jsonDataRecive = {
#     "spec": "MCS Communication Message Spec",
#     "version": " 1.0",
#     "head": {
#         "date": "2020-01-01 23:59:59.999",
#         "uuid": "b6b11e0c-1764-11eb-adc1-0242ac120002",
#         "priority": 2,
#         "agent": "MES"
#     },
#     "data": {
#         "command": "moveto",
#         "params": {
#             "vehicleID": "I001MR",
#             "operator": "someone",
#             "destination": "v4"
#         }
#     }
# }

jsonDataRecive = { 'fromId': 'v14', 'toId': 'v16', 'carrierId': 'carrier12' }

def Sending(jsonData):
    connection = pika.BlockingConnection(pika.ConnectionParameters(RabbitMQ_IP))
    jsonData_string = json.dumps(jsonData)
    print(jsonData_string)
    channel = connection.channel()
    channel.queue_declare(queue='work_queue_to_MES')
    channel.basic_publish(exchange='',
                        routing_key='work_queue_to_MES',
                        body=jsonData_string)
    print('Send Success!')
    connection.close()

def Reciving():
    print('Recive RabbitMQ !')
    connection = pika.BlockingConnection(pika.ConnectionParameters(RabbitMQ_IP))
    channel = connection.channel()
    channel.queue_declare(queue='work_queue_to_MES')

    def callback(ch, method, properties, body):
        jsonDataRecive = json.loads(body)
        print(jsonDataRecive)

    channel.basic_consume(queue='work_queue_to_MES', on_message_callback=callback, auto_ack=True)
    channel.start_consuming()

