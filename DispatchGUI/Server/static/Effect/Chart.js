const labels_Bar = [
    'LS50',
    'LS100',
    'LS250',
    'TM50',
    'TM100',
    'TM250'
];

const data_Bar = {
    labels: labels_Bar,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
    // datasets: [{
    //     barPercentage: 0.5,
    //     barThickness: 6,
    //     maxBarThickness: 8,
    //     minBarLength: 2,
    //     data: [10, 20, 30, 40, 50, 60, 70]
    // }]
}

const config_Bar = {
    type: 'bar',
    data: data_Bar,
    options: {
        scales: {
            xAxis: {
                // beginAtZero: true,
                color: 'white'
            },
            yAxis: {
                // beginAtZero: true,
                color: 'white'
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'white',
                    font: 300
                }
            },
            title: {
                display: true,
                text: 'JoyStick Status',
                color: 'white',
                font: {
                    size: 30
                }
            }
        },
        scales: {
            y: {
               ticks:{
                   color:'white',
               }
            },
            x: {
                ticks:{
                    color:'white',
                }
             },
        },
    }
}

const labels_line = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data_line = {
    labels: labels_line,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config_line = {
    type: 'line',
    data: data_line,
    options:
    {
        onClick: (e) => {
            const canvasPosition = getRelativePosition(e, chart);

            // Substitute the appropriate scale IDs
            const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
            const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                text : 'YO',
                display: false,
                labels: {
                    color: 'white',
                    font: {
                        size: 24
                    }
                }
            },
            title: {
                display: true,
                text: 'Env Detect',
                color: 'white',
                font: {
                    size: 30
                }
            }
        },
        scales: {
            y: {
               ticks:{
                   color:'white',
               }
            },
            x: {
                ticks:{
                    color:'white',
                }
             },
        },
    }
};

const data_Bubble = {
    datasets: [{
        label: 'First Dataset',
        data: [{
            x: 20,
            y: 30,
            r: 15
        }, {
            x: 30,
            y: 20,
            r: 15
        }, {
            x: 32,
            y: 25,
            r: 35
        }, {
            x: 40,
            y: 10,
            r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
    }]
};

const config_Bubble = {
    type: 'bubble',
    data: data_Bubble,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                text : 'YO',
                labels: {
                    color: 'white',
                    font: {
                        size: 24
                    }
                }
            },
            title: {
                display: true,
                text: 'Sensor Detect',
                color: 'white',
                font: {
                    size: 30
                }
            }
        },
        scales: {
            y: {
               ticks:{
                   color:'white',
               }
            },
            x: {
                ticks:{
                    color:'white',
                }
             },
        },
    }
};

const data_Polar = {
    labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
        ]
    }]
};

const config_Polar = {
    type: 'polarArea',
    data: data_Polar,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        // scales: {
        //     y: {
        //        ticks:{
        //            color:'white',
        //        }
        //     },
        //     x: {
        //         ticks:{
        //             color:'white',
        //         }
        //      },
        // },
        plugins: {
            legend: {
                display: true,
                text : 'YO',
                labels: {
                    color: 'white',
                    font: {
                        size: 12
                    }
                }
            },
            title: {
                display: false,
                text: 'Env Detect',
                color: 'white',
                font: {
                    size: 24
                }
            }
        },
    }
};

const data_Pie = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const config_Pie = {
    type: 'doughnut',
    data: data_Pie,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                text : 'YO',
                display: true,
                labels: {
                    color: 'white',
                    font: {
                        size: 24
                    }
                }
            },
            title: {
                display: false,
                text: 'Env Detect',
                color: 'white',
                font: {
                    size: 30
                }
            }
        },
    }
};

const data_Radar = {
    labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ],
    datasets: [{
        label: 'Dataset-1',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'Dataset-2',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

const config_Radar = {
    type: 'radar',
    data: data_Radar,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                text : 'YO',
                display: true,
                labels: {
                    color: 'white',
                    font: {
                        size: 24
                    }
                }
            },
            title: {
                display: false,
                text: 'Env Detect',
                color: 'white',
                font: {
                    size: 30
                }
            }
        },
    },
};

const myChart_Radar = new Chart(
    document.getElementById('RadarChart'),
    config_Radar
);

const myChart_Pie = new Chart(
    document.getElementById('PieChart'),
    config_Pie
);

const myChart_Polar = new Chart(
    document.getElementById('PolarChart'),
    config_Polar
);

const myChart_Bubble = new Chart(
    document.getElementById('BubbleChart'),
    config_Bubble
);

const myChart_Bar = new Chart(
    document.getElementById('BarChart'),
    config_Bar
);

const myChart_Line = new Chart(
    document.getElementById('LineChart'),
    config_line
);