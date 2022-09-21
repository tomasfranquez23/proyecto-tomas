
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

  

 
let bienvenida = alert("Elige la categoria: Mujer, Hombre, Ninos, Accesorios ");

let categoria = prompt("ingrese la categoria")


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
            else{
              alert("Producto no encontrado")
            }
   

    
  