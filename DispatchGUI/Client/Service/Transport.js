function Transport_Service() {
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
                "fromPort": "v5",
                "toPort": "v12",
                "carrierID": "CARRIER1",
                "carrierType": "MAGAZINE"
            }
        }
    }

    let AMR = document.getElementById('AMRs_transport')
    let AMRIndex = AMR.selectedIndex
    let AMRValue = AMR[AMRIndex].value

    console.log(AMRIndex)
    console.log(AMRValue)

    let StationFrom = document.getElementById('Stations_transfrom')
    let StationFromIndex = StationFrom.selectedIndex
    let StationFromValue = StationFrom[StationFromIndex].value

    console.log(StationFromIndex)
    console.log(StationFromValue)

    let StationTo = document.getElementById('Stations_transto')
    let StationToIndex = StationTo.selectedIndex
    let StationToValue = StationTo[StationToIndex].value

    console.log(StationToIndex)
    console.log(StationToValue)

    jsonData.data.params.vehicleID = AMRValue
    jsonData.data.params.fromPort = StationFromValue
    jsonData.data.params.toPort = StationToValue
    console.log(jsonData)
}