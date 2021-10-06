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