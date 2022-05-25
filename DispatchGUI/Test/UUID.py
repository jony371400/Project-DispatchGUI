import time
import uuid

import jsonschema

date = time.strftime('%Y-%m-%d  %H:%M:%S.', time.localtime())

uuid = str(uuid.uuid4())

print('---------------------------------')
print(date)

print('---------------------------------')
print(uuid)

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
        "command": "move",
        "params": {
            "mrName": " I001MR ",
            "operator": "someone",
            "toPort": "p1-1"
        }
    }
}

print(jsonData)
print(type(jsonData))

jsonData["data"] = 'asdf'


print(jsonData)
print(type(jsonData))