document.querySelector('#submitt').addEventListener('click', verifyFormat);

function verifyFormat() {
    let firstName = document.querySelector('#fname').value;
    let lastName = document.querySelector('#lname').value;
    let userid = document.querySelector('#userID').value;
    let bday = document.querySelector("#bday").value;
    let message = document.querySelector('#message');

    for (let i = 0; i < userid.length; i++) {
        let uid = userid[i].toUpperCase()

        if (uid === '') {
            console.log('Invalid UserID')
        } else {
            console.log(uid)
        }
    }
    for (let i = 0; i < firstName.length; i++) {
        let fName = firstName[i].toUpperCase()

        if (typeof fName === 'string') {
            console.log(fName)
            message.innerHTML += `<p> ${fName}</p>`;
        } else {
            console.log('Invalid First Name')
        }
    }
    for (let i = 0; i < lastName.length; i++) {
        let lName = lastName[i].toUpperCase()

        if (lName === '') {
            console.log('Invalid Last Name')
        } else {
            console.log(lName)
        }
    }
    for (let i = 0; i < bday.length; i++) {
        let birth = bday[i].toUpperCase()

        if (birth === '') {
            console.log('Invalid Last Name')
        } else {
            console.log(birth)
        }
    }

}

let para = document.querySelector('#star');
let x = 20;
let string = "";

for (let i = 1; i <= x; i++) {
    for (let j = 0; j < i; j++) {
        para.innerHTML = string += "*";
    }
    string += "<br>";
}

let str = ''
str = str.padStart(20, 'x \n')
console.log(str);

// var d1 = new Date(); //"now"
// var d2 = new Date("2011/02/01"); // some date
// var diff = Math.abs(d1 - d2); // difference in milliseconds



let bday = document.querySelector('#bday').value;

function dateDiff() {
    let a = new Date();
    console.log(a)
}

dateDiff();