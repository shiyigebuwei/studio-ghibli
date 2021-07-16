const app = document.getElementById('root');

const logo = document.createElement('img');
logo.setAttribute('src', './static/images/logo.png');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

(async function getFilms() {
    try {
        const filmResponse = await axios.get(
            'https://ghibliapi.herokuapp.com/films',
        );
        const films = filmResponse.data;

        films.forEach((film) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const cardTitle = document.createElement('h1');
            cardTitle.textContent = film.title;

            const cardText = document.createElement('p');
            film.description = film.description.substring(0, 300);
            cardText.textContent = `${film.description}...`;

            container.appendChild(card);
            card.appendChild(cardTitle);
            card.appendChild(cardText);
        });
    } catch (error) {
        console.error(error);
    }
})();
