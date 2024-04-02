// let userAnswer = Number(prompt("Enter a number", "Enter Num"));
// console.log(typeof userAnswer)

// for(i = 1; i <= userAnswer; i++){
//     alert(i);
//}
// Whats the difference between "+prompt()" and "prompt()", or is it just a mistake
// The value that you enter in the prompt will return as a string. 
// For example: when you enter 2 in the prompt, the return value would be string "2". 
// So if you apply + in front of prompt it will convert the string to number. 
// So string "2" would be converted to number 2.

let userAnswer = prompt("What are you wearing? ");
let answer = userAnswer.toLowerCase();

switch(answer) {
    
    case "nike":
        alert("noice");
        break;
    case "adidas":
        alert("run it");
        break;
    default:
        alert("I aint got it");
        break;
}