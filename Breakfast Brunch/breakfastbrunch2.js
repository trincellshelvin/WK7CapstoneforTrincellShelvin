function submitOrder() {
    let order = {}
    order.patron = prompt("What is the name for this order?");
    order.number = prompt("What is the phone number for this order?");
    order.eggs = prompt("What eggs would you like and cooked how? *Can have 2");
    order.protien = prompt("What protien would you like? *Note, for Steak and Lamb, please advised of cook. Can add up to 2 for $3 extra");
    order.sides = prompt("What two sides would you like?");
    order.drinks = prompt("What drink would you like with our meal? Can pick 2 with an extra $2 for the extra drink.");
    order.condiments = prompt("What condiments would you like *coffee already comes with 2 cream and 3 sugars?");
    order.extra = prompt("Any extra menu items? *extra charge for each one requested.");

    orderParagraph.innerHTML = 'Thanks for your order! Your order total is ${}. Please have correct change or expect to pay with card upon order pick up. We accept Cashapp payment to $themeetingplace as well upon arrival.';
}
sendordertoKitchen.onclick = submitOrder




