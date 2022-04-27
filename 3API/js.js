document.querySelector('button').addEventListener('click', getPoke)

function removeElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }
}

function getPoke() {
    let userChoice = document.querySelector('input').value.toLocaleLowerCase()
    let url = `https://pokeapi.co/api/v2/pokemon/${userChoice}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)


            document.querySelector('img').src = data.sprites.front_default;
            document.querySelector('span').innerText = data.species.name;

            removeElements(document.querySelectorAll('li'));

            data.abilities.forEach(x => {
                let newLi = document.createElement('li');
                let newP = document.createElement('p')

                newP.innerText = x.ability.name
                console.log(newP)
                newLi.appendChild(newP)

                document.getElementById('abilities').appendChild(newLi)
            })

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

document.querySelector('img').addEventListener('click', backSprite);

function backSprite() {

    let userChoice = document.querySelector('input').value.toLocaleLowerCase()
    let url = `https://pokeapi.co/api/v2/pokemon/${userChoice}`


    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)


            document.querySelector('img').src = data.sprites.back_default;
            document.querySelector('span').innerText = data.species.name;

            removeElements(document.querySelectorAll('li'));

            data.abilities.forEach(x => {
                let newLi = document.createElement('li');
                let newP = document.createElement('p')

                newP.innerText = x.ability.name
                console.log(newP)
                newLi.appendChild(newP)

                document.getElementById('abilities').appendChild(newLi)
            })

        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}