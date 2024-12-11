// ========================
// Menu (Navbar)
// ========================
const menu = document.getElementById('diceMenu'); // Menu de dados
const openMenuButton = document.getElementById('openMenu'); // Botão para abrir o menu
const closeMenuButton = document.getElementById('closeMenu'); // Botão para fechar o menu
const diceSelect = document.getElementById('diceSelect'); // Seleção do tipo de dado
const rollDiceButton = document.getElementById('rollDice'); // Botão para rolar dado
const clearRollsButton = document.getElementById('clearRolls'); // Botão para limpar rolagens
const rollList = document.getElementById('rollList'); // Lista de rolagens
const totalDisplay = document.getElementById('total'); // Exibição do total geral
const playerNameInput = document.getElementById('playerName'); // Entrada do nome do jogador

// Variáveis globais
let playerScores = {}; // Armazena as somas dos dados por jogador

// Função para abrir o menu
openMenuButton.addEventListener('click', () => {
    menu.classList.remove('hidden'); // Exibe o menu
});

// Função para fechar o menu
closeMenuButton.addEventListener('click', () => {
    menu.classList.add('hidden'); // Oculta o menu
});

// ========================
// Função de rolagem de dados
// ========================
rollDiceButton.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim(); // Nome do jogador
    const diceType = parseInt(diceSelect.value); // Tipo de dado selecionado
    const roll = Math.floor(Math.random() * diceType) + 1; // Rolagem aleatória do dado

    // Validação: O nome do jogador deve ser preenchido
    if (!playerName) {
        alert("Por favor, insira o nome do jogador!");
        return;
    }

    // Atualiza o total do jogador
    if (!playerScores[playerName]) {
        playerScores[playerName] = 0; // Inicializa o jogador, caso não exista
    }
    playerScores[playerName] += roll;

    // Adiciona o registro da rolagem na lista
    const listItem = document.createElement('li');
    listItem.textContent = `${playerName} = D${diceType}: ${roll} (Total: ${playerScores[playerName]})`;
    rollList.appendChild(listItem);

    // Atualiza o total geral
    totalDisplay.textContent = `Total geral: ${Object.values(playerScores).reduce((a, b) => a + b, 0)}`;
});

// ========================
// Limpar registro de rolagens
// ========================
clearRollsButton.addEventListener('click', () => {
    playerScores = {}; // Reinicia os totais por jogador
    rollList.innerHTML = ''; // Limpa a lista de rolagens
    totalDisplay.textContent = 'Total geral: 0'; // Zera o total exibido
});

 // Função que redireciona com base no argumento recebido
 function goToPage(page) {
    window.location.href = page; // Redireciona para a página passada como argumento
}

// ========================
// Footer dinâmico
// ========================
document.addEventListener("scroll", () => {
    const footer = document.querySelector("footer"); // Seleciona o rodapé

    // Se o usuário rolar até o fim da página
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        footer.style.background = "linear-gradient(45deg, #1d323594, #0416389d,#1d323594)"; // Altera a cor do rodapé
    } else {
        footer.style.background = "linear-gradient(45deg, #0f0c29, #302b63, #24243e)"; // Mantém a cor padrão
    }
});

// Conteúdo dinâmico para cada ícone
const contents = [
    {
      titulo: "Guerreiro",
      texto: "A classe Guerreiro é especializada em combate corpo a corpo, abrangendo estilos como cavaleiros, bárbaros e outros lutadores que dependem de proximidade para atacar. Ela se destaca por enfraquecer os inimigos, aplicando desvantagens como redução de força, defesa ou velocidade, enquanto controla o ritmo da batalha. Seus ataques podem causar efeitos como atordoamento ou sangramento, além de receber bônus ao executar combos ou ações estratégicas. O Guerreiro pode se especializar em ser um defensor resistente, um agressor que causa danos massivos ou um tático que utiliza estratégia para criar oportunidades no combate. É ideal para jogadores que preferem dominar o campo de batalha e agir na linha de frente.",
      gif: "imagens/regras_guerreiro_gif.gif",
      background: "imagens/regras_fundo_menu.jpg",
    },
    {
      titulo: "Atiradores",
      texto: "A classe Atirador é especializada em combate à distância, focada em dano rápido e preciso, com habilidade para atingir pontos críticos e penetrar armaduras. Utilizando armas de fogo, adapta-se tanto a combates de média quanto longa distância, sendo essencial em batalhas por sua capacidade de causar alto dano. Seus bônus incluem maior precisão, aproveitamento de danos críticos e eficiência na perfuração de defesas, tornando-o uma opção estratégica para quem busca atacar de forma letal e segura, mantendo-se fora do alcance direto dos inimigos.",
      gif: "imagens/regras_atirador.gif",
      background: "imagens/regras_fundo_menu.jpg",
    },
    {
      titulo: "Ferreiro",
      texto: "A classe Ferreiro é especializada na forja e criação de itens, com foco em manipulação e extração eficiente de minérios. Seus bônus incluem maior produtividade na criação e aprimoramento de equipamentos, além de extrair recursos com eficiência. É uma das classes mais essenciais, garantindo suprimentos e itens fundamentais para todos os jogadores.",
      gif: "imagens/regras_gif_de_menu.gif",
      background: "imagens/regras_fundo_menu.jpg",
    },
    {
      titulo: "Arcano",
      texto: "A classe Arcano é indispensável para uma tribo, sendo a única capaz de manipular a magia e as essências de Aether. Com habilidades e sentidos aprimorados, os arcanos transformam o comum em algo extraordinário, usando sua conexão com o arcano para criar grandes feitos. Apesar de seu imenso poder, são indivíduos frágeis e raros, com a habilidade de compreender sigilos e realizar rituais mágicos complexos.",
      gif: "imagens/personagens_magobroxa.jpg",
      background: "imagens/regras_fundo_menu.jpg",
    },
    {
      titulo: "Cientista",
      texto: "A classe Cientista é especializada em estratégia e pesquisa científica, com a habilidade de manipular o DNA de criaturas e alterar seus códigos genéticos. Esses personagens podem criar ou destruir monstros com base em suas descobertas. Embora sejam inicialmente frágeis, tornam-se extremamente poderosos com o tempo, possuindo os maiores bônus de aprendizado da ilha. Eles dominam reações químicas, além de utilizarem armas biológicas e nucleares, tornando-se uma peça-chave na evolução e destruição do ecossistema.",
      gif: "imagens/regras_cientista.gif",
      background: "imagens/regras_fundo_menu.jpg",
    },
    {
      titulo: "Sobrevivente",
      texto: "A classe dos Sobreviventes se destaca por sua versatilidade no início do jogo, com bônus em ações de criação primal e domesticação de animais. Embora percam relevância à medida que outras classes evoluem, sua eficiência inicial é incomparável. Além disso, possuem a habilidade de aprimorar itens básicos, tornando-os uma escolha estratégica para os primeiros momentos da jornada.",
      gif: "imagens/regras_sobreviventes.gif",
      background: "imagens/regras_fundo_menu.jpg",
    },
    {
      titulo: "Construtor",
      texto: "A classe Construtor é especializada em criar estruturas e dispositivos com alta eficiência, dominando tanto a construção de barreiras sólidas, como muros e paredes, quanto a lógica de funcionamento de engrenagens e mecanismos. Sua habilidade em trabalhar com materiais improvisados os torna essenciais para desenvolver infraestrutura e tecnologia em qualquer situação.",
      gif: "imagens/regras_construtor.gif",
      background: "imagens/regras_fundo_menu.jpg",
    },
    {
      titulo: "Médico",
      texto: "A classe Médico é especializada no tratamento de doenças, cura eficiente de ferimentos e cuidado com traumas mentais. Além disso, domina a arte de garantir uma boa alimentação para os membros da tribo, sendo indispensável tanto em momentos de batalha quanto em períodos de descanso e recuperação.",
      gif: "imagens/regras_médicos.gif",
      background: "imagens/regras_fundo_menu.jpg",
    },
  ];
  
  // Função para alterar o conteúdo
  function changeContent(index) {
    const content = contents[index - 1];
    document.getElementById("titulo").textContent = content.titulo;
    document.getElementById("texto").textContent = content.texto;
    document.getElementById("gif").src = content.gif;
    document.getElementById("imagem-fundo").src = content.background;
  }
  