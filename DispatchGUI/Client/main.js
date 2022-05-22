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