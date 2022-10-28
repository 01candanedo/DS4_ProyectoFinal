var ctx = document.getElementById("graficaLineas").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [{
            label: 'Registro de productividad (diario) de cada mes 2022',
            data: [21, 7, 25, 20, 13, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Meses'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Dias'
                },
                min: 1,
                max: 31,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 6
                }
            }
        }
    }
});