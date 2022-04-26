document.querySelector('button').addEventListener('click', digimon)


function digimon() {
    // let searchedDigi = document.querySelector('input').value
    let nameDigi = document.getElementById('digi').value;
    let attributeDigi = document.getElementById('attribute').value;
    let cardPack = document.getElementById('cardPack').value;

    // &attribute=${attributeDigi}&color=${cardPack}

    fetch(`https://digimoncard.io/api-public/search.php?n=${nameDigi}`).then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(x => {
                console.log(x.image_url)
                const newImg = document.createElement('img');
                newImg.src = x.image_url
                document.querySelector('li').appendChild(newImg)

            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}