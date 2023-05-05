var apikey = `1bd40032e656524cafd71b90d41e3a8d`;
var ts = `1`;
var hash = `fe2fcdfccd557620089c40256d7097be`;
var url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;

let contenedor = document.createElement(`div`);
document.body.appendChild(contenedor);

let divPadre = document.createElement(`div`);
divPadre.classList.add(`cuerpoDePagina`);

fetch(url)
    .then(response => response.json())
    .then(data => {
        let personajes = data.data.results;

        personajes.forEach(personaje => {
            let personajeDiv = document.createElement(`div`);
            personajeDiv.classList.add(`personaje`);

            let nombre = document.createElement(`h3`);
            nombre.innerHTML = personaje.name;
            personajeDiv.appendChild(nombre);

            let imagen = `${personaje.thumbnail.path}.${personaje.thumbnail.extension}`;
            let imagenPersonaje = document.createElement("img");
            imagenPersonaje.src = imagen;
            personajeDiv.appendChild(imagenPersonaje);

            let descripcion = document.createElement(`p`);
            descripcion.innerText = personaje.description;
            personajeDiv.appendChild(descripcion)

            let series = document.createElement(`a`);
            series.href = `./html/verSeriesApiMarvel.html?id=${personaje.id}`;
            series.innerText = "Ver series";
            personajeDiv.appendChild(series);

            let comics = document.createElement(`a`);
            comics.href = `./html/verComicsApiMarvel.html?id=${personaje.id}`
            comics.innerText = "Ver Comics";
            personajeDiv.appendChild(comics);

            let stories = document.createElement(`a`)
            stories.href = `./html/verStoriesApiMarvel.html?id=${personaje.id}`
            stories.innerText = "Ver stories";
            personajeDiv.appendChild(stories);

            let events = document.createElement(`a`)
            events.href = `./html/verEventsApiMarvel.html?id=${personaje.id}`
            events.innerText = "Ver events"
            personajeDiv.appendChild(events);

            personajeDiv.classList.add(`diseñoDelContenedor`);

            divPadre.appendChild(personajeDiv);
        });
        contenedor.appendChild(divPadre);
    })
    .catch(error => {

        console.error(error);
    });