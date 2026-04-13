
async function enviarIA() {

    const input = document.getElementById("mensaje")
    const chat = document.getElementById("chat")

    const texto = input.value.trim()

    if (!texto) return

    chat.innerHTML = `<p><b>Tú:</b> ${texto}</p>`
    input.value = ""

    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "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",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "user",
                        content: texto
                    }
                ]
            })
        });

        const data = await res.json()
        const respuesta = data.choices[0].message.content;

        chat.innerHTML = `<p><b>IA:</b> ${respuesta}</p>`
        chat.scrollTop = chat.scrollHeight

    } catch (error) {
        chat.innerHTML = `<p style="color:red;"><b>Error:</b> ${error.message}</p>`
    }
}
enviarIA()