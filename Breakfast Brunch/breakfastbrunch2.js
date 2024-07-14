function submitOrder {
    let order = {}
    order.patron = prompt("What is the name for this order?");
    order.number = prompt("What is the phone number for this order?");
    order.eggs = prompt("What eggs would you like and cooked how? *Can have 2");
    order.protien = prompt("What protien would you like? *Note, for Steak and Lamb, please advised of cook. Can add up to 2 for $3 extra");
    
}
    sendordertoKitchen.onclick = submitOrder