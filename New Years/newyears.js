function balldropCreate() {
    let name;
    let guest;
    name = prompt("What is your name?");
    guest = prompt("Whom would you like to invite?");
    newyearsHeader.innerHTML = `You're Invited....`;
    newyearsParagraph.innerHTML = `Hi ${guest}! ${name} would like to invite you to join them to watch the ball drop into the New Year. `;

}
newyearsButton.onclick = balldropCreate