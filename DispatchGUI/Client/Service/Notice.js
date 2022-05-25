var socket = io.connect('http://127.0.0.1:3000');

socket.on('connect', () => {
    socket.send('Socket Connected!')
})

socket.on('message', (msg) => {
    console.log('Recive Message : ', msg)
});

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
        .then((data) => {
            console.log('Success!')
            console.log('DATA : ', data)
        })
        .catch((err) => {
            console.log('Fail!')
            console.log('ERR : ', err)
        })
}

function Sending() {
    console.log('Send Message!')
    socket.send('Frontend Send Message')
}

// Notice_Service()
// setInterval(Notice_Service, 5000)