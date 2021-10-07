let firstName = 'Joe';


console.log(`My name is ${firstName}`);


let btn = document.querySelector('button');
let counter = 1

function plusOne() {
    document.querySelector('p').innerHTML = counter;
    counter++
    if (counter % 10 == 0) {
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

// for (let i = 0; i < ASL.length; i++) {
//     asL.innerHTML += ASL[i] + ' ';
// }

let port = document.querySelector('#ace');

function autoTen() {
    port.innerHTML = 'ACEEEEEEE';

}

let aceBtn = document.querySelector('#aka');

aceBtn.addEventListener('click', autoTen);

document.querySelector('select').onchange = function() {
    document.querySelector('#Sabo').style.color = this.value;
}

const strawHats = ['Zoro', 'Nami', 'Sanji', 'Usopp', 'Choppa', 'Robin'];

let ages = [33, 55, 11, 22, 44, 15, 69, 74, 81, 24];

let brothers = (a, s, l) => console.log(a, s, l);


brothers('Ace', 'Sabo', 'Luffy');

let canDrink = ages.filter(x => x >= 21);

console.log(canDrink);

let Wu = [
    { name: 'Sun Jian', weapon: 'Sword' },
    { name: 'Zhou Yu', weapon: 'Bo Staff' },
    { name: 'Zhou Tai', weapon: 'Sword' },
    { name: 'SunShangXiang', weapon: 'Chakrams' }
];

let swordUser = Wu.filter(hero => hero.weapon === 'Bo Staff');

console.log(swordUser);