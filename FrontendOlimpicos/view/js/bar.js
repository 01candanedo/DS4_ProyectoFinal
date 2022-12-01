let newsResults = [];
let sportsResults = [];

const loadNews = async () => {
    try {
        //usuarios
        const res4 = await fetch('http://localhost:8080/usuarios/all');
        usersResults = await res4.json();
        console.log(usersResults.length);

        //news
        const res = await fetch('http://localhost:8080/noticias/all');
        newsResults = await res.json();
        console.log(newsResults.length);
    
        //sports
        const res2 = await fetch('http://localhost:8080/deportes/all');
        sportsResults = await res2.json();
        console.log(sportsResults.length);

        //deportistas
        const res3 = await fetch('http://localhost:8080/deportistas/all');
        deportistResults = await res3.json();
        console.log(deportistResults.length);

        barras();

    } catch (err) {
        console.error(err);
    }
};


function barras(){

    console.log("barras:"+newsResults.length);
    console.log("barras:"+sportsResults.length);

    var ctx = document.getElementById("graficaBarra").getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Usuarios", "Deportes", "Noticias", "Deportistas"],
        datasets: [{
            label: 'Cantidad de Datos Almacenados',
            data: [usersResults.length, newsResults.length, sportsResults.length, deportistResults.length],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3,
            barPercentage: 0.5,
        }]
    },
     options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Gráfico de Datos'
                }
            },
            y: {
                min: 0,
                max: (Math.max(usersResults.length, newsResults.length, sportsResults.length, deportistResults.length)+2),
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 1
                }
            }
        }
    }
});
}
loadNews();
loadSports();


