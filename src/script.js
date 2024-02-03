const button = document.querySelector('button');
const scoreDisplay = document.querySelector('.score');
const moles = document.querySelectorAll ('.mole');
const holes = document.querySelectorAll('.hole');

let timeUp = false;
let score = 0;


// randomTime function
const randomTime = (min, max) => {
    const randomTime = Math.ceil((Math.random() * (max-min)) + min);
    return randomTime;
}


const holesArr = Array.from(holes);

//random hole function
const randomHole = () => {
 let index = Math.floor(Math.random() * 6);
 return holesArr[index];
}

const peep = () => {
    let time = randomTime(1000,5000);
    let hole = randomHole();
    hole.classList.toggle('active');

    setTimeout(()=> {
    hole.classList.toggle('active');
    console.log(hole.classList)
}, time)

    
}

peep();