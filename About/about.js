const nuts = [
    'Almonds',
    'Cashews',
    'Pecans',
    'Walnuts',
    
];

function getRandomNut() {
    const randomIndex = Math.floor(Math.random() * nuts.length);
    return nuts[randomIndex];
}

const randomNut = getRandomNut();
console.log(`Randomly selected nut: ${randomNut}`);


