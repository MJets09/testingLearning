// let mainSection = document.querySelector('#mainTesting');
// let fBuzz = document.querySelector('#fizzBuzz');

// let pokeMans = ['Infernape', 'Scizor', 'Salamence'];
// let pokeMansSecond = ['Aggron', 'Jolteon', 'Gengar'];

// let userAnswer = parseInt(prompt('Enter in a number'));

// for (let i = 1; i <= userAnswer; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 == 0) {
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


let num = 7;
let userNum = parseInt(prompt('Pick a numnber 1-10'));

if (userNum < num) {
    alert('Less than');
} else(
    alert('Greater than')
)
console.log(userNum)