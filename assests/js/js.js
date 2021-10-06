let firstName = 'Joe';


console.log(`My name is ${firstName}`);


let btn = document.querySelector('button');
let counter = 1

function plusOne() {
    document.querySelector('p').innerHTML = counter;
    counter++
    if (counter === 10) {
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

let oList = document.querySelector('ul');


document.querySelector('form').onsubmit = function() {
    let newElement = document.createElement('li');
    let task = document.querySelector('input').value;
    newElement.innerHTML = task;
    oList.append(newElement);

}

let ASL = ['Ace', 'Sabo', 'Luffy'];

let sabo = document.querySelector('#Sabo');
let asL = document.querySelector('#ASL');

sabo.innerHTML = ASL[1];

for (let i = 0; i < ASL.length; i++) {
    asL.innerHTML += ASL[i] + ' ';
}

let port = document.querySelector('#ace');

function autoTen() {
    port.innerHTML = 'ACEEEEEEE';

}

let aceBtn = document.querySelector('#aka');

aceBtn.addEventListener('click', autoTen);