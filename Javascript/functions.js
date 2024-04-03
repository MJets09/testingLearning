// More people are using function expression than function declaration 
// due to hoisting which was already discussed here on this part:

// * Function Declarations are processed before the code block is executed.
// They are visible everywhere in the block.

// The idea why people are using function expression rather than declaration 
// is that you don't pollute the global scope unlike the function expression.


let sayHi = function() {
    alert( "Hello" );
  };


  let func = sayHi;



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


ask("Did you want those?", yes,no)