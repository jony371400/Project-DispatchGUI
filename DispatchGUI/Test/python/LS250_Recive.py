import pika, sys, os
import json

HOST = '10.10.0.14'
NAME = 'user'
PASSWORD = 'qagv'

def main():
    print('NAME : ' + NAME)
    print('PASSWORD : ' + PASSWORD)
    print('HOST : ' + HOST)
    
    credentials = pika.PlainCredentials(NAME, PASSWORD)
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=HOST , credentials=credentials))
    channel = connection.channel()
    # channel.queue_declare(queue='work_queue_to_MES')

    def callback(ch, method, properties, body):
        jsonData = json.loads(body)
        print(jsonData)

    channel.basic_consume(queue='work_queue_to_MES', on_message_callback=callback, auto_ack=True)
    channel.start_consuming()

if __name__ == '__main__':
    try:    
        print('Process Start!')
        main()
    except KeyboardInterrupt:
        print('Interrupted')

        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)
