const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn =document.querySelector('vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners(){
    //Cuando se agrega un curso presionando boton agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones

function agregarCurso(){
    console.log ('Presionando en cursos')
}