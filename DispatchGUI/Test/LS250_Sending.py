import pika
import json

jsonData = {
    "spec": "MCS Communication Message Spec",
    "version": " 1.0",
    "head": {
        "date": "2020-01-01 23:59:59.999",
        "uuid": "b6b11e0c-1764-11eb-adc1-0242ac120002",
        "priority": 2,
        "agent": "MES"
    },
    "data": {
        "command": "transfer",
        "params": {
            "operator": "someone",
            "fromPort": "v1",
            "toPort": "v3",
            "carrierID": "CARRIER1",
            "carrierType": "MAGAZINE"
        }
    }
}

jsonData_string = json.dumps(jsonData)
# print(jsonData_string)

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()
# channel.queue_declare(queue='work_queue_to_MES')
channel.basic_publish(exchange='',
                      routing_key='work_queue_to_MES',
                      body=jsonData_string)

print(" [x] Sent 'LS250!'")
connection.close()