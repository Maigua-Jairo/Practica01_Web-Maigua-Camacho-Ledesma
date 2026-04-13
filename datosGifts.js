const obtenerGift = async () => {

    const contenedor = document.getElementById("gifs")
    const plantilla = document.getElementById("gif")
    try {
        const api_key = "lerx9FDWD5PH78M207Cj95ac4KTt8G3v"

        const url = `https://api.giphy.com/v1/stickers/trending?api_key=${api_key}&limit=8`
        const res = await fetch(url)
        const data = await res.json()

        //limpiar contenedor
        contenedor.innerHTML = ""
        data.data.forEach(gif => {

            const clon = plantilla.cloneNode(true)
            clon.removeAttribute("id")

            const img = clon.querySelector("img")
            img.src = gif.images.original.url

            contenedor.appendChild(clon)
        })

    } catch (error) {
        console.error(error)

    }
}
obtenerGift()