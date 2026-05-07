// Pokémon Database
const pokemonDatabase = [
    {
        name: 'Pikachu',
        number: '025',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
    },
    {
        name: 'Charizard',
        number: '006',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
    },
    {
        name: 'Blastoise',
        number: '009',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png'
    },
    {
        name: 'Venusaur',
        number: '003',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
    },
    {
        name: 'Dragonite',
        number: '149',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png'
    },
    {
        name: 'Gyarados',
        number: '130',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png'
    },
    {
        name: 'Alakazam',
        number: '065',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png'
    },
    {
        name: 'Machamp',
        number: '068',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png'
    },
    {
        name: 'Golem',
        number: '076',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png'
    },
    {
        name: 'Arcanine',
        number: '059',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png'
    },
    {
        name: 'Lapras',
        number: '131',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png'
    },
    {
        name: 'Mewtwo',
        number: '150',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
    }
];

// DOM Elements
const barcodeInput = document.getElementById('barcodeInput');
const card = document.getElementById('card');
const cardImage = document.getElementById('cardImage');
const pokemonName = document.getElementById('pokemonName');
const pokemonNumber = document.getElementById('pokemonNumber');

// Event Listeners
barcodeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleScan();
});
card.addEventListener('click', toggleCardFlip);

// Functions
function getRandomPokemon() {
    return pokemonDatabase[Math.floor(Math.random() * pokemonDatabase.length)];
}

function handleScan() {
    const barcodeValue = barcodeInput.value.trim();
    
    if (!barcodeValue) {
        return;
    }

    // Get random Pokémon
    const pokemon = getRandomPokemon();
    
    // Update card back
    cardImage.src = pokemon.image;
    pokemonName.textContent = pokemon.name;
    pokemonNumber.textContent = `Card #${pokemon.number}`;
    
    // Reset card to front view
    card.classList.remove('flipped');
    
    // Flip card after a short delay
    setTimeout(() => {
        card.classList.add('flipped');
    }, 300);
    
    // Clear input
    barcodeInput.value = '';
    barcodeInput.focus();
}

function toggleCardFlip() {
    card.classList.toggle('flipped');
}

// Auto focus on input
barcodeInput.focus();
