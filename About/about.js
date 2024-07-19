const nuts = [
    'Almonds',
    'Cashews',
    'Pecans',
    'Walnuts',
    'Peanuts',
    'Hazelnuts',
    'Pumpkin Seeds',
    'Sunflower Seeds',
    'Brazil Nuts',
    'Macodamia',
    
];

function getRandomNut() {
    const randomIndex = Math.floor(Math.random() * nuts.length);
    return nuts[randomIndex];
}

const randomNut = getRandomNut();
alert(`Randomly selected nut: ${randomNut}`);


