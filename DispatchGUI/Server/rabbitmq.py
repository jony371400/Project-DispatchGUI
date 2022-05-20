import pika, sys, os
import json

RabbitMQ_IP = '127.0.0.1'
# RabbitMQ_IP = '10.10.0.14'

def Sending(jsonData):
    connection = pika.BlockingConnection(pika.ConnectionParameters(RabbitMQ_IP))
    jsonData_string = json.dumps(jsonData)
    # print(jsonData_string)
    channel = connection.channel()
    channel.queue_declare(queue='work_queue_to_MES')
    channel.basic_publish(exchange='',
                        routing_key='work_queue_to_MES',
                        body=jsonData_string)
    print('Send Success!')
    connection.close()

def Reciving():
    connection = pika.BlockingConnection(pika.ConnectionParameters(RabbitMQ_IP))
    channel = connection.channel()
    channel.queue_declare(queue='work_queue_to_MES')

    def callback(ch, method, properties, body):
        # print(" [x] Received %r" % body)
        jsonData = json.loads(body)
        print(jsonData)
        print(type(jsonData))
        # print(body)

    channel.basic_consume(queue='work_queue_to_MES', on_message_callback=callback, auto_ack=True)
    channel.start_consuming()
