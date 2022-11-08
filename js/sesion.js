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

//Nodo Padre
const inicioSesion = document.querySelector("#seccion");

//Nodo Hijo  Iniciar Sesion

const loginFormulario = document.querySelector("#div");

const registrarse = document.querySelector("#registrarse");

registrarse.addEventListener("click", () => {
  inicioSesion.removeChild(loginFormulario);
  let registrarse = document.createElement("div");
  registrarse.innerHTML = `<div class="row g-0">
<div class="col-lg-6 d-none d-lg-block">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item img-1 min-vh-100 active">
            <div class="carousel-caption d-none d-md-block">

            </div>
          </div>
          <div class="carousel-item img-2 min-vh-100">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
</div>
<div class="col-lg-6 d-flex flex-column align-items-end min-vh-100 form">
    <div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-auto w-100">
      <a href="../index.html">
        <h1 >LUNKER</h1>
      </a>
    </div>
    <div class="align-self-center w-100 px-lg-5 py-lg-4 p-4 mb-auto">
    <h2 class="font-weight-bold mb-4">Registrarse</h2>
    <form class="mb-5" id="formulario">
        <div class="mb-4">
          <label for="exampleInputEmail1" class="form-label font-weight-bold">Email</label>
          <input type="email" class="form-control bg-dark-x border-0" id="email" placeholder="Ingresa tu email" aria-describedby="emailHelp">
        </div>
        <div class="mb-4">
          <label for="exampleInputPassword1" class="form-label font-weight-bold">Contraseña</label>
          <input type="password" class="form-control bg-dark-x border-0 mb-2" placeholder="Ingresa tu contraseña" id="password">

          <label for="exampleInputPassword1" class="form-label font-weight-bold" id="confirmarPassword">Confirmar Contraseña</label>
          <input type="password" class="form-control bg-dark-x border-0 mb-2" placeholder="Ingresa tu contraseña" id="confirmPassword">
          
        </div>
        <button type="submit" class="btn btn-primary w-100" id="boton-sesion">Registrarse</button>
      </form>
      <div class="d-flex justify-content-around"> 
          <button id="Iniciar Sesion" class="btn btn-primary w-50 mr-2 flex-grow-1" >Iniciar Sesion</button>
          <button id="recuperarPassword" class="btn btn-primary w-50 mr-2 flex-grow-1" >Recuperar Contraseña</button>
        </div>
    <p class="font-weight-bold text-center ">O inicia sesión con</p>
    <div class="d-flex justify-content-around">
    </div>
    </div>
</div>
</div>
</section>`;
  inicioSesion.appendChild(registrarse);
});

const recuperarPassword = document.querySelector("#recuperarPassword");
recuperarPassword.addEventListener("click", () => {
  inicioSesion.removeChild(loginFormulario);
  const recuperarPassword = document.createElement("div");
  recuperarPassword.innerHTML = `<div class="row g-0">
<div class="col-lg-6 d-none d-lg-block">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item img-1 min-vh-100 active">
            <div class="carousel-caption d-none d-md-block">

            </div>
          </div>
          <div class="carousel-item img-2 min-vh-100">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
</div>
<div class="col-lg-6 d-flex flex-column align-items-end min-vh-100 form">
    <div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-auto w-100">
      <a href="../index.html">
        <h1 >LUNKER</h1>
      </a>
    </div>
    <div class="align-self-center w-100 px-lg-5 py-lg-4 p-4 mb-auto">
    <h2 class="font-weight-bold mb-4">Recuperar contrasena</h2>
    <form id="form">
        <div class="field">
          <label class="form-label font-weight-bold" for="email_id">Email</label>
          <input type="text"  class="form-control bg-dark-x border-0" name="email_id" id="email_id" placeholder="Ingresa tu email" aria-describedby="emailHelp">
        </div>
      
        <input type="submit" id="button" value="Send Email" class="btn btn-primary w-100" >
      </form>
      
      <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      
      <script type="text/javascript">
        emailjs.init('eqIgBaLQVx65w4r1H')
      </script>
    
    </div>
    </div>
</div>
</div>`;
  inicioSesion.appendChild(recuperarPassword);
  const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_qivlsqj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
});












