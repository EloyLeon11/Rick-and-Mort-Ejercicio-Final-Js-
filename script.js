// Llamo a la API
fetch("https://rickandmortyapi.com/api/character")


    .then((response) => response.json())

    // Si la API responde bien, pasa a esta capa .then, en esta capa con data busco la capa results y la guardo en una variable
    .then((data) => {
        const characters = data.results;

        // he selecionado main (elemento padre) para trabajar en el
        const main = document.getElementById("main");

        //   estoy creando el section
        const listaCartas = document.createElement("section");
        listaCartas.classList.add("listaCartas");
        main.appendChild(listaCartas);

        // Dentro de SECTION quiero crear varios articulos con el mismo relleno
        characters.forEach((character) => {

            // creo el articulo
            const carta = document.createElement("article");
            carta.classList.add("carta");

            // creo el primer div de la img
            const divImg = document.createElement("div");
            divImg.classList.add("divIMG");

            //  creo el elemento img
            const imagen = document.createElement("img");
            imagen.classList.add("imagen");

            //    creo el src del elemento img
            imagen.src = character.image;

            //    creo el alt del elemento img
            imagen.alt = character.name;

            // Creo el div del texto
            const divText = document.createElement("div");
            divText.classList.add("divText");

            // creo el elemento Parrafo
            const name = document.createElement("p");
            name.classList.add("name");

            // Añado texto al parrafo
            name.innerHTML = "Name";

            // creo el elemento Parrafo
            const nameCard = document.createElement("p");
            nameCard.classList.add("nameCard");

            // Añado el nombre de la api
            nameCard.innerHTML = `${character.name}`;

            // Creo el parrafo especies
            const especies = document.createElement("p");
            especies.classList.add("species");

            // Imprimo el texto dentro del parrafo
            especies.innerHTML = "Especie";

            // creo el elemento Parrafo
            const speciesCard = document.createElement("p");
            speciesCard.classList.add("speciesCard");

            // Añado el nombre de la api
            speciesCard.innerHTML = `${character.species}`;

            //  AHORA QUE HE CREADO EL HTML TOCA ORDENARLO COMO SI FUERA UNA MUÑECA RUSA

            // P --> DivTexto  IMG ---> DivIMG    DivIMG---> ARTICLE   DivTextO---> ARTICLE   ARTICLE --> SECTION

            // P --> DivText
            divText.appendChild(name);
            divText.appendChild(nameCard);
            divText.appendChild(especies);
            divText.appendChild(speciesCard);

            // IMG ---> DivIMG
            divImg.appendChild(imagen);

            // DivIMG---> ARTICLE
            carta.appendChild(divImg);

            // DivText---> ARTICLE
            carta.appendChild(divText);

            // ARTICLE --> SECTION
            listaCartas.appendChild(carta);
        });
    })
    .catch((error) => console.error("Error fetching characters:", error));
