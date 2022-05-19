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

    data = { 'fromId': 'v14', 'toId': 'v16', 'carrierId': 'carrier12' }

    const url = 'http://localhost:3000/amr/transfer'
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(data),
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



