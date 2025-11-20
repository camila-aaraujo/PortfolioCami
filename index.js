
// FUNCTION PARA FUNCIONAR OS BOTÕES DA REDE SOCIAL
function irParaGithub() { // aqui coloquie o memso nome do onclick que etsá no html
    window.open("https://github.com/camila-aaraujo",); 
}
function irParaInsta() {
    window.open("https://www.instagram.com/cami.aaraujo/?next=%2F",);
}
function irParaLink() {
    window.open("https://www.linkedin.com/in/camila-araújo-a149b9325?utm_source=share_via&utm_content=profile&utm_medium=member_android");
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
const body = document.body; //seleciona o elemneto bosy, onde coloquei as classes dos temas
const btn = document.getElementById("temaBotao"); // seleciona o botão que vai alternar o tema

// modo claro por padrão
body.classList.add("temaClaro"); 

btn.addEventListener("click", () => {  // quando clicar no botão, alterna entre claro e escuro
    body.classList.toggle("temaEscuro");
    body.classList.toggle("temaClaro");

    if (body.classList.contains("temaEscuro")) { //se tiver modo escuro o emoji vai ser de lua, se não o de sol
        btn.textContent = "🌙";
    } else {
        btn.textContent = "☀️";
    }
});


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

// ------------------------------------CARROSSEL------------------
// Índice de cada carrossel
const galeria = {
    carrossel1: [
        "imagens/eu1.jpg",
        "imagens/eu2.jpg",
        "imagens/eu3.jpg"
    ],
    carrossel2: [
        "imagens/siem.jpg",
        "imagens/siem3.png"

    ],
    carrossel3: [
        "imagens/mtm1.jpg",
        "imagens/mtm2.jpg",
        "imagens/mtm3.jpg",
        "imagens/mtm4.jpg",
        "imagens/mtm5.jpg",
        "imagens/mtm6.jpg"

    ]
};

// Índice de cada carrossel
const indice = {
    carrossel1: 0,
    carrossel2: 0,
    carrossel3: 0
};

function mudarSlide(id, direcao) {
    const fotos = galeria[id];
    const img = document.getElementById("foto-" + id);

    indice[id] += direcao;

    // loop infinito
    if (indice[id] < 0) indice[id] = fotos.length - 1;
    if (indice[id] >= fotos.length) indice[id] = 0;

    img.src = fotos[indice[id]];
}

// Inicializa a primeira imagem de cada carrossel
document.addEventListener("DOMContentLoaded", () => {
    for (let id in galeria) {
        const img = document.getElementById("foto-" + id);

        if (img) {
            img.src = galeria[id][0]; // primeira imagem
        }

        indice[id] = 0; // sempre começa no início
    }
});
