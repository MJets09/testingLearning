let firstName = 'Joe';


console.log(`My name is ${firstName}`);


let btn = document.querySelector('button');
let counter = 0

function plusOne() {
    document.querySelector('p').innerHTML = counter;
    counter++
    if (counter === 11) {
        alert(`Did it, counter is now at ${counter}`)
    }
}

let doge = {
    type: 'shiba',
    age: 4,
    color: 'orange'
}

console.log(doge.color);

console.log(typeof doge);

btn.addEventListener('click', plusOne);

let Kobe = 8;

function kobe() {
    console.log(24);
}

console.log(Kobe)

kobe();