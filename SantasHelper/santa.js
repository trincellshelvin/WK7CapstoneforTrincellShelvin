function createMessage() {
  let message = {}
  message.sender = prompt("What is your name?");
  message.request = prompt("What would you like for Christmas from Santa?");

  santasParagraph.innerHTML = `Dear Santa, Hi this is ${message.sender}, I just want you to know that I have been very good this year. I want to request a special wish from you this year. I would love to have ${message.request} as my gift this year. Sincerely, ${message.sender}`;

}
sendmessagetoSanta.onclick = createMessage;


function printpage() {
  window.print();

}

let santaletter = document.getElementById("santaletter");
santaletter.addEventListener("click",
  function () {
    document.body.style.backgroundColor.backgroundImage = "url(https://images.pexels.com/photos/6057134/pexels-photo-6057134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";

  })