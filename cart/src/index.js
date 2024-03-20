import faker from "faker";

const cartText = `<div id="cart-text">Cart: ${faker.random.number()}</div>`;

document.querySelector("#dev-cart").innerHTML = cartText;
