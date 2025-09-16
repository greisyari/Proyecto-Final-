const stockProductos = {
  'Stiletto Napa Blanco T 10': 3,
  'Stiletto Rondini Pele | Taco Ancho 3 cm': 5,
  'Bota Alta Rondini Negro | Taco 8 cm': 6,
  'Botín Rondini Floter Peltre | Taco 10 cm': 0,
  'Stiletto Rondini Negro con Cobra Anilina Blanco | Taco Ancho 3 cm': 6,
  'Media Estación Rondini Negro | Taco Ancho 3 cm con Accesorio Metálico': 10,
  'Bota Alta Rondini Blanco | Taco 10 cm': 2,
  'Bota Alta Rondini Tabaco | Taco 10 cm': 7,
  'Stiletto Gamuza Negro con Folia Dorado | Taco 10 cm': 0,
  'Media Estación Charol Pele | Taco 10 cm': 5,
  'Balerina Media Estación Rondini Pele': 11,
  'Media Estación Napa Negro | Taco 10 cm': 3,
  '1/2 Estacion Richato Cascabel Beige Taco 7': 5,
  'Media Estación Richato Arezzo Negro | Taco 8 cm con Lazo': 4,
  'Media Estación Rondini Natural | Taco Ancho 3 cm con Accesorio Metálico': 1,
};


function agregarAlCarrito(nombre, precio, talla) {
    console.log(nombre, precio, talla);
    
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let productoExistente = carrito.find(p => p.nombre === nombre && p.talla === talla);

    // Obtiene el stock disponible del producto
    const stockDisponible = stockProductos[nombre];

    // Verifica si hay stock o si el producto ya existe en el carrito
    if (!stockDisponible || stockDisponible <= 0) {
        alert("Lo sentimos, este producto está agotado.");
        return;
    }

    if (productoExistente) {
        if (productoExistente.cantidad < stockDisponible) {
            productoExistente.cantidad++;
            stockProductos[nombre]--;
            alert(`¡Se ha añadido uno más de "${nombre}" al carrito!`);
        } else {
            alert(`No puedes añadir más, solo quedan ${stockDisponible} en stock.`);
        }
    } else {
        carrito.push({ nombre, precio, talla, cantidad: 1 });
        stockProductos[nombre]--;
        alert(`"${nombre}" ha sido añadido al carrito.`);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
}