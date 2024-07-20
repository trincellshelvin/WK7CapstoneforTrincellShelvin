function submitorder() {
    let order = {}
    order.patron = prompt("What is the name for this order?");
    order.number = prompt("What is the phone number for this order?");
    order.eggs = prompt("What eggs would you like and cooked how?");
    order.protein = prompt("What protein would you like? *Note, for Steak and Lamb, please advised of cook.");
    order.sides = prompt("What two sides would you like?");
    order.drinks = prompt("What drink would you like with our meal?");
    order.condiments = prompt("What condiments would you like *coffee already comes with 2 cream and 3 sugars?");

    orderParagraph.innerHTML = `Thanks for your order! Your order total is ${mealtotal()}. Please have correct change or expect to pay with card upon order pick up. We accept Cashapp payment to $themeetingplace as well upon arrival.`;
}
submitOrderButton.onclick = submitorder


function mealtotal(){
    let mealsubtotal = 24;
    let taxes = .10;
    mealtotal = mealsubtotal * taxes;
    return mealtotal + mealsubtotal;
    
}
