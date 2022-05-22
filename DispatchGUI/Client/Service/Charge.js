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
        "command": "stop_charge",
        "params": {
            "vehicleID": " I001MR ",
            "operator": "someone"
        }
    }
}

function Charge_Service() { 
    let AMR = document.getElementById('AMRs_charge')
    let AMRIndex = AMR.selectedIndex
    let AMRValue = AMR[AMRIndex].value

    console.log(AMRIndex)
    console.log(AMRValue)

    let ChargeStation = document.getElementById('ChargeStation')
    let ChargeStationIndex = ChargeStation.selectedIndex
    
    if (ChargeStationIndex === 0){
        console.log('Charge')

        jsonData_Charege.data.params.vehicleID = AMRValue
    }
    else{
        console.log('Non Charge')

        jsonData_NoCharege.data.params.vehicleID = AMRValue
    }
}