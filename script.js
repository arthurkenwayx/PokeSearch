// script.js
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("Couldn't fetch resources");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';
        const existingErrorMessage = document.getElementById("error-message");
        if (existingErrorMessage) {
            existingErrorMessage.remove();
        }
    } catch (error) {
        console.error(error);

        const errorMessage = document.createElement("p");
        const newContent = document.createTextNode("Wrong Pokemon Name");
        errorMessage.appendChild(newContent);
        errorMessage.style.color = "red";
        errorMessage.id = "error-message";

        const existingErrorMessage = document.getElementById("error-message");
        if (existingErrorMessage) {
            existingErrorMessage.remove();
        }

        const currentDiv = document.querySelector(".box");
        document.body.insertBefore(errorMessage, currentDiv);
    }
}
