const newsResultList = document.getElementById('news-result');
const sportsResultList = document.getElementById('sports-result');
const searchBar = document.getElementById('searchBar');
let newsResults = [];
let sportsResults = [];


searchBar.setAttribute("value", localStorage.getItem('textsearchvalue'));


searchBar.addEventListener('keyup', (e) => {
    console.log("Event Keyup entrada");
    const searchString = e.target.value.toLowerCase();

    const filteredNews = newsResults.filter((news) => {
        return (
            news.titulo.toLowerCase().includes(searchString) ||
            news.descripcion.toLowerCase().includes(searchString)
        );
    });
    displayNews(filteredNews);

    const filteredSports = sportsResults.filter((sports) => {
        return (
            sports.titulo.toLowerCase().includes(searchString) ||
            sports.descripcion.toLowerCase().includes(searchString)
        );
    });
    displaySports(filteredSports);

    console.log("Event Keyup realizado");
});


const loadNews = async () => {
    try {
        const res = await fetch('http://localhost:8080/noticias/all');
        newsResults = await res.json();
        //displayNews(newsResults);
    } catch (err) {
        console.error(err);
    }
};

const loadSports = async () => {
    try {
        const res = await fetch('http://localhost:8080/deportes/all');
        sportsResults = await res.json();
        //displaySports(sportsResults);
    } catch (err) {
        console.error(err);
    }
};


const displayNews = (newsRC) => {
    const htmlString = newsRC
        .map((newsRC) => {
            return `
            <div class="newsCards">
                <div class="newsCardImage">
                    <img src="${newsRC.imagen}" class="news-thumb"></img>
                </div>
                <div class="newsCardContent">
                    <div>
                        <h2>${newsRC.titulo}</h2>
                        <p>${newsRC.descripcion}</p>
                    </div>
                    <a href="${newsRC.enlace}" target="_blank">
                        <button class="card-btn">ver noticia completa</button>
                    </a>
                </div>
            </div>
        `;
        })
        .join('');
    newsResultList.innerHTML = htmlString;
};

const displaySports = (sportsRC) => {
    const htmlString = sportsRC
        .map((sportsRC) => {
            return `
            <div class="sportsCards">
                <div class="sportCardImage">
                    <img src="${sportsRC.imagen}" class="sports-thumb"></img>
                </div>
                <div class="sportCardContent">
                    <div>
                        <h2>${sportsRC.titulo}</h2>
                        <p>${sportsRC.descripcion}</p>
                    </div>
                    <a href="${sportsRC.enlace}" target="_blank">
                        <button class="card-btn">ver más</button>
                    </a>
                </div>
            </div>
        `;
        })
        .join('');
    sportsResultList.innerHTML = htmlString;
};


loadNews();
loadSports();



const getValueInput = () => {
    console.log("getValueInput entrada");
    const inputValue = document.getElementById('searchBar').value.toLowerCase();

    const searchString = inputValue;
    console.log(searchString);

    const filteredNews = newsResults.filter((news) => {
        return (
            news.titulo.toLowerCase().includes(searchString) ||
            news.descripcion.toLowerCase().includes(searchString)
        );
    });
    displayNews(filteredNews);

    const filteredSports = sportsResults.filter((sports) => {
        return (
            sports.titulo.toLowerCase().includes(searchString) ||
            sports.descripcion.toLowerCase().includes(searchString)
        );
    });
    displaySports(filteredSports);

    console.log("getValueInput realizado");
}
