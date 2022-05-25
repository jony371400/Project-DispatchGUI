var socket = io.connect('http://127.0.0.1:3000');

socket.on('connect', () => {
    socket.send('Socket Connected!')
})

socket.on('message', (msg) => {
    console.log('Recive Message : ', msg)
    // UpdateUI()
});

function UpdateUI() {
    let startpos = document.getElementById('startpos')
    let S1 = document.getElementById('S1')
    let S2 = document.getElementById('S2')
    let S3 = document.getElementById('S3')
    let A1 = document.getElementById('A1')
    let A2 = document.getElementById('A2')
    let B1 = document.getElementById('B1')
    let B2 = document.getElementById('B2')
    let B3 = document.getElementById('B3')
    let C1 = document.getElementById('C1')
    let C2 = document.getElementById('C2')
    let C3 = document.getElementById('C3')

    S1.style.background = "#ffff00"
    S2.style.background = "#ffff00"
    S3.style.background = "#ffff00"
    A1.style.background = "#ffff00"
    A2.style.background = "#ffff00"
    B3.style.background = "#ffff00"
    B1.style.background = "#ffff00"
    B2.style.background = "#ffff00"
    C1.style.background = "#ffff00"
    C2.style.background = "#ffff00"
    C3.style.background = "#ffff00"

    LightEffect(S1)
    // LightEffect(S2)
    LightEffect(S3)
    // LightEffect(A1)
    LightEffect(A2)
    // LightEffect(B1)
    LightEffect(B2)
    // LightEffect(B3)
    LightEffect(C1)
    // LightEffect(C2)
    LightEffect(C3)
}

function LightEffect(Light) {
    isLight = false
    isLight = !isLight;
    if (isLight) {
        //是否更明亮（白光） 默認否
        var lighter = false;
        timer = setInterval(function () {
            //燈光閃爍
            lighter = !lighter;
            if (lighter) {
                Light.style.background = "#ffff00"
                Light.style.boxShadow = "0 0 15px 15px #ffe348";
            } else {
                Light.style.background = "#ff0000"
                Light.style.boxShadow = "0 0 15px 15px #f7f7f7";
            }
        }, 1000);
    } else {
        clearInterval(timer);
        doc.getElementsByClassName("light")[0].style.background = "#999";
        //燈罩(boxShadow)是夜光的，哈哈，開燈的時候不亮,關燈的時候會亮。
        doc.getElementsByClassName("light")[0].style.boxShadow = "0 0 20px 2px #85fd5d";
    }
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