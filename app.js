
const total = document.querySelector('#total');

const espresso = document.querySelector('#Espresso');
const espressoMilk = document.querySelector('#Espresso-milk');
const espressoCream = document.querySelector('#Espresso-cream');
const espressoLatte = document.querySelector('#Espresso-latte');

let arr1 = [];
let bill = [];
let k = 0;
let espressoCount = 0;
espresso.addEventListener('click', ()=>{
    espressoCount++;
    arr1.push(100);
    espresso.innerText = `Espresso  ${espressoCount}`;
    let p = `Espresso : ${espressoCount}`;
    bill[0] = p;
})

let espressoMilkCount = 0;
espressoMilk.addEventListener('click', ()=>{
    espressoMilkCount++;
    arr1.push(60);
    espressoMilk.innerText = `Milk ${espressoMilkCount}`;
    let p = `Milk : ${espressoMilkCount}`;
    bill[1] = p;
})

let espressoCreamCount = 0;
espressoCream.addEventListener('click', ()=>{
    espressoCreamCount++;
    arr1.push(75);
    espressoCream.innerText = `Cream ${espressoCreamCount}`;
    let p = `Cream : ${espressoCreamCount}`;
    bill[2] = p;
})

let espressoLatteCount = 0;
espressoLatte.addEventListener('click', ()=>{
    espressoLatteCount++;
    arr1.push(100);
    espressoLatte.innerText = `Latte ${espressoLatteCount}`;
    let p = `Latte : ${espressoLatteCount}`;
    bill[3] = p;
})

// ***************************************************************************

const cappuccino = document.querySelector('#Cappuccino');
const cappuccinoMilk = document.querySelector('#Cappuccino-milk');
const cappuccinoCream = document.querySelector('#Cappuccino-cream');
const cappuccinoLatte = document.querySelector('#Cappuccino-latte');

let arr2 = [];
let cappuccinoCount = 0;
cappuccino.addEventListener('click', ()=>{
    cappuccinoCount++;
    arr2.push(150);
    cappuccino.innerText = `Cappuccino  ${cappuccinoCount}`;
    let p = `Cappuccino : ${cappuccinoCount}`;
    bill[4] = p;
})

let cappuccinoMilkCount = 0;
cappuccinoMilk.addEventListener('click', ()=>{
    cappuccinoMilkCount++;
    arr2.push(80);
    cappuccinoMilk.innerText = `Milk ${cappuccinoMilkCount}`;
    let p = `Milk : ${cappuccinoMilkCount}`;
    bill[5] = p;
})

let cappuccinoCreamCount = 0;
cappuccinoCream.addEventListener('click', ()=>{
    cappuccinoCreamCount++;
    arr2.push(90);
    cappuccinoCream.innerText = `Cream ${cappuccinoCreamCount}`;
    let p = `Cream : ${cappuccinoCreamCount}`;
    bill[6] = p;
})

let cappuccinoLatteCount = 0;
cappuccinoLatte.addEventListener('click', ()=>{
    cappuccinoLatteCount++;
    arr2.push(120);
    cappuccinoLatte.innerText = `Latte ${cappuccinoLatteCount}`;
    let p = `Latte : ${cappuccinoLatteCount}`;
    bill[7] = p;
})

// ***********************************************************************

const latte = document.querySelector('#Latte');
const latteMilk = document.querySelector('#Latte-milk');
const latteCream = document.querySelector('#Latte-cream');
const latteLatte = document.querySelector('#Latte-latte');

let arr3 = [];
let latteCount = 0;
latte.addEventListener('click', ()=>{
    latteCount++;
    arr3.push(200);
    latte.innerText = `Latte  ${latteCount}`;
    let p = `Latte : ${latteCount}`;
    bill[8] = p;
})

let latteMilkCount = 0;
latteMilk.addEventListener('click', ()=>{
    latteMilkCount++;
    arr3.push(100);
    latteMilk.innerText = `Milk ${latteMilkCount}`;
    let p = `Milk : ${latteMilkCount}`;
    bill[9] = p;
})

let latteCreamCount = 0;
latteCream.addEventListener('click', ()=>{
    latteCreamCount++;
    arr3.push(125);
    latteCream.innerText = `Cream ${latteCreamCount}`;
    let p = `Cream : ${latteCreamCount}`;
    bill[10] = p;
})

let latteLatteCount = 0;
latteLatte.addEventListener('click', ()=>{
    latteLatteCount++;
    arr3.push(150);
    latteLatte.innerText = `Latte ${latteLatteCount}`;
    let p = `Latte : ${latteLatteCount}`;
    bill[11] = p;
})



let sum = 0
function Calculate(){
    let arr = [...arr1, ...arr2, ...arr3];
    if(arr.length < 1){
        window.alert("Please Select Your Coffee First")
	return;
    }
    sum = 0;
    arr.map((ele)=>{
        sum += ele;
    })
    total.innerText = `Your bill is ${sum} Rs.`;
}

function Print(){
    if(bill.length < 1){
        window.alert("Please Select Your Coffee First")
        return;
    }
    let x = '';
    bill.forEach((ele)=>{
        x += ele + "\n"
    })
    let container = document.querySelector('.container');
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.endButton').style.display = 'none';
    let printBill = document.createElement('h3');
    printBill.innerText = "Items \n"+x+"\n"+"Total : "+sum;
    container.appendChild(printBill)
    window.print()
}

















