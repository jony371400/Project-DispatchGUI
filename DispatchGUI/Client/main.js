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
        "command": "moveto",
        "params": {
            "vehicleID": "I001MR",
            "operator": "someone",
            "destination": "v4"
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
    let AMR = document.getElementById('AMRs')
    let AMRIndex = AMR.selectedIndex
    let AMRValue = AMR[AMRIndex].value

    console.log(AMRIndex)
    console.log(AMRValue)

    let Station = document.getElementById('Stations')
    let StationIndex = Station.selectedIndex
    let StationValue = Station[StationIndex].value

    console.log(StationIndex)
    console.log(StationValue)

    jsonData.data.params.vehicleID = AMRValue
    jsonData.data.params.destination = StationValue
    console.log(jsonData)

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
