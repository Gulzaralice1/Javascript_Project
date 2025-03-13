const Price = document.getElementById('price');
const Total = document.getElementById('total');
// const card = document.getElementById('.card');
const addtocard = document.getElementById('addtocard');
const Remove = document.getElementById('remove');
// let count = quantity

// addtocard.addEventListener('click', () =>{
//     let quantity = Quantity.value;
//     let price = Price.value;
//     let total = quantity * price;

// });

const Decrease = document.getElementById('decrease');
const Increase = document.getElementById('increase');
const Quantity = document.getElementById('Quantityshow');
let quantity = parseInt(Quantity.innerText);  // Get initial quantity from span


Increase.addEventListener('click', () => {
    quantity++;
    Quantity.innerText = quantity;
});
Decrease.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        Quantity.innerText = quantity;
    }
});

console.log(quantity);

const card = document.querySelector('.card');
red.addEventListener('click', () => {
    card.className = 'card shadow  colour-border';
    document.querySelectorAll('*').forEach(card => {
        card.style.color = "red";
    });
});
blue.addEventListener('click', () => {
    card.className = 'card shadow colour-border';
    document.querySelectorAll('*').forEach(card => {
        card.style.color = "blue";
    });
});
green.addEventListener('click', () => {
    card.className = 'card shadow  colour-border';
    document.querySelectorAll('*').forEach(card => {
        card.style.color = "green";
    });
});


// order detail
const Quantity_order = document.getElementById('Quantity-order');
const price = document.getElementById('price');
let count = 0;
addtocard.addEventListener('click',() =>{
    Quantity_order.innerText = quantity
    Total.innerText =  quantity * 350;
    console.log("click");
    count++;
});



