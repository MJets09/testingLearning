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


document.querySelector('form').onsubmit = function() {
    let oList = document.querySelector('ul');
    let task = document.querySelector('input').value;
    let newLi = document.createElement('li');

    newLi.innerHTML = task;
    oList.append(newLi);


    //Figure out why return false is necessary when submitting form
    return false;


}

let ASL = ['Ace', 'Sabo', 'Luffy'];

let sabo = document.querySelector('#Sabo');
let asL = document.querySelector('#ASL');

sabo.innerHTML = ASL[1];

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

let swordUser = Wu.filter(hero => hero.weapon === 'Sword');

console.log(swordUser);

for (let i = 0; i < strawHats.length; i++) {
    asL.innerHTML += strawHats[i] + ' ';
}

let sumArray = [5, 8, 10, 22, 34, 66];

let robin = sumArray.filter(x => x < 34);

console.log(robin)