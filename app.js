/* 
const productosHombre = [
    {nombre: 'Nike Air Max', precio: 250},
    {nombre: 'Nike Grises', precio: 300},
    {nombre: 'Botita Adidas', precio: 300},
    {nombre: 'Buzo Puma', precio: 100},
  ];
  const productosMujer = [
    {nombre: 'Remera Puma', precio: 30},
    {nombre: 'Vans', precio: 80},
    {nombre: 'Champion Adidas', precio: 120},
    {nombre: 'Pantalon Adidas', precio: 50},
  ];
  const productosNinos = [
    {nombre: 'Remera Paris', precio: 50},
    {nombre: 'Conjunto Adidas', precio: 120},
    {nombre: 'Canguro Nike', precio: 500},
    {nombre: 'Buzo Nike', precio: 90},
  ];
  const productosAccesosrios = [
    {nombre: 'Mochila Puma', precio: 50},
    {nombre: 'Mochila Adidas', precio: 40},
    {nombre: 'Gorro Nike', precio: 25},
    {nombre: 'Gorro Adidas', precio: 25},
  ];

  

 
let bienvenida = prompt("Hola si desea comprar algo escribe si");

 if(bienvenida == "si"){

let categoria = prompt("Elige la categoria: Mujer, Hombre, Ninos, Accesorios ");


    switch(categoria){
        case "hombre":
        alert("Elige el producto: Nike Air Max, Nike Grises, Botita Adidas, Buzo Puma");
        
            break;

        case "mujer":
           alert("Elige el producto: Remera Puma, Vans, Champion Adidas, Pantalon Adidas");
          
            break;

        case "ninos":
             alert("Elige el producto: Remera Paris, Conjunto Adidas, Canguro Nike, Buzo Nike");
             
             
            break;

        case "accesorios":
            alert("Elige el producto: Mochila Puma, Mochila Adidas, Gorro Nike, Gorro Adidas");
            
            break;
        default:
            alert("Categoria no identificada");
        break;
    
    }
    if(categoria == "hombre" ||categoria == "mujer" || categoria == "accesorios" || categoria == "ninos"){
    let nombre = prompt("Ingrese Producto")

    if(categoria === "hombre"){
      let encontrado = productosHombre.find(producto => producto.nombre === nombre);
      let mensaje = `nombre: ${encontrado.nombre} $${encontrado.precio}`
      alert(mensaje);
      }else if(categoria === "mujer"){
        encontrado = productosMujer.find(producto => producto.nombre === nombre);
         mensaje = `nombre: ${encontrado.nombre} $${encontrado.precio}`
        alert(mensaje);
        }else if(categoria === "ninos"){
          encontrado = productosNinos.find(producto => producto.nombre === nombre);
           mensaje = `nombre: ${encontrado.nombre} $${encontrado.precio}`
          alert(mensaje);
          }else if(categoria === "accesorios"){
            encontrado = productosAccesosrios.find(producto => producto.nombre === nombre);
             mensaje = `nombre: ${encontrado.nombre} $${encontrado.precio}`
            alert(mensaje);}
          }else{
            alert("producto no encontrado")
           
          }
  }else{
    alert("Hasta Luego")
  }


   
 */
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
  

