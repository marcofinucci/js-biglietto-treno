// Variables

const ticketPriceEl = document.getElementById("ticket-price");
const pricePerKm = 0.21;
const value = "€";
const childAge = 18;
const seniorAge = 65;
const percentageDiscountChild = 20;
const percentageDiscountSenior = 40;
let yourKilometres;
let yourAge;
let ticketPrice;
let ticketPriceFinal;

// Ask kilometres

yourKilometres = prompt("Quanti chilometri vuoi percorrere?");

// Ask Age

yourAge = prompt("Qunti anni hai?");

// Ticket price

ticketPrice = yourKilometres * pricePerKm;

// Discount

if (yourAge < childAge) {
    ticketPriceFinal = ticketPrice - (ticketPrice / 100) * percentageDiscountChild;
} else if (yourAge > seniorAge) {
    ticketPriceFinal = ticketPrice - (ticketPrice / 100) * percentageDiscountSenior;
} else {
    ticketPriceFinal = ticketPrice;
}

// Print price final

ticketPriceEl.innerHTML = ticketPriceFinal.toFixed(2) + value;
