// Adicionando a rolagem suave para os links adicionais
const ctaLinks = document.querySelectorAll(".cta");

ctaLinks.forEach((ctaLink) => {
    ctaLink.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        scrollToSection(targetId);
    });
});


//MOSTRAR INFORMAÇÕES DA EQUIPE
const aboutMembers = [
    {
        id: "deivyd",
        name: "Deivyd Barros", 
        src: "./img/deivyd_barros.webp", 
        cargo: "Sócio do Grupo IFJ e da Investeens", 
        desc: "Meu objetivo é despertar a juventude, falar de educação financeira e projeto de vida foi o caminho que encontrei!"
    },
    {
        id: "luiza",
        name: "Luiza Arantes", 
        src: "./img/luiza_arantes.webp", 
        cargo: "Sócia da Investeens", 
        desc: "Meu propósito é compartilhar conhecimento sobre economia e investimentos de forma didática, para que mais brasileiros possam tomar melhores decisões financeiras."
    },
    {
        id: "emily",
        name: "Emily Carla", 
        src: "./img/emily_carla.webp", 
        cargo: "Sócia do Grupo IFJ e da Potencialize", 
        desc: "Minha missão é mostrar aos jovens o potencial que existe dentro deles e potencializar suas habilidades comunicativas. Meu trabalho é criar líderes e protagonistas da própria história."
    },
    {
        id: "renan",
        name: "Renan Borges", 
        src: "./img/renan_borges.webp", 
        cargo: "Sócio do Grupo IFJ e da Sneets", 
        desc: "Meu objetivo é capturar momentos especiais e transmitir sentimentos através das minhas lentes."
    },
    {
        id: "joao",
        name: "João Vitor", 
        src: "./img/joao_vitor.webp", 
        cargo: "Sócio do Grupo IFJ e da Sneets", 
        desc: "Meu objetivo na equipe é poder expressar minhas ideias através da magia do audiovisual."
    },
    {
        id: "rafael",
        name: "Rafael Pequino", 
        src: "./img/rafael_pequino.webp", 
        cargo: "Sócio da Sneets", 
        desc: "Como técnico em Desenvolvimento de Sistemas e estudante de Engenharia da Computação crio projetos que não apenas impressionam, mas impactam."
    },
    {
        id: "cybelle",
        name: "Cybelle Souza", 
        src: "./img/cybelle_souza.webp", 
        cargo: "Social Media da Sneets", 
        desc: "Meu objetivo é conectar as melhores empresas e pessoas com os profissionais mais qualificados quando se trata de audiovisual e tecnologia. Sou a ponte entre o cliente e a sneets, juntos criamos projetos incríveis."
    },
    {
        id: "eyshila",
        name: "Eyshila Souza", 
        src: "./img/eyshila_souza.webp", 
        cargo: "Social Media da Sneets", 
        desc: "Na Sneets, sou a ponte entre o cliente e toda nossa equipe. Meu objetivo é claro: conectar você às mais avançadas soluções audiovisuais. Vamos criar juntos não apenas transações, mas experiências que ficarão gravadas na memória."
    }
]


const divMemberImg = document.querySelector('img#member-img')
const divMemberName = document.getElementById('member-name')
const divMemberFunction = document.getElementById('member-function')
const divMemberDescription = document.getElementById('member-desc')

const divBlackout = document.getElementById('blackout')
const divAboutMember = document.getElementById('about-members')

function showMember(divMember) {
    document.body.style.overflowY = "hidden";


    const member = divMember.dataset.member

    for (let i = 0; i < aboutMembers.length; i++) {
        if (aboutMembers[i].id == member) {
            divMemberImg.src = aboutMembers[i].src
            divMemberName.innerText = aboutMembers[i].name
            divMemberFunction.innerText = aboutMembers[i].cargo
            divMemberDescription.innerText = aboutMembers[i].desc
        }

    }

    divBlackout.classList.add("open-blackout")
    divAboutMember.classList.add("open-members")


}

window.addEventListener('keydown', (ev) => {
    if (ev.key === "Escape") {
        hiddeMember()
    }
})

function hiddeMember() {
    document.body.style.overflowY = "auto";

    divBlackout.classList.remove("open-blackout")
    divAboutMember.classList.remove("open-members")

}



//MÁSCARA DE WHATSAPP
$(document).ready(function(){
    $('#whatsapp').mask('(00) 00000-0000');
})
