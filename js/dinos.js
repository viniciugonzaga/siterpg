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
        footer.style.background = "linear-gradient(45deg,#5c5a07c7, #99947867,#5c5a07c7)"; // Altera a cor do rodapé
    } else {
        footer.style.background = "linear-gradient(45deg, #0f0c29, #302b63, #24243e)"; // Mantém a cor padrão
    }
});
const senhaCorreta = "."; // Defina a senha aqui
const body = document.body;
const senhaMenu = document.getElementById("senhaMenu");
const overlay = document.getElementById("overlay");

// Bloqueia a rolagem da página
body.classList.add("no-scroll");

// Exibe o menu de senha
senhaMenu.style.display = "block";

// Função para verificar a senha
function verificarSenha() {
    const senhaDigitada = document.getElementById("senha").value;

    if (senhaDigitada === senhaCorreta) {
        // Se a senha estiver correta, remove o overlay e a rolagem da página
        body.classList.remove("no-scroll");
        overlay.style.display = "none";
        senhaMenu.style.display = "none";
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}
    //dinos----------------------------------------------------->

 // Estrutura de dados dos dinossauros
 const creatures = {
    carnivores: {
        Tyrannosauridae: [
            {
                name: 'Tyrannosaurus rex',
                image: 'rex.jpg',
                title: 'Rei dos dinossauros',
                description: 'O famoso T-Rex, um dos maiores predadores da história.',
                behavior: 'Agressivo',
                size: { height: '4m', length: '12m' },
                health: 1000,
                weight: 7000,
                armor: 20,
                attributes: { agility: 30, strength: 50, intelligence: 20, precision: 40, vigor: 60 },
                attacks: [
                    { name: 'Mordida Mortal', damage: 250 },
                    { name: 'Soco de Cauda', damage: 150 }
                ],
                abilities: ['Correr Rápido', 'Força Bruta']
            },
            {
                name: 'Giganotosaurus',
                image: 'giganotosaurus.jpg',
                title: 'Gigante Caçador',
                description: 'O Giganotosaurus era um predador massivo e muito agressivo.',
                behavior: 'Agressivo',
                size: { height: '4.5m', length: '13m' },
                health: 1200,
                weight: 8000,
                armor: 15,
                attributes: { agility: 25, strength: 60, intelligence: 15, precision: 35, vigor: 70 },
                attacks: [
                    { name: 'Boca Destrutiva', damage: 300 },
                    { name: 'Investida', damage: 180 }
                ],
                abilities: ['Atacar em Grupo']
            }
        ]
    },
    herbivores: {
        Sauropoda: [
            {
                name: 'Brachiosaurus',
                image: 'brachiosaurus.jpg',
                title: 'O Gigante Pacífico',
                description: 'O Brachiosaurus era um dos maiores herbívoros que já existiram.',
                behavior: 'Passivo',
                size: { height: '12m', length: '25m' },
                health: 1500,
                weight: 25000,
                armor: 10,
                attributes: { agility: 10, strength: 40, intelligence: 25, precision: 15, vigor: 90 },
                attacks: [{ name: 'Pisada Pesada', damage: 100 }],
                abilities: ['Resistência Imensa']
            }
        ]
    },
    omnivores: {
        Ornitholestes: [
            {
                name: 'Ornitholestes',
                image: 'ornitholestes.jpg',
                title: 'Caçador Ágil',
                description: 'Onívoro ágil, capaz de atacar presas pequenas.',
                behavior: 'Neutro',
                size: { height: '2.5m', length: '5m' },
                health: 800,
                weight: 400,
                armor: 5,
                attributes: { agility: 50, strength: 30, intelligence: 40, precision: 35, vigor: 40 },
                attacks: [
                    { name: 'Garras Cortantes', damage: 120 },
                    { name: 'Bico Afilado', damage: 80 }
                ],
                abilities: ['Velocidade']
            }
        ]
    }
};

// Função para exibir as famílias após escolher o tipo de alimentação
function showFamilies(type) {
    // Esconde os botões de tipo de alimentação
    document.querySelector('.filter-buttons').style.display = 'none';
    // Exibe as famílias
    const familyButtons = document.getElementById('family-buttons');
    familyButtons.innerHTML = ''; // Limpar os botões existentes
    familyButtons.style.display = 'block';

    // Adiciona os botões de família
    const families = Object.keys(creatures[type]);
    families.forEach(family => {
        const button = document.createElement('button');
        button.innerText = family;
        button.onclick = () => showCreatures(type, family);
        familyButtons.appendChild(button);
    });
}

// Função para exibir os dinossauros da família
function showCreatures(type, family) {
    // Esconde os botões de família
    document.getElementById('family-buttons').style.display = 'none';
    // Exibe os dinossauros
    const creatureList = document.getElementById('creature-list');
    creatureList.innerHTML = ''; // Limpar lista de dinossauros
    creatureList.style.display = 'flex';

    // Adiciona os botões de dinossauros
    creatures[type][family].forEach(creature => {
        const button = document.createElement('button');
        button.classList.add('creature-button');
        button.innerText = creature.name;
        button.onclick = () => showCreatureDetail(creature);
        creatureList.appendChild(button);
    });
}

// Função para mostrar os detalhes de um dinossauro
function showCreatureDetail(creature) {
    const creatureCard = document.getElementById('creature-card');
    creatureCard.style.display = 'block';
    creatureCard.innerHTML = `
        <img src="${creature.image}" alt="${creature.name}">
        <h3>${creature.name} - ${creature.title}</h3>
        <p><strong>Descrição:</strong> ${creature.description}</p>
        <p><strong>Comportamento:</strong> ${creature.behavior}</p>
        <p><strong>Tamanho:</strong> ${creature.size.height} de altura, ${creature.size.length} de comprimento</p>
        <p><strong>Vida (PV):</strong> ${creature.health}</p>
        <p><strong>Peso:</strong> ${creature.weight} kg</p>
        <p><strong>Armadura:</strong> ${creature.armor}</p>
        <h4>Atributos:</h4>
        <ul>
            <li><strong>Agi:</strong> ${creature.attributes.agility}</li>
            <li><strong>For:</strong> ${creature.attributes.strength}</li>
            <li><strong>Int:</strong> ${creature.attributes.intelligence}</li>
            <li><strong>Pre:</strong> ${creature.attributes.precision}</li>
            <li><strong>Vig:</strong> ${creature.attributes.vigor}</li>
        </ul>
        <h4>Ataques:</h4>
        <ul>
            ${creature.attacks.map(attack => `<li><strong>${attack.name}:</strong> ${attack.damage} dano</li>`).join('')}
        </ul>
        <h4>Habilidades:</h4>
        <ul>
            ${creature.abilities.map(ability => `<li>${ability}</li>`).join('')}
        </ul>
    `;
}