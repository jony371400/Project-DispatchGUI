import pika, sys, os
import json

def main():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
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

if __name__ == '__main__':
    try:
        # print(' [*] Waiting for messages. To exit press CTRL+C')    
        print('Process Start!')
        main()
    except KeyboardInterrupt:
        print('Interrupted')

        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)
