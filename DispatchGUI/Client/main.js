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

data = { 'fromId': 'v14', 'toId': 'v16', 'carrierId': 'carrier12' }

function Connection() {
    const url = 'https://cwpeng.github.io/live-records-samples/data/products.json'

    fetch(url).then(res => {
        console.log(res)
        return res.json()
    }).then((data) => {
        console.log('Success!')
        console.log(data)
    }).catch(() => {
        console.log('Fail!')
    })
}

function ConnectionDS() {  
    const url = 'http://localhost:3000/amr/transfer'
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData),
    }).then(res => {
        console.log('Success!')
        console.log('RES : ', res)
        return res.json()
    }).then((data) => {
        console.log('Success!')
        console.log('DATA : ', data)
    }).catch((err) => {
        console.log('Fail!')
        console.log('ERR : ', err)
    })
}



