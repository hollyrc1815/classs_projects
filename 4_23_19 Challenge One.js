var list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
list.push("fruit loops");
list[4] = "Fair Trade Coffee";
list.splice(2, 2, "rice", "beans")
var cart = [];
cart.push(list.pop());
cart.push(list.shift());

while(list.length > 0){
    cart.push(list.pop());
}

cart.sort().reverse();

console.log(list);
console.log(cart);
console.log("My cart contains: ", cart.join(', '));
