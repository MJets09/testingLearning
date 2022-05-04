// let mainSection = document.querySelector('#mainTesting');
// let fBuzz = document.querySelector('#fizzBuzz');

// let pokeMans = ['Infernape', 'Scizor', 'Salamence'];
// let pokeMansSecond = ['Aggron', 'Jolteon', 'Gengar'];

// let userAnswer = parseInt(prompt('Enter in a number'));

// for (let i = 1; i <= userAnswer; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// mainSection.innerHTML += pokeMans + ', ' + pokeMansSecond;


// let stringAnswer = prompt('What word was that again?');
// let strNum = prompt('What number are you thinking of?');


// let repeatString = function(x, y) {
//     let stringAnswer = x;
//     let strNum = y;

//     return x.repeat(y);
// }

// fBuzz.innerHTML = repeatString(stringAnswer, strNum);


// let reverseString = function(str) {
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr
// };

// console.log(reverseString('Wonderland'));


// let playerScore = parseInt(prompt('How much did you score today?'));


// if (playerScore > 29) {
//     alert('Congrats you have a new career high of ' + playerScore)
// } else if (playerScore >= 1) {
//     alert('Nice you dropped ' + playerScore + ' today')
// }

// while (playerScore < 25) {
//     playerScore++
//     document.write('Do this<br>');
// }



// let userWallet = prompt('What kind of wallet do you have?');

// switch (userWallet.toLowerCase()) {
//     case 'jordan':
//         alert('Oh I see you got some Js on');
//         break;
//     case 'nike':
//         alert('Oh Nikes on my feeeet');
//         break;
//     case 'adidas':
//         alert('Yeezy jump over the Jumpman');
//         break;
//     default:
//         alert('I dont have a retort for that one')
// }

// var word = 'bottles';
// var count = 99;

// while (count > 0) {

//     console.log(count + ' ' + word + ' of beer on the wall')
//     console.log(count + ' ' + word + ' of beer');
//     console.log('Take one down, pass it around');
//     count--;
// }
// if (count > 0) {
//     console.log(count + ' ' + word + ' of beer on the wall')
// } else {
//     console.log('No more ' + word + ' of beer on the wall.');
// }


// let num = 7;
// let userNum = parseInt(prompt('Pick a numnber 1-10'));

// if (userNum < num) {
//     alert('Less than');
// } else(
//     alert('Greater than')
// )
// console.log(userNum)

document.querySelector('#luffy').addEventListener('click', luffy);
document.querySelector('#zoro').addEventListener('click', zoro);
document.querySelector('#nami').addEventListener('click', nami);
document.querySelector('#ussop').addEventListener('click', ussop);

let total = 0;

function luffy() {
    total = 0;
    document.querySelector('#results').innerHTML = total;
}

function zoro() {
    total += 5;
    document.querySelector('#results').innerHTML = total;
}

function nami() {
    total += 10;
    document.querySelector('#results').innerHTML = total;
}

function ussop() {
    total += 15;
    document.querySelector('#results').innerHTML = total;
}



document.querySelector('button').addEventListener('click', checkDate)

function checkDate() {

    let day = document.querySelector('input').value.toLowerCase();

    if (day == "monday" || day == 'wednesday' || day == 'friday') {
        alert('Its a odd day of the week');
    } else if (day == 'tuesday' || day == 'thursday') {
        alert('Its a even day of the week');
    } else if (day == 'saturday' || day == 'sunday') {
        alert('Its da weeknd')
    } else {
        alert('You either misspelled or that\'s not a day of the week')
    }

    console.log(day)
}




// eatsPlants = true;
// eatsAnimals = true;

// var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");

let fullPizza;

var pizzaTime = fullPizza ? console.log('Issa Pizza time!') : console.log('Dawg im going home');

let education = 'no high school diploma'


switch (education) {
    case 'no high school diploma':
        salary = 25636;

        relish = salary.toLocaleString('en-US')

        console.log(`"In 2015, a person with an ${education} earned an average of $${relish}/year."`)
        break;
    case 'a high school diploma':
        salary = 35256;

        relish = salary.toLocaleString('en-US')

        console.log(`"In 2015, a person with an ${education} earned an average of $${relish}/year."`)
        break;
    default:
        alert('Okay, I don\'t know that one')
        break;
}


// let why = (question, yes, no) => {
//     if (confirm(question)) {
//         yes()
//     } else {
//         no()
//     }
// };

// why('Yeezy thee best?', function() { alert('Yeezusss') }, function() { alert('YOU AINT GOT NO YEEZY') });


// let userNum = prompt('Guess a number');


// while (userNum < 20) {
//     let newNum = prompt('Guess a number')
//     userNum = newNum;
// }

// let x = 5;

// for (i = 0; i < 11; i++) {
//     console.log(x * i);
// }

// var start = 0; // when to start
// while (start < 10) { // when to stop
//     start += 2; // how to get to the next item
//     console.log(start);
// }

// var x = 1;

// while (x <= 20) {
//     if (x % 3 === 0 && x % 5 === 0) {
//         console.log('JuliaJames');
//     } else if (x % 3 === 0) {
//         console.log('Julia');
//     } else if (x % 5 === 0) {
//         console.log('James')
//     } else {
//         console.log(x);
//     }
//     x++;
// }

// let num = 99;

// while (num >= 1) {
//     if (num === 1) {
//         console.log(`Only ${num} left.`)
//     } else if (num === 2) {
//         console.log(`We're almost there, at ${num}`)
//     } else {
//         console.log(`Count from ${num}`)
//     }
//     num--
// }

let num = 60;

while (num >= 0) {
    if (num === 50) {
        console.log('Orbiter transfers from ground to internal power');
    } else if (num === 31) {
        console.log('Ground launch sequencer is go for auto sequence start')
    } else if (num == 16) {
        console.log('Activate launch pad sound suppression system')
    } else if (num === 10) {
        console.log('Activate main engine hydrogen burnoff system')
    } else if (num === 0) {
        console.log('Solid rocket booster ignition and liftoff!')
    } else {
        console.log(`T-${num} seconds`)
    }
    num--
}

function reverseWord(str) {
    let reverse = str.split('').reverse().join('');

    return reverse
}

console.log(reverseWord('Meng'))

function laugh(num) {
    var sound = "";

    for (var x = 0; x < num; x++) {
        sound += "ha";
    }
    sound += "!";
    return sound;
}

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
    // Let's build a huge string equivalent to the triangle
    var triangle = "";

    //Let's start from the topmost line
    var lineNumber = 1;

    for (lineNumber = 1; lineNumber <= length; lineNumber++) {
        // We will not print one line at a time.
        // Rather, we will make a huge string that will comprise the whole triangle
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

// test your code by uncommenting the following line
// Note that the function buildTriangle() must return a string 
// because the console.log() accepts a string argument
console.log(buildTriangle(10))

function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + (num * num), 0);
}

let threeMusketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < threeMusketeers.length; i++) {
    console.log(threeMusketeers[i])
}


threeMusketeers.push('D\'Artagnan');

function loopThrough(arr) {
    let elements = arr.forEach(x => console.log(x))
    return elements
}

loopThrough(threeMusketeers)

threeMusketeers.splice(2, 1);

for (let x of threeMusketeers) {
    console.log(x)
}

const values = [3, 11, 7, 2, 9, 10];

function addSums(z) {
    let sum = z.reduce((a, b) => a + b, 0)
    console.log(sum)
}

function maxValue(y) {
    let maximum = Math.max(...y)

    console.log(maximum)
}

function makeStop() {

    let input = ''

    while (input.toLowerCase() !== 'stop') {
        input = prompt('Enter in a word')
        console.log(input)
    }
}



function dog(name, species, size, bark) {
    this.name = name,
        this.species = species,
        this.size = size,
        this.bark = function() {
            return bark
        }
}

let Fang = new dog('Fang', 'boardhound', '75\"', 'Grrr! Grrr!')

console.log(`${Fang.name} is a ${Fang.species} dog measuring ${Fang.size}`);
console.log(`Look, a cat! ${Fang.name} barks: ${Fang.bark()}`);

function dollaDollaBills(bandz) {
    let bills = ''

    for (i = 1; i <= bandz; i++) {
        bills += `${i} dolla dolla bills yaa `
    }

    return bills
}

console.log(dollaDollaBills(5))


let CaoCao = {
    sword: 'Sword of Heaven',
    Musou: 'Ice attackk',
    Titles: ['King of Wei', 'Hero of Chaos'],
    Who: function() {
        this.Titles.forEach(x => console.log(x))
    }

}

console.log(CaoCao.Who())

function squareSam(arr) {
    let sum = arr.reduce((a, b) => a + (b * b), 0)
    return sum
}

console.log(squareSam([9, 9, 9]))

function smash(words) {
    return words.join(' ')
};

console.log(smash(['string', 'word', 'arnold']))

var scienceScores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44
];


function countScores(arr) {
    let highScore = 0;

    for (i = 0; i <= arr.length; i++) {
        if (arr[i] > highScore) {
            highScore = arr[i]
        }
    }
    return highScore
}

let newArr = [6, 8, 32, 40, 53, 51, 87, 42]

console.log(countScores(newArr))

let str = 'Frank Ocean';

function reString(x) {
    return x.split('').map(ele => ele + ele).join('')
}

console.log(reString(str))

let annimals = ['Wolf', 'Bear', 'Orca', 'Gorilla'];


for (i = 0; i < annimals.length; i++) {
    console.log(annimals[i])
}

annimals.splice(1, 3)

console.log(annimals)

function makeCar(make, model, manual, doors, mileage) {
    this.make = make,
        this.model = model,
        this.manual = manual,
        this.doors = doors
    this.mileage = mileage
}

let M3 = new makeCar('BMW', 'M3', true, 2, 0)

let Testarossa = new makeCar('Ferrari', 'Testarosa', true, 2, 0)

function buyCar(car) {
    if (car.make == 'BMW' && car.manual == true) {
        return alert(`Buy this car mayneee, it's what you been looking for, a ${car.model} and is it's a manual`)
    } else {
        return alert(`NEXT, you dont want this ${car.model}`)
    }
}

console.log(M3)

function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log(createArray(9))

let thisIsMySong = 'AND I WONDERRRR'

let lowerCase = thisIsMySong.toLowerCase()

console.log(lowerCase.includes('and'))

function california(car) {
    let addCaliMiles = car.mileage + 35000;

    alert(`If you're going to Califronia your new mileage would be ${addCaliMiles}`)
}

function sum(numbers) {

    let newSum = 0;

    for (i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        newSum += numbers[i]
    }
    return newSum

}

console.log(sum([5, 4, 1]))

console.log(newArr.sort())


for (let prop in M3) {
    console.log(prop)

}

let testArr = [5, 5, 5, 5]

console.log(testArr.reduce((acc, a) => acc + a))

function sameCase(a, b) {
    if ((a == a.toLowerCase() && b == b.toLowerCase())) {
        return 1
    } else if ((a == a.toUpperCase() && b == b.toUpperCase())) {
        return 1
    }
}

console.log(sameCase('A', 'a'))

function sumTwoSmallestNumbers(numbers) {

    numbers = numbers.sort(function(a, b) {
        console.log(a)
        console.log(b)
        return a - b;
    });

    return numbers[0] + numbers[1];
};

console.log(Math.min(...newArr))

console.log(Math.floor(Math.random() * 5))

class Character {
    constructor(name, health, strength, specialItem) {

        this.name = name,
            this.health = health,
            this.strength = strength,
            this.specialItem = specialItem,
            this.gold = 10,
            this.key = 1,
            this.xp = 0
    }

    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} strength and ${this.xp} XP. They carry with them ${this.specialItem}. ${this.name} has ${this.gold} gold and ${this.key} keys`
    }

    attack(target) {
        if (target.health > 0) {

            const damage = this.strength;

            console.log(`${this.name} attacks ${target.name}`)

            target.health -= damage

            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} health left`)

            } else {
                target.health = 0;
                target.gold = 0
                target.key = 0
                const exp = 10;
                console.log(`${this.name} has defeated ${target.name} and gained ${exp} exp, ${target.name} has dropped ${target.gold} gold, and ${target.key} key(s).`)
                console.log(`${this.name} has obtained ${target.gold} gold and ${target.key} key(s).`)

                this.gold += target.gold;
                this.key += target.key;
            }
        }
    }

}


let Loto = new Character('Loto', 100, 10, 'Erdrick\'s Sword');

console.log(Loto.describe())

let ZhouYu = new Character('Zhou Yu', 100, 6, 'Xiao Qiao\'s Charm');

console.log(ZhouYu.describe())

function levelUp() {
    if (xp >= 100) {
        this.strength += Math.floor(Math.random() * 6)
    }
}

Loto.attack(ZhouYu)


class Dog {
    constructor(name, species, size) {
        this.name = name,
            this.species = species,
            this.size = size
    }
    bark() {
        return this.size > 60 ? `Grrr! Grrr!` : `Woof! Woof!`
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

class Account {
    constructor(name) {
        this.name = name,
            this.balance = 0
    }
    credit(x) {
        this.balance += x
    }
    describe() {
        return `Owner: ${this.name}, balance: ${this.balance}`
    }
}

let customerAccounts = [new Account('Sean'), new Account('Brad'), new Account('Georges')]

customerAccounts.forEach(x => {
    x.credit(+(1000))
    console.log(x.describe())
})



console.log(thisIsMySong.split('').map((x) => x + x).join(''))

function isPrime(x) {
    if (x % 2 === 0) {
        return x
    }
}


console.log(newArr.filter(isPrime))

console.log((['5', 3, '2', 1]))

// const lateMessage = function() {
//     alert('This message came a little late')
// }

// setTimeout(lateMessage, 3000)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    }
};


console.log(circle)

function getMiddle(s) {
    if (s.length % 2 == 1) {
        return s.substring((s.length / 2) + 1, (s.length / 2))
    } else if (s.length % 2 == 0) {
        return s.substring((s.length / 2) - 1, (s.length / 2) + 1)
    }
}
console.log(getMiddle("handers"));
console.log(getMiddle("test"));


document.querySelector('h1').setAttribute('class', 'glasses')

console.log(document.querySelector('h1').getAttribute('class'))