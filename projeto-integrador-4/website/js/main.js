// Código para o menu
var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');
const qualifyBtn = document.getElementById("qualify-btn");

qualifyBtn.addEventListener('click', () => {
    window.location.href = "educativa.html";
});

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = '../img/menu.png';
    } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = '../img/close.png';
    }
});

// Função para abrir o modal de login
function openLoginModal() {
    document.querySelector('.container-login').style.display = 'flex';
}

// script.js

function mostrarHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("sessao-educativa").style.display = "none";
}

function mostrarEducativa() {
    document.getElementById("home").style.display = "none";
    document.getElementById("sessao-educativa").style.display = "block";
}

function toggleVisibility(id) {
    const content = document.getElementById(id);
    content.classList.toggle('hidden'); // Alterna a classe 'hidden' para mostrar ou ocultar o conteúdo
}


