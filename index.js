
// FUNCTION PARA FUNCIONAR OS BOTÕES DA REDE SOCIAL
function irParaGithub() { // aqui coloquie o memso nome do onclick que etsá no html
    window.open("https://github.com/camila-aaraujo",); 
}
function irParaInsta() {
    window.open("https://www.instagram.com/cami.aaraujo/?next=%2F",);
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

// ----------------------------------tema escuro e claro--------------

// -----------------------emojis---------------------------
// Array de emojis para o rastro
const emojis = [ "🌸", "🌻", "🌺"];
let lastTime = 0; // guarda o tempo do último emoji criado
const interval = 130; // intervalo mínimo em milissegundos 

document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastTime < interval) return; // ainda não passou tempo suficiente
    lastTime = now;

    // 1. Cria um novo elemento div para o emoji
    const emojiElement = document.createElement("div");
    emojiElement.classList.add("emoji-trail");

    // 2. Escolhe um emoji aleatoriamente do array
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emojiElement.textContent = randomEmoji;

    // 3. Define a posição do elemento com base nas coordenadas do mouse
    emojiElement.style.left = e.pageX + "px";
    emojiElement.style.top = e.pageY + "px";

    // 4. Adiciona o elemento ao corpo do documento
    document.body.appendChild(emojiElement);

    // 5. Inicia a animação de desaparecimento
    setTimeout(() => {
        emojiElement.style.animation = "fadeOut 0.8s forwards";
        setTimeout(() => {
            emojiElement.remove();
        }, 800);
    }, 50);
});


