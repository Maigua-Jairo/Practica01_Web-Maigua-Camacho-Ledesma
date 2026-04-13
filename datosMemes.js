const obtenerMemes = async () => {
    try {
        const contenedor = document.getElementById('list-memes')
        const plantilla = document.getElementById('meme')

        const res = await fetch("https://api.imgflip.com/get_memes")

        if (!res.ok) throw new Error("Error al obtener memes")

        const { data } = await res.json()

        data.memes.slice(0, 8).forEach(meme => {
            const tarjeta = plantilla.cloneNode(true)
            tarjeta.querySelector('img').src = meme.url
            contenedor.appendChild(tarjeta)
        });

        plantilla.remove()


    } catch (error) {
        console.error(error.message)
    }
}

obtenerMemes()