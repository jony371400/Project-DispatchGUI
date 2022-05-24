# RabbitMQ 

> Queue Name
```
work_queue_to_MCS
work_queue_to_MES
```

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
    "spec": "MCS Communication Message Spec",
    "version": " 1.0",
    "head": {
        "date": "2020-01-01 23:59:59.999",
        "uuid": "b6b11e0c-1764-11eb-adc1-0242ac120002",
        "priority": 2,
        "agent": "MES"
    },
    "data": {
        "command": "moveto",
        "params": {
            "vehicleID": "I001MR",
            "operator": "someone",
            "destination": "v4"
        }
    }
}
```

> Transport JsonData
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

> Charge JsonData
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
```