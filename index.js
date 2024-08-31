class ProductoDeConsumo {
    constructor(producto, precio, stock,categoria) {
      this.producto = producto;
      this.precio = precio;
      this.stock = stock;
      this.categoria= categoria;
    }
  }
  
 
  const productos = [];
  
  
  let producto = prompt("Ingrese el nombre del producto");
  let precio = Number(prompt("Ingrese el precio del producto"));
  let stock = Number(prompt("Ingrese el stock del producto"));
  let categoria = prompt("Ingrese la categoria del producto: A - B - C").toUpperCase();
  
  let almacen = prompt(
    "Desea almacenar los productos en el carrito?"
  ).toUpperCase();
  
  

  const almacenar = (producto, precio, stock, categoria) => {
    productos.push(new ProductoDeConsumo(producto, precio, stock, categoria));
    console.log(productos);
  };
  
  if (almacen === "SI") {
    almacenar(producto, precio, stock, categoria);
  }
  
  let seguirAgregando = prompt("Desea seguir agregando productos?").toUpperCase();


  while (seguirAgregando === "SI") {
    producto = prompt("Ingrese el nombre del producto");
    precio = Number(prompt("Ingrese el precio del producto"));
    stock = Number(prompt("Ingrese el stock del producto"));
    categoria = prompt("Ingrese la categoria del producto: A - B - C").toUpperCase();
    almacenar(producto, precio, stock, categoria);
    seguirAgregando = prompt("Desea seguir agregando productos?").toUpperCase();
  }

  let filtrar = prompt("Desea filtrar los productos por categoria?").toUpperCase();



const filtrarPorCategoria = (categoria) => {
    return productos.filter((producto)=> producto.categoria === categoria);
}

if(filtrar === 'SI'){
    let categoria = prompt("Ingrese la categoria que desea filtrar: A - B - C").toUpperCase();
    const productosFiltrados = filtrarPorCategoria(categoria);
    console.log(productosFiltrados)
}

let devolverProductoEspecifico= prompt("Desea devolver un producto en particular?").toUpperCase();


const verProductoEspecifico = (nombreProducto) => {
    return productos.find((producto)=> producto.producto === nombreProducto);
}


if(devolverProductoEspecifico === 'SI'){
    let nombre = prompt("Ingrese el nombre del producto que desea ver");
    const productoEspecifico = verProductoEspecifico(nombre);
    console.log(productoEspecifico)
}