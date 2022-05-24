function UpdateUI() {

}

function Notice_Service() {
    console.log('Test')
    const url = 'http://localhost:3000/amr/notice'
    fetch(url, { method: 'GET' })
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

// Notice_Service()
setInterval(Notice_Service, 5000)