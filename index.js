let libros = [];

function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
}


function agregarLibro() {
    const titulo = document.getElementById('inputTitulo').value.trim()
    const autor = document.getElementById('inputAutor').value.trim();
    if (titulo && autor) {
        libros.push(new Libro(titulo, autor));
        limpiarLibros()
        document.getElementById('inputTitulo').value = '';
        document.getElementById('inputAutor').value = '';
    } else{
        alert("Complete el titulo y autor, para agregar el libro")
    }
}


function limpiarLibros(lista = libros) {
    const listaLibros = document.getElementById('listaLibros');
    listaLibros.innerHTML = '';
    lista.forEach((libro, index) => {
        const li = document.createElement('li');
        li.textContent = `Titulo: ${libro.titulo}, Autor: ${libro.autor}`
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar'
        botonEliminar.onclick = () => {
            libros.splice(index, 1)
            limpiarLibros()
        }
        li.appendChild(botonEliminar);  
        listaLibros.appendChild(li);
    })
}

function buscarLibro() {
    const buscarTitulo = document.getElementById('inputBuscar').value.trim().toLowerCase();
    const librosEncontrados = libros.filter(libro => libro.titulo.toLowerCase().includes(buscarTitulo));
    limpiarLibros(librosEncontrados)
}

const cabecera = document.getElementById('header');
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

const links = ["Index", "Products", "Contact"]

for (const link of links) {
    const li = document.createElement('li')
    li.innerHTML = `<a href="${link}.html" >${link}</a>`
    ul.appendChild(li)
}