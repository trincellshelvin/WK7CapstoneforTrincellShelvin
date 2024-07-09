function mycupidHelper() {
    let name;
    let signed;
    let gifts;
    name = prompt("Whom do you admire?");
    signed = prompt("What is your name?");
    gifts = prompt("Candy or Flowers?");
    mycupidHeader.innerHTML = `You Have a Secret Admirer...`;
    mycupidParagraph.innerHTML = `Hi ${name}, you have a secret admire whom wanted to reveal themselves to you with a gift of ${gifts}. ${signed} wanted you to know that they deeply care about you and on this day while making a declaration of their affection for you. Happy Valentine's Day from ${signed} and My Cupid!`;

}
mycupidButton.onclick = mycupidHelper