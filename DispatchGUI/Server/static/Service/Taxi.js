function Taxi_Service() {
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
                "operator": "MES",
                "toPort": "p1-1"
            }
        }
    }

    let AMR = document.getElementById('AMRs_taxi')
    let AMRIndex = AMR.selectedIndex
    let AMRValue = AMR[AMRIndex].value

    console.log(AMRIndex)
    console.log(AMRValue)

    let Station = document.getElementById('Stations_taxito')
    let StationIndex = Station.selectedIndex
    let StationValue = Station[StationIndex].value

    console.log(StationIndex)
    console.log(StationValue)

    jsonData.data.params.mrName = AMRValue
    jsonData.data.params.toPort = StationValue
    console.log(jsonData)

    // const url = 'http://localhost:3000/amr/moveto'
    const url = 'http://10.10.0.76:3000/amr/moveto'
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData),
    })
        .then(res => {
            console.log('Success!')
            console.log('RES : ', res)
            return res.json()
        })
        // .then((data) => {
        //     console.log('Success!')
        //     console.log('DATA : ', data)
        // })
        .catch((err) => {
            console.log('Fail!')
            console.log('ERR : ', err)
        })
}