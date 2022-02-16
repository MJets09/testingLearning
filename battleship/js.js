// User starts the Gamepad(Game places a battleship on a random place on the grid)
// Repeat the following until the battleship is sink(Prompt user for a guess(2,0, etc.))
// Game finishes, give user a rating based on the number of guess

//Get user score
//Does it hit?
//If not, start guess again
//If so mark hit
//If all 3 spots hit
//Game over


let location1 = Math.floor(Math.random() * 7);
let location2 = Math.floor(Math.random() * 7);
let location3 = Math.floor(Math.random() * 7);
let hit = 0;
let guesses = 0;
let isSunk = false;

console.log(location1)
console.log(location2)
console.log(location3)

while (isSunk == false) {
    let userGuess = prompt('Coordinates?')
    if (userGuess < 0 || userGuess > 6) {
        alert('Only numbers between 0-6');
    } else {
        guesses++
        if (userGuess == location1 || userGuess == location2 || userGuess == location3) {
            hit++
            // alert('Hit!');
            if (hit == 3) {
                isSunk = true;
                alert('Sinked it')
            }
        } else {
            alert('Missed')
        }
    }
}

var stats = alert('You took ' + guesses + ' tries to sank the battleship')