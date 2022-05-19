# API

> API Name
```
- Use fetch

- Transer : http://{ip}/amr/transfer

- Move To : http://{ip}/amr/moveto

- Go Charge : http://{ip}/amr/gocharge

- Stop Charge : http://{ip}/amr/stopcharge

```

> Json Format  
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
```