//GIFS
const renanImages = [
    './img/img-sneets/integrantes/renan1.png',
    './img/img-sneets/integrantes/renan2.png',
    './img/img-sneets/integrantes/renan3.png',
    './img/img-sneets/integrantes/renan4.png',
    './img/img-sneets/integrantes/renan5.png'
];

const joaoImages = [
    './img/img-sneets/integrantes/joao1.png',
    './img/img-sneets/integrantes/joao2.png',
    './img/img-sneets/integrantes/joao3.png',
    './img/img-sneets/integrantes/joao4.png',
    './img/img-sneets/integrantes/joao5.png'
];

const eyshilaImages = [
    './img/img-sneets/integrantes/eyshila1.png',
    './img/img-sneets/integrantes/eyshila2.png',
    './img/img-sneets/integrantes/eyshila3.png',
    './img/img-sneets/integrantes/eyshila4.png',
    './img/img-sneets/integrantes/eyshila5.png'
];

let renanIndex = 0;
let joaoIndex = 0;
let eyshilaIndex = 0;

function changeImage(id, images, index) {
    const element = document.getElementById(id);
    element.src = images[index];
}

function updateImages() {
    renanIndex = (renanIndex + 1) % renanImages.length;
    joaoIndex = (joaoIndex + 1) % joaoImages.length;
    eyshilaIndex = (eyshilaIndex + 1) % eyshilaImages.length;

    changeImage('renan', renanImages, renanIndex);
    changeImage('joao', joaoImages, joaoIndex);
    changeImage('eyshila', eyshilaImages, eyshilaIndex);
}

setInterval(updateImages, 1000);

// Pausa e retoma a animação ao passar o mouse sobre as logos
document.querySelectorAll('.logo-track img').forEach(img => {
    img.addEventListener('mouseover', () => {
        document.querySelector('.logo-track').style.animationPlayState = 'paused';
    });
    img.addEventListener('mouseout', () => {
        document.querySelector('.logo-track').style.animationPlayState = 'running';
    });
});


document.querySelectorAll('.depoiment').forEach(depoiment => {
    depoiment.addEventListener('mouseover', () => {
        document.querySelector('.depoiment-track').style.animationPlayState = 'paused';
    });
    depoiment.addEventListener('mouseout', () => {
        document.querySelector('.depoiment-track').style.animationPlayState = 'running';
    });
});





//ABERTURA DE DESCRIÇÃO DE SERVIÇOS
const allDescriptions = document.querySelectorAll('.service>.service-description')
const allSymbols = document.querySelectorAll('.service>.service-title>h3:nth-child(2)')

const allImgs = document.querySelectorAll('.list-img-services>.img-service')
const imgEdicao = document.getElementById('img-edicao-de-videos')
const imgAudiovisual = document.getElementById('img-producao-audiovisual')
const imgCobertura = document.getElementById('img-cobertura-de-eventos')
const imgPersonalizado = document.getElementById('img-personalizado')

// Manter sempre o primeiro item aberto
document.addEventListener('DOMContentLoaded', function() {
    imgEdicao.style.height = '400px';
    document.querySelector('#edicao-de-videos .service-description').classList.add('open-description');
    document.querySelector('#edicao-de-videos .service-title>h3:nth-child(2)').innerText = "-";
});

function openDescription(service) {
    let symbolElement = service.querySelector('.service-title>h3:nth-child(2)')
    let descriptionElement = service.querySelector('.service-description')

    allDescriptions.forEach(function (description) {
        if (description !== descriptionElement) {
            description.classList.remove('open-description')
        }
    })

    allSymbols.forEach(function (symbol) {
        if (symbol !== symbolElement) {
            symbol.innerText = "+"
        }
    })

    allImgs.forEach(function (divImg) {
        divImg.style.height = '0';
    });
    
    if (descriptionElement) {
        descriptionElement.classList.add('open-description')
        
        symbolElement.innerText = "-"
        
        if (service.id == 'edicao-de-videos') {
            imgEdicao.style.height = '400px';
        } else if (service.id == 'producao-audiovisual') {
            imgAudiovisual.style.height = '400px';
        } else if (service.id == 'cobertura-de-eventos') {
            imgCobertura.style.height = '400px';
        } else if (service.id == 'servico-personalizado') {
            imgPersonalizado.style.height = '400px';
        } 
    }
}
