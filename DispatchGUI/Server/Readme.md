# Startup
> Toturial about how to run Dispatch System GUI
```
1. Init
    Install your Environment
        $ pip3 install -r requirement.txt

2. Setting Backend Config
    config.py 
        HOST / PORT / RabbitMQ_HOST / RabbitMQ_NAME / RabbitMQ_PASSWORD

3. Setting Frontend Config
    static/Service/Config.js
        HOST / PORT

4. Execute Project
    $ python3 app.py

5. Connect GUI
    Your Browser input {IP:PORT}

6. Have Fun ~~~

```

# RabbitMQ Format

## Queue Name

> Queue Name
```
1. work_queue_to_MCS
    This queue operate send  GUI's para to ITRI DS

2. work_queue_to_MES
    This queue operate recive para from ITRI DS's

```

## JSON Format
> Recive JsonData
```
{
    'spec': 'MCS Communication Message Spec', 
    'version': '1.0', 
    'head': { 
        'date': '2022-05-23T10:12:24.107631', 
        'uuid': 'f29a1ad7-d84e-5272-b397-513311bef15e', 
        'priority': 1, 'agent': 'MES' 
    }, 
    'data': { 
        'typename': 'vehicle_update_vertex', 
        'params': { 
            'vehicleID': 'I001MR', 
            'vertexName': 'start' 
        } 
    }
}
```

> Moveto JsonData
```
{
    'spec': 'MCS Communication Message Spec', 
    'version': '1.0', 
    'head': {
        'date': '2022-06-16  15:55:56.', 
        'uuid': 'e06d6324-6680-4be8-b48d-33c372a0233a', 
        'priority': 2, 'agent': 'MES'
    }, 
    'data': {
        'command': 'move', 
        'params': {
            'mrName': 'I001MR', 
            'operator': 'MES', 
            'toPort': 'start', 
            'mode': 0
        }
    }
}
```

> Transport JsonData (Not-Sure)
```
{
    'spec': 'MCS Communication Message Spec', 
    'version': '1.0', 
    'head': { 
        'date': '2022-05-23T10:12:24.107631', 
        'uuid': 'f29a1ad7-d84e-5272-b397-513311bef15e', 
        'priority': 1, 'agent': 'MES' 
    }, 
    'data': { 
        'typename': 'vehicle_update_vertex', 
        'params': { 
            'vehicleID': 'I001MR', 
            'vertexName': 'start' 
        } 
    }
}
```

> Charge JsonData (Not-Sure)
```
{
    "spec": "MCS Communication Message Spec",
    "version": " 1.0",
    "head": {
        "date": "2020-01-01 23:59:59.999",
        "uuid": "b6b11e0c-1764-11eb-adc1-0242ac120002",
        "priority": 2,
        "agent": "MES"
    },
    "data": {
        "command": "go_charge",
        "params": {
            "vehicleID": "I001MR",
            "operator": "someone",
            "destination": "v4"
        }
    }
}

NoticeData = {
    "spec": "MCS Communication Message Spec",
    "version": "1.0",
    "head": {
        "date": "2022-05-26T09:55:51.384461",
        "uuid": "304b29ee-1aff-5019-ad17-2e6972fa3442",
        "priority": 1,
        "agent": "MES"
    },
    "data": {
        "typename": "vehicle_update_vertex",
        "params": {
            "vehicleID": "I001MR",
            "vertexName": "store1"
        }
    }
}
```

## Test Script
> Recever
```
Execute rabbitmq_reciver.py
$ python3 rabbitmq_reciver.py
```

> Sender
```
Execute rabbitmq_sender.py
$ python3 rabbitmq_sender.py
```