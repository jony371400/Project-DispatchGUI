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

print(NoticeData)
print(NoticeData["data"]["params"]["vehicleID"])
