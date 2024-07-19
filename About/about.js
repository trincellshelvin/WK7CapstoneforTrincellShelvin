const nuts = [
    'Almonds',
    'Cashews',
    'Pecans',
    'Walnuts',
    // Add more nuts here...
];

function getRandomNut() {
    const randomIndex = Math.floor(Math.random() * nuts.length);
    return nuts[randomIndex];
}

const randomNut = getRandomNut();
console.log(`Randomly selected nut: ${randomNut}`);

pickaNutButton.onclick = getRandomNut
