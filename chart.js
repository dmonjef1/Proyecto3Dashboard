import { getData, dateArray, statusArray } from './api.js'

async function getChart() {
    await getData()

    const chart = document.getElementById('covid');

    const codigoData = dateArray;
    const dataPoints = statusArray;

    const myChart = new Chart(chart, {
        type: 'line',
        data: {
            labels: codigoData,
            datasets: [{
                label: 'Casos confirmados C-19 Chile',
                data: dataPoints,
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
                    text: 'Acumulado C-19 Chile',
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


export { getChart }