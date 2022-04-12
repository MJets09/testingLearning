document.querySelector('button').addEventListener('click', digimon)


function digimon() {
    // let searchedDigi = document.querySelector('input').value
    let nameDigi = document.getElementById('digi').value;
    let attributeDigi = document.getElementById('attribute').value;
    let cardPack = document.getElementById('cardPack').value;

    function loopPic(arr) {
        for (i = 0; i < arr.length; i++) {
            document.querySelector('img').src += data.image_url;
        }
    }

    fetch(`https://digimoncard.io/api-public/search.php?n=${nameDigi}&attribute=${attributeDigi}&color=${cardPack}`).then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data[0].image_url;
            document.querySelector('p').innerHTML = data[0].name;
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}