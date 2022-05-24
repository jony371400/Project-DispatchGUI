import pika
import json

HOST = '10.10.0.14'
# HOST = '127.0.0.1'
NAME = 'user'
PASSWORD = 'qagv'

jsonData = {
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

jsonData_string = json.dumps(jsonData)
# jsonData_string = json.dumps(jsonData).encode('utf-8')
print(jsonData_string)

credentials = pika.PlainCredentials(NAME, PASSWORD)
connection = pika.BlockingConnection(pika.ConnectionParameters(host=HOST , credentials=credentials))

channel = connection.channel()
# channel.queue_declare(queue='work_queue_to_MCS')
channel.basic_publish(exchange='',
                      routing_key='work_queue_to_MCS',
                      body=jsonData_string)

print('Send Success!')
connection.close()