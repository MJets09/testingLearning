// More people are using function expression than function declaration 
// due to hoisting which was already discussed here on this part:

// * Function Declarations are processed before the code block is executed.
// They are visible everywhere in the block.

// The idea why people are using function expression rather than declaration 
// is that you don't pollute the global scope unlike the function expression.

//Function expression, basically saving function into a variable to use later
let sayHi = function() {
    alert( "Hello" );
  };


  let func = sayHi;


//Function declaration
function ask(question,yes,no){
    if(confirm(question)) {
        yes()
    }
    else no();
}

function yes(){
    alert("Yeap")
}

function no(){
    alert("Nope")
}


//Arrow function, create the variable assign it to the parameters
//then function arrow(=>) returning what you want
let sum = (a,b) => a+b;


let combineName = (a,b) => a+" "+b;

console.log(combineName("Shohei", "Ohtani"))

let shoutOut = () => alert("OHTANI")

let AE1 = (a,b,c) =>{
    return antman = a+b+c;
}

console.log(AE1(5,5,5))