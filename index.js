
// FUNCTION PARA FUNCIONAR OS BOTÕES DA REDE SOCIAL
function irParaGithub() { // aqui coloquie o memso nome do onclick que etsá no html
    window.open("https://github.com/camila-aaraujo",); 
}
function irParaInsta() {
    window.open("https://github.com/camila-aaraujo",);
}
function irParaLink() {
    window.open("https://github.com/camila-aaraujo",);
}

// FUNCTION PARA PORTFOLIOS ANTIGOS
function irPara2023() { // aqui coloquie o memso nome do onclick que etsá no html
    window.open("https://www.canva.com/design/DAFfGlo9LT8/daY3XGWNYV_qlPLgdGLieA/edit?utm_content=DAFfGlo9LT8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",); 
}
function irPara2024() {
    window.open("https://sites.google.com/estudante.sesisenai.org.br/portfoliocamis/inicio",);
}

function irParaCurriculo(){
    window.open("https://www.canva.com/design/DAFuzJL7zQ8/iplRaHKCarYLhZNWLpjebQ/edit",);
}

// ---------------------------------------TESTE-=------------------------------------
// function toggleAtividades(id) {
//     const atividades = document.getElementsByClassName("atividades");
//     for (let i = 0; i < atividades.length; i++) {
//         if (atividades[i].id === id) {
//             atividades[i].style.display = atividades[i].style.display === "none" ? "block" : "none"; // Alterna a exibição
//         } else {
//             atividades[i].style.display = "none"; // Esconde as outras
//         }
//     }
// }

// Guarda o trimestre ativo por container
const trimestresAtivos = {};
  
function mostrarAtividades(containerId, trimestre) {
  const container = document.getElementById(containerId);
  const cards = container.querySelectorAll('.card');

  // Se já está mostrando esse trimestre, esconda tudo
  if (trimestresAtivos[containerId] === trimestre) {
    cards.forEach(card => {
      card.style.display = 'none';
    });
    trimestresAtivos[containerId] = null;
    container.classList.remove('show');
    return;
  }

  // Senão, mostra o trimestre clicado e esconde os outros
  cards.forEach(card => {
    card.style.display = card.classList.contains(`trimestre-${trimestre}`) ? 'block' : 'none';
  });

  trimestresAtivos[containerId] = trimestre;
  container.classList.add('show');
}

