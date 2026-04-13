const lista = document.getElementById("listarpokemon")

const btnSeleccionar = async () => {

  try {
    const pokemon = Math.floor(Math.random() * 151) + 1
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await response.json()

    const item = lista.querySelector("#pok-1")

    // Imagen
    item.querySelector("img").src = data.sprites.front_default

    // Nombre
    item.querySelector("p").textContent = data.name

    // Habilidades
    const habilidades = data.abilities.map(hab => `<li>${hab.ability.name}</li>`).join("")

    item.querySelector("ol").innerHTML = habilidades

  } catch (error) {
    // muestra errores 
    console.error("Error:", error)
  }
};

// Ejecutar al cargar
btnSeleccionar()