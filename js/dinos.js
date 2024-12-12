


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
        footer.style.background = "linear-gradient(45deg, #0f0c29, #302b63, #24243e)"; // Altera a cor do rodapé
    } else {
        footer.style.background = "linear-gradient(45deg, #0f0c29, #302b63, #24243e)"; // Mantém a cor padrão
    }
});
const correctPassword = ","; // Altere para a senha desejada

//dinos

const creatures = {
    'Carnívoros': ['T-Rex', 'Velociraptor', 'Spinosaurus'],
    'Herbívoros': ['Triceratops', 'Stegosaurus', 'Brachiosaurus'],
    'Onívoros': ['Gallimimus', 'Oviraptor'],
    'Apex Criaturas': ['Giganotosaurus', 'Indominus Rex']
};

const dinoFichas = {
    'T-Rex': {
        title: 'Rei da Ilha',
        image: 'imagens/dinos_T-rex_ficha.jpg', // Caminho válido
        weight: '8 toneladas',
        height: '6 metros',
        length: '12 metros',
        attributes: { agi: 3, for: 5, int: 2, pre: 2 , vig:4 },
        attacks: ['Mordida Poderosa: 16d10+30', 'Investida: 7d10+10', 'Ataque de cauda: 7d10+20'],
        abilities: ['Tirano: O tiranossauro rex é uma criatura implacável que consome todos, no começo da luta o tiranossauro aplica um grito de lentidão. Sua tirania é implacável, durante a luta quando está machucado o tiranossauro ganha +2d6 de acerto e deixa o inimigo fraco.', 'Coragem do rei: Não sofre efeito de medo'],
        passiva: 'Domínio Territorial',
        passivaElemental: 'Fúria Ígnea'
    },
    // Adicione outras fichas aqui
};

function openSearch(category) {
    document.getElementById('searchContainer').style.display = 'flex';
    document.getElementById('searchTitle').textContent = `Pesquisar em ${category}`;

    const creatureList = document.getElementById('creatureList');
    creatureList.innerHTML = '';
    creatures[category].forEach(creature => {
        const li = document.createElement('li');
        li.textContent = creature;
        li.onclick = () => openDinoFicha(creature);
        creatureList.appendChild(li);
    });
}

function openDinoFicha(dino) {
    const ficha = dinoFichas[dino];
    if (!ficha) {
        alert('Ficha não encontrada');
        return;
    }

    // Preencher dados no modal
    document.getElementById('dinoName').textContent = dino;
    document.getElementById('dinoTitle').textContent = ficha.title;
    document.getElementById('dinoImage').src = ficha.image;
    document.getElementById('dinoWeight').textContent = ficha.weight;
    document.getElementById('dinoHeight').textContent = ficha.height;
    document.getElementById('dinoLength').textContent = ficha.length;
    document.getElementById('dinoAgi').textContent = ficha.attributes.agi;
    document.getElementById('dinoFor').textContent = ficha.attributes.for;
    document.getElementById('dinoInt').textContent = ficha.attributes.int;
    document.getElementById('dinoPre').textContent = ficha.attributes.pre;
    document.getElementById('dinoVig').textContent = ficha.attributes.vig;
    document.getElementById('dinoAtk1').textContent = ficha.attacks[0];
    document.getElementById('dinoAtk2').textContent = ficha.attacks[1];
    document.getElementById('dinoAtk3').textContent = ficha.attacks[2];
    document.getElementById('dinoHab1').textContent = ficha.abilities[0];
    document.getElementById('dinoHab2').textContent = ficha.abilities[1];
    document.getElementById('dinoPassiva').textContent = ficha.passiva;
    document.getElementById('dinoPassivaElemental').textContent = ficha.passivaElemental;

    // Exibir modal
    document.getElementById('dinoModal').style.display = 'flex';
}

function closeDinoModal() {
    document.getElementById('dinoModal').style.display = 'none';
}
function filterCreatures() {
    const query = document.getElementById('searchInput').value.toLowerCase(); // Pega o valor digitado e converte para minúsculas
    const items = document.querySelectorAll('#creatureList li'); // Seleciona todos os itens da lista de criaturas

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = 'list-item'; // Mostra o item se corresponder à busca
        } else {
            item.style.display = 'none'; // Esconde o item caso não corresponda
        }
    });
}