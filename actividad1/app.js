//----------------------------------------------
//1.Datos y variables
//-----------------------------------------------
const productos =[
    {id: 1, nombre: "Teclado", precio: 30, categoria: "perifericos"},
    {id: 2, nombre: "Ratón", precio: 20, categoria: "perifericos"},
    {id: 3, nombre: "Monitor", precio: 200, categoria: "pantallas"},
    {id: 4, nombre: "Portátil", precio: 800, categoria: "ordenadores"},

];

const listaProductos = document.getElementById("listaProductos");
const filtroCategoria = document.getElementById("filtroCategoria");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");

let carrito = [];

//----------------------------------------------    
//2.Renderizado dinámico de productos
//-----------------------------------------------
function mostrarProductos(productosAMostrar) {
    listaProductos.innerHTML = "";
    productosAMostrar.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: ${producto.precio} €</p>
      <p>Categoría: ${producto.categoria}</p>
      <button data-id="${producto.id}">Añadir al carrito</button>
    `;

    listaProductos.appendChild(div);
  });

  const botones = listaProductos.querySelectorAll("button");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const id = parseInt(boton.getAttribute("data-id"));
      añadirAlCarrito(id);
    });
  });
}

mostrarProductos(productos);
//----------------------------------------------
//3.Carrito de compras
//-----------------------------------------------
function añadirAlCarrito(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  listaCarrito.innerHTML = "";

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - ${item.precio} €`;
    listaCarrito.appendChild(li);
  });

  const total = carrito.reduce((suma, item) => suma + item.precio, 0);
  totalCarrito.textContent = total;

}

//----------------------------------------------
//4.Filtrado por categoría
//-----------------------------------------------
filtroCategoria.addEventListener("change", () => {
  const categoria = filtroCategoria.value;

  if (categoria === "todas") {
    mostrarProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.categoria === categoria);
    mostrarProductos(filtrados);
  }
});

//----------------------------------------------
//5.Formulario de compra y validación           
//-----------------------------------------------
const formCompra = document.getElementById("formCompra");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputPassword2 = document.getElementById("password2");

const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
const errorPassword2 = document.getElementById("errorPassword2");
const mensajeFormulario = document.getElementById("mensajeFormulario");

function validarFormulario() {
  let esValido = true;

  // Limpiar errores
  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorPassword.textContent = "";
  errorPassword2.textContent = "";
  mensajeFormulario.textContent = "";

  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();
  const password = inputPassword.value;
  const password2 = inputPassword2.value;

  // Campos vacíos
  if (!nombre) {
    errorNombre.textContent = "El nombre es obligatorio.";
    esValido = false;
  }

  if (!email) {
    errorEmail.textContent = "El email es obligatorio.";
    esValido = false;
  }

  if (!password) {
    errorPassword.textContent = "La contraseña es obligatoria.";
    esValido = false;
  }

  if (!password2) {
    errorPassword2.textContent = "Debes confirmar la contraseña.";
    esValido = false;
  }

  // Email válido
  const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !patronEmail.test(email)) {
    errorEmail.textContent = "El email no tiene un formato válido.";
    esValido = false;
  }

  // Contraseñas coinciden
  if (password && password2 && password !== password2) {
    errorPassword2.textContent = "Las contraseñas no coinciden.";
    esValido = false;
  }

  return esValido;
}

formCompra.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validarFormulario()) {
    mensajeFormulario.style.color = "green";
    mensajeFormulario.textContent = "Formulario válido. ¡Compra realizada con éxito!";
  } else {
    mensajeFormulario.style.color = "red";
    mensajeFormulario.textContent = "Hay errores en el formulario.";
  }
});

