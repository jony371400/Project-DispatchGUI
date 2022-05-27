function UpdateUI(msg) {
    // #region Return Color
    startpos.style.background = "#ff0000"

    store1.style.background = "#ff0000"
    store2.style.background = "#ff0000"
    store3.style.background = "#ff0000"

    P11.style.background = "#000000"
    P12.style.background = "#000000"
    P13.style.background = "#000000"
    P14.style.background = "#000000"
    P15.style.background = "#000000"
    P16.style.background = "#000000"
    P17.style.background = "#000000"
    P21.style.background = "#000000"
    P22.style.background = "#000000"
    P23.style.background = "#000000"
    P24.style.background = "#000000"
    P25.style.background = "#000000"
    P26.style.background = "#000000"    
    P31.style.background = "#000000"
    P32.style.background = "#000000"
    P33.style.background = "#000000"
    P34.style.background = "#000000"
    P35.style.background = "#000000"    
    P41.style.background = "#000000"
    P42.style.background = "#000000"
    P43.style.background = "#000000"
    P44.style.background = "#000000"
    P45.style.background = "#000000"
    // #endregion

    if (msg.vehicleID === "I001MR") {
        console.log(msg.vehicleID)
        console.log(msg.vertexName)

        if (msg.vertexName === startpos.id) {
            startpos.style.background = "#ffff00"
        }
        else if (msg.vertexName === store1.id) {
            store1.style.background = "#ffff00"
        }
        else if (msg.vertexName === store2.id) {
            store2.style.background = "#ffff00"
        }
        else if (msg.vertexName === store3.id) {
            store3.style.background = "#ffff00"
        }
        else if (msg.vertexName === P11.id) {
            P11.style.background = "#ffff00"
        }
        else if (msg.vertexName === P12.id) {
            P12.style.background = "#ffff00"
        }
        else if (msg.vertexName === P13.id) {
            P13.style.background = "#ffff00"
        }
        else if (msg.vertexName === P14.id) {
            P14.style.background = "#ffff00"
        }
        else if (msg.vertexName === P15.id) {
            P15.style.background = "#ffff00"
        }
        else if (msg.vertexName === P16.id) {
            P16.style.background = "#ffff00"
        }
        else if (msg.vertexName === P21.id) {
            P21.style.background = "#ffff00"
        }
        else if (msg.vertexName === P22.id) {
            P22.style.background = "#ffff00"
        }
        else if (msg.vertexName === P23.id) {
            P23.style.background = "#ffff00"
        }
        else if (msg.vertexName === P24.id) {
            P24.style.background = "#ffff00"
        }
        else if (msg.vertexName === P25.id) {
            P25.style.background = "#ffff00"
        }
        else if (msg.vertexName === P26.id) {
            P26.style.background = "#ffff00"
        }
        else if (msg.vertexName === P31.id) {
            P31.style.background = "#ffff00"
        }
        else if (msg.vertexName === P32.id) {
            P32.style.background = "#ffff00"
        }
        else if (msg.vertexName === P33.id) {
            P33.style.background = "#ffff00"
        }
        else if (msg.vertexName === P34.id) {
            P34.style.background = "#ffff00"
        }
        else if (msg.vertexName === P35.id) {
            P35.style.background = "#ffff00"
        }
        else if (msg.vertexName === P41.id) {
            P41.style.background = "#ffff00"
        }
        else if (msg.vertexName === P42.id) {
            P42.style.background = "#ffff00"
        }
        else if (msg.vertexName === P43.id) {
            P43.style.background = "#ffff00"
        }
        else if (msg.vertexName === P44.id) {
            P44.style.background = "#ffff00"
        }
        else if (msg.vertexName === P45.id) {
            P45.style.background = "#ffff00"
        }
    }
}

function LightEffect(Light) {
    isLight = false
    isLight = !isLight;

    if (isLight) {
        //是否更明亮（白光） 默認否
        var lighter = false;
        timer = setInterval(function () {
            lighter = !lighter;
            if (lighter) {
                // Light.style.background = "#ff0000"
                Light.style.boxShadow = "0 0 0 0";
            } else {
                // Light.style.background = "#ffff00"
                Light.style.boxShadow = "0 0 10px 10px #ffffff";
            }
        }, 1000);
    } 
    // else {
    //     clearInterval(timer);
    //     doc.getElementsByClassName("light")[0].style.background = "#999";
    //     doc.getElementsByClassName("light")[0].style.boxShadow = "0 0 20px 2px #85fd5d";
    // }
}

function SendingTest() {
    console.log('Send Message!')
    socket.send('Frontend Send Message')
}

// #region SocketIO
var socket = io.connect('http://127.0.0.1:3000');
// var socket = io.connect('http://10.10.0.76:3000');

socket.on('connect', () => {
    socket.send('Socket Connected!')
})

socket.on('message', (msg) => {
    console.log('Recive Message : ', msg)
    UpdateUI(msg)
});
// #endregion

// #region Init(Load Point / Station )
let startpos = document.getElementById('start')

let store1 = document.getElementById('store1')
let store2 = document.getElementById('store2')
let store3 = document.getElementById('store3')

let A1 = document.getElementById('A1')
let A2 = document.getElementById('A2')
let B1 = document.getElementById('B1')
let B2 = document.getElementById('B2')
let B3 = document.getElementById('B3')
let C1 = document.getElementById('C1')
let C2 = document.getElementById('C2')
let C3 = document.getElementById('C3')

let P11 = document.getElementById('p1-1')
let P12 = document.getElementById('p1-2')
let P13 = document.getElementById('p1-3')
let P14 = document.getElementById('p1-4')
let P15 = document.getElementById('p1-5')
let P16 = document.getElementById('p1-6')
let P17 = document.getElementById('p1-7')

let P21 = document.getElementById('p2-1')
let P22 = document.getElementById('p2-2')
let P23 = document.getElementById('p2-3')
let P24 = document.getElementById('p2-4')
let P25 = document.getElementById('p2-5')
let P26 = document.getElementById('p2-6')

let P31 = document.getElementById('p3-1')
let P32 = document.getElementById('p3-2')
let P33 = document.getElementById('p3-3')
let P34 = document.getElementById('p3-4')
let P35 = document.getElementById('p3-5')

let P41 = document.getElementById('p4-1')
let P42 = document.getElementById('p4-2')
let P43 = document.getElementById('p4-3')
let P44 = document.getElementById('p4-4')
let P45 = document.getElementById('p4-5')

let P51 = document.getElementById('p5-1')
let P52 = document.getElementById('p5-2')
let P53 = document.getElementById('p5-3')
let P54 = document.getElementById('p5-4')
let P55 = document.getElementById('p5-5')

LightEffect(startpos)

LightEffect(store1)
LightEffect(store2)
LightEffect(store3)

LightEffect(A1)
LightEffect(A2)
LightEffect(B1)
LightEffect(B2)
LightEffect(B3)
LightEffect(C1)
LightEffect(C2)
LightEffect(C3)

LightEffect(P11)
LightEffect(P12)
LightEffect(P13)
LightEffect(P14)
LightEffect(P15)
LightEffect(P16)
LightEffect(P17)

LightEffect(P21)
LightEffect(P22)
LightEffect(P23)
LightEffect(P24)
LightEffect(P25)
LightEffect(P26)

LightEffect(P31)
LightEffect(P32)
LightEffect(P33)
LightEffect(P34)
LightEffect(P35)

LightEffect(P41)
LightEffect(P42)
LightEffect(P43)
LightEffect(P44)
LightEffect(P45)
// #endregion