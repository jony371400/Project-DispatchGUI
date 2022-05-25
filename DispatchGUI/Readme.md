# Package Introduce

> Client
```
- Frontend(UI)
Using Web-UI to send command to Backend
```

> Server
```
- Backend
Accept command from UI and sending to MCS by RabbitMQ
Accept notice from RabbitMQ and update UI
```

> Test
```
Just for testing
```

> Format
```
jsonData_Move = {
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

jsonData_Transfer = {
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
            "fromPort": "v5",
            "toPort": "v12",
            "carrierID": "CARRIER1",
            "carrierType": "MAGAZINE"
        }
    }
}

jsonData_Charege = {
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

jsonData_NoCharege = {
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
        }
    }
}


```