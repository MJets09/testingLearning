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

    document.querySelector('input').value = '';

    //Figure out why return false is necessary when submitting form
    return false;


}

let ASL = ['Ace', 'Sabo', 'Luffy'];

let sabo = document.querySelector('#Sabo');
let asL = document.querySelector('#ASL');

sabo.innerHTML = ASL[1];

let port = document.querySelector('#ace');

let weBack = () => port.innerHTML = 'WE BACKKK'

let aceBtn = document.querySelector('#aka');

aceBtn.addEventListener('click', weBack);

document.querySelector('select').onchange = function() {
    document.querySelector('#Sabo').style.color = this.value;
}

const strawHats = ['Zoro', 'Nami', 'Sanji', 'Usopp', 'Choppa', 'Robin'];

let ages = [33, 55, 11, 22, 44, 15, 69, 74, 81, 24];

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


let myArray = document.querySelector('#M');

let mFilter = sumArray.filter(x => x > 5);


console.log(mFilter);


//Using contructors and creating new classes
class Publication {
    constructor(title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`
            Title: ${ this.title }
            By: ${ this.author }
            ${ this.pubDate }
        `);
    }
}


let Sony = new Publication(
    'Tony', 'play', 1991
)

console.log(Sony)

//Create a Warrior
class Hero {
    constructor(name, weapon, vocation, personality) {
        this.name = name;
        this.weapon = weapon;
        this.vocation = vocation;
        this.personality = personality
    }
};


let Loto = new Hero('Loto', 'Erdrick Sword', 'Hero', 'Brave');


console.log(Loto)

console.log(Loto.weapon)

let kaze = ['wind', 'sun', 'moon'];

for (let i = 0; i < kaze.length; i++) {
    console.log(kaze[i]);
}


let shoes = {
    Nike: 'Blazers',
    Adidas: 'Superstar',
    putOn(x) { console.log(x) }
};

shoes.putOn(`${strawHats}`);


let shoesStatement = document.querySelector('#print');
let shoeType = document.querySelector('#whatShoe')


document.querySelector('#whatShoe').onchange = function() {
    document.querySelector('print').innerHTML = shoeType.value
        // console.log(shoeType.value);
}


switch (shoeType) {
    case 'Nikes':
        shoesStatement.innerHTML = 'Oh you\'re wearing Blazers'
        break;
    case 'Adidas':
        shoesStatement.innerHTML = 'Oh you\'re wearing Superstars'
        break;
    default:
        shoesStatement.innerHTML = 'Bro I dont know what type of shoes you wearing'
}

// an array is an iterable
var arr = [10, 20, 30];

for (let x of arr) {
    console.log(`Array value: ${ x }`);
}
// Array value: 10
// Array value: 20
// Array value: 30

let doesHaveBlonde = false;
let ownsIt;;

if (doesHaveBlonde === false) {
    ownsIt = "Does not have";
    console.log(ownsIt);
} else {
    ownsIt = "Does have it"
    console.log(ownsIt)
}


let favoriteShoe = document.querySelector('#favShoe');

function favShoe() {
    let shoe = prompt('What is your favorite shoe?')
    alert(`Your favorite shoe is the ${shoe}`)
}

favoriteShoe.addEventListener('click', favShoe);

// let userInput = parseInt(prompt('Enter in your number'));

// let fizzBuzz = document.querySelector('#M');

// if (userInput === 3 && 5) {
//     fizzBuzz.textContent = 'Fizz'
// } else {
//     fizzBuzz.textContent = userInput
// }

let a = 'ja';
let b = 'ba';

console.log(a.concat(b));

let theMaster = ['Jet Li', 'Jackie Chan', 'Donnie Yen'];

let asianCine = document.querySelector('#theMaster');

asianCine.innerHTML = theMaster.toString();

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const bat of cats) {
    console.log(bat);
}