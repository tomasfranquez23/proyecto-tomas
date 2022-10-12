const email = document.getElementById('email')
const password = document.getElementById('password')
const botonSesion = document.getElementById('boton-sesion')

botonSesion.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        email : email.value,
        password: password.value
    }
    console.log(data)
})