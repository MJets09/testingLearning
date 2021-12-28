let mainSection = document.querySelector('#mainTesting');

let pokeMans = ['Infernape', 'Scizor', 'Salamence'];
let pokeMansSecond = ['Aggron', 'Jolteon', 'Gengar'];

let userAnswer = parseInt(prompt('Enter in a number'));

for (let i = 1; i <= userAnswer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}