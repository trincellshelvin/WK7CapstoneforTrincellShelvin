function mycupidHelper() {
    let name;
    let signed;
    let gifts;
    name = prompt("Whom do you admire?");
    signed = prompt("What is your name?");
    nameemail = prompt("What is your email?");
    guestemail = prompt("What is your guest's email?")
    gifts = prompt("Candy or Flowers?");
    mycupidHeader.innerHTML = `You Have a Secret Admirer...`;
    mycupidParagraph.innerHTML = `Hi ${name}, you have a secret admire whom wanted to reveal themselves to you with a gift of ${gifts}. ${signed} wanted you to know that they deeply care about you and on this day while making a declaration of their affection for you. Happy Valentine's Day from ${signed} and My Cupid!`;

}
mycupidButton.onclick = mycupidHelper

let newyearsInviter = document.getElementById("sendEmail");
sendEmail.addEventListener("click",
    function () {
        document.body.style.backgroundColor.backgroundImage = "url (https://images.pexels.com/photos/842682/pexels-photo-842682.jpeg?auto=compress&cs=tinysrgb&w=600)";

    })