let random1 = Math.random();
random1 = Math.floor(random1 * 6) + 1;

let random2 = Math.random();
random2 = Math.floor(random2 * 6) + 1;

console.log(random1);
console.log(random2);

function game(no1, no2) {
    document.getElementById('img1').setAttribute('src', `images/dice${no1}.png`);
    document.getElementById('img2').setAttribute('src', `images/dice${no2}.png`);
    if(no1>no2) {
        document.querySelector('h1').textContent = 'player 1 wins';
    }else if(no1<no2) {
        document.querySelector('h1').textContent = 'player 2 wins';
    }if(no1===no2) {
        document.querySelector('h1').textContent = 'draw game';
    }
}

game(random1, random2);