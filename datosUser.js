const url ="https://jsonplaceholder.typicode.com/users"

const obtenerUsuarios = async () =>{
    try{
    // preparar el auto (response) gasolina (fetch) hacia el destino (url)
    const response = await fetch(url)

    const data = await response.json()

    // mostrar informacion 

    const filas = data.map(user =>
         `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      </tr>
      
      `
    ).join("")

    document.getElementById("data").innerHTML = filas
    }catch(error){
        console.error(error.message)
    }
}
// llamamos al metodo 
obtenerUsuarios()