
//Productos

const contenedorProductos = document.getElementById("contenedor-productos")

let carrito = []

//Agrgando Porductos al Html, Funcionalidad Boton carrito

allProductos.forEach(producto => {
  const div = document.createElement("div")
  div .classList.add("col")
  div.innerHTML = `
  <div class="card">
    
      <img src=${producto.img} class="card-img-top" alt="Champion Nike gris hombre">
      <div class="card-body">
        <p class="card-title text-center">${producto.nombre}</p>
        <p class="card-text text-center">$${producto.precio}</p>
      </div>
      <button id="agregar${producto.id}" class="boton-agregar">Agregar 🛒</button>

    
  </div>`
  
  contenedorProductos.appendChild(div)

  const boton = document.getElementById(`agregar${producto.id}`)
  boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id)
  })
  
});

const agregarAlCarrito = (prodId) => {
  const item = allProductos.find((prod) => prod.id === prodId)
  carrito.push(item)
  console.log(carrito)
}
  

