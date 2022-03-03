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

let fullPizza = false;

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