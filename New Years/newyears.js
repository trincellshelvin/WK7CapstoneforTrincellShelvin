function balldropCreate() {
    let name;
    let guest;
    name = prompt("What is your name?");
    guest = prompt("Whom would you like to invite?");
    nameemail = prompt("What is your email?");
    guestemail = prompt("What is your guest's email?");
    newyearsHeader.innerHTML = `You're Invited....`;
    newyearsParagraph.innerHTML = `Hi ${guest}! ${name} would like to invite you to join them to watch the ball drop into the New Year. `;

}
newyearsButton.onclick = balldropCreate

let newyearsInviter = document.getElementById("sendEmail");
sendEmail.addEventListener("click",
    function () {
        document.body.style.backgroundColor.backgroundImage = "url (https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=600)";

    })