function submitOrder() {
    let order = {}
    let mealsubtotal = 17
    let mealtotal = 17 * .10
    order.patron = prompt("What is the name for this order?");
    order.number = prompt("What is the phone number for this order?");
    order.eggs = prompt("What eggs would you like and cooked how?");
    order.protein = prompt("What protein would you like? *Note, for Steak and Lamb, please advised of cook. One comes with meal can add one more for $3 extra");
    order.sides = prompt("What two sides would you like?");
    order.drinks = prompt("What drink would you like with our meal? Can pick 2 with an extra $2 for the extra drink.");
    order.condiments = prompt("What condiments would you like *coffee already comes with 2 cream and 3 sugars?");
    order.extra = prompt("Any extra menu items? *extra charge for each one requested.");

    orderParagraph.innerHTML = 'Thanks for your order! Your order total is ${mealtotal}. Please have correct change or expect to pay with card upon order pick up. We accept Cashapp payment to $themeetingplace as well upon arrival.';
}
sendordertoKitchen.onclick = submitOrder

function mealsubtotal(){
    let extrasides = 2 
    let extradrinks = 2
    let extraprotein = 3
    let baconhamsausage = 1.50
    let lamb = 4
    let salmon = 2
    let i = [0]
    if (mealsubtotal = 17) text = 'Your total is $17';
    if (order.extradrinks)  add = mealsubtotal + extradrinks(i);
    if (order.extrasides) add = mealsubtotal + extrasides(i);
    if (order.extraprotein) add = mealsubtotal + extraprotein(i);

}


