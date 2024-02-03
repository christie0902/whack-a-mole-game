const button = document.querySelector('button');
const scoreDisplay = document.querySelector('.score');
const moles = document.querySelectorAll ('.mole');
const holes = document.querySelectorAll('.hole');
const timeDisplay = document.querySelector('.game-time')
const body = document.body;
const finalScreen = document.createElement('div');
finalScreen.classList.add('finalScreen');
body.appendChild(finalScreen);

let maxTime = 10;

let timeUp = false;
let score = 0;
let gameTime;


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

const whack = () => {
    score++;
    scoreDisplay.textContent = `${score}`;
}

const hide = (mole) => {
    mole.parentElement.classList.toggle('active');
}

// create mole array
const moleArr = Array.from(moles);
moleArr.forEach ((mole) => {
    mole.addEventListener ("click", (e) => {
        whack();
        hide(mole)
        peep();
    })
})

let time = maxTime;

button.addEventListener("click", (e) => {
    clearHoles();
    time = maxTime;
    timeUp = false;
    finalScreen.style.display = "none";
    timeDisplay.textContent = "Start!"
    score = 0;
    peep();
    
      let intervalID = setInterval (() => {
        timeDisplay.textContent = `${time--}s`;
        if (time < 0) {
            finalScreen.textContent = `Game Over. Your score is ${score}`
            finalScreen.style.display = "flex";
            timeDisplay.textContent = "time is up"
            clearInterval(intervalID)
            timeUp = true;
        }
    }, 1000)
})


const clearHoles = () => {
    holesArr.forEach ((hole) => {
        hole.classList.remove('active');
    })
}





