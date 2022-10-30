import { getData2, dateArray2, statusArray2 } from './api2.js'

async function getChart2() {
    await getData2()

    const chart2 = document.getElementById('covid2');

    const codigoData2 = dateArray2;
    const dataPoints2 = statusArray2;
    console.log(new Date('2020-02-28'));

    const myChart = new Chart(chart2, {
        type: 'line',
        data: {
            labels: codigoData2,
            datasets: [{
                label: 'Casos confirmados de C-19 Brasil',
                data: dataPoints2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Acumulado C-19 Brasil',
                    color: '#000',
                    padding: {
                        top: 10,
                        bottom: 30,
                    },
                    font: {
                        size: 40
                    }
                }
            }
        }
    });
};


export { getChart2 }