//Cloning

let startingSG = {
    name: "Ant Edwards",
    number: 5,
}

//New object
let teamUSA = {};

//Copy all the properties into new object
for(let p in startingSG) {
    teamUSA[p] = startingSG[p]
}

teamUSA.name = "Anthony Edwards"

teamUSA.believeThat = function() {
    console.log(`Believe that ${this.name}`)
}


//Calculator

let calculator = {
    read() {
        a = parseInt(prompt("Enter in a number"))
        b = parseInt(prompt("Enter in another number"))
    },
    sum() {
        console.log(sum = a+b);
    },
    mul(){
        console.log(mul = a*b);
    }

}


calculator.read();
calculator.sum();
calculator.mul();