// DOM
const main = document.querySelector('.main');
const mainMenu = document.querySelector('.start-menu');
const go123 = document.querySelector('.threeTwoOneGo');
const monsterEasy = document.querySelector('.monsterEasy');
const monsterMedium = document.querySelector('.monsterMedium');
const monsterHard = document.querySelector('.monsterHard');
const sq1 = document.querySelector('.sq1');
const sq2 = document.querySelector('.sq2');
const sq3 = document.querySelector('.sq3');
const sq4 = document.querySelector('.sq4');
const sq5 = document.querySelector('.sq5');
const sq6 = document.querySelector('.sq6');
const sq7 = document.querySelector('.sq7');
const sq8 = document.querySelector('.sq8');
const sq9 = document.querySelector('.sq9');
const sq10 = document.querySelector('.sq10');
const sq11 = document.querySelector('.sq11');
const sq12 = document.querySelector('.sq12');
const containerOfMonsters = document.querySelector('.containerOfBlocks');
const infoText = document.querySelector('.typewriter');
const level = document.querySelector('.level');
const hp = document.querySelector('.hpBar');
const hpInside = document.querySelector('.hpBarInside');
const bulletHole = document.querySelector('.bulletHole');
const squares = document.getElementById('sq');
const hpMedium = document.querySelector('.hpBarMedium');
const hpMediumInside = document.querySelector('.hpBarInsideMedium');
const hpHard = document.querySelector('.hpBarHard');
const hpHardInside = document.querySelector('.hpBarInsideHard');
const score = document.querySelector('.score');

let scoreCounter = 0;
let levelCounter = 1;
let countOfMonsters = 0;
let isWinning = false;
let counterOfShootsEasyLevel = 0;
let counterOfShootsMediumLevel = 0;
let counterOfShootsHardLevel = 0;
let currentSquare = 0;
let currentSquareMM = 0;
let isLevelOneFinished = false;
let isLevelTwoFinished = false;
let isLevelThreeFinished = false;
let isMediumBossDefeatedLevel2 = false;
let isEasyBossDefeatedLevel2 = false;
let currentSquareHM = 0;

function shootAudio () {
    let audio = new Audio('shooting.mp3');
    audio.play();
    audio.volume = 0.03;
}

function wait (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function easyAttack() {
    counterOfShootsEasyLevel++;
    shootAudio();
    console.log(counterOfShootsEasyLevel);
    //level 1
    if (!isLevelOneFinished) {
    if (counterOfShootsEasyLevel == 1) {
        if (currentSquare == 1) {
            monsterEasy.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 2) {
            monsterEasy.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 3) {
            monsterEasy.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 4) {
            monsterEasy.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 5) {
            monsterEasy.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 6) {
            monsterEasy.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 7) {
            monsterEasy.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 8) {
            monsterEasy.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 9) {
            monsterEasy.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 10) {
            monsterEasy.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 11) {
            monsterEasy.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 12) {
            monsterEasy.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        hpInside.className = 'hpBarEasy2';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
    }
    if (counterOfShootsEasyLevel == 2) {
        if (currentSquare == 1) {
            monsterEasy.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 2) {
            monsterEasy.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 3) {
            monsterEasy.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 4) {
            monsterEasy.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 5) {
            monsterEasy.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 6) {
            monsterEasy.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 7) {
            monsterEasy.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 8) {
            monsterEasy.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 9) {
            monsterEasy.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 10) {
            monsterEasy.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 11) {
            monsterEasy.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 12) {
            monsterEasy.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        hpInside.className = 'hpBarEasy3';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
    }
    if (counterOfShootsEasyLevel == 3) {
        if (currentSquare == 1) {
            monsterEasy.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 2) {
            monsterEasy.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 3) {
            monsterEasy.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 4) {
            monsterEasy.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 5) {
            monsterEasy.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 6) {
            monsterEasy.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 7) {
            monsterEasy.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 8) {
            monsterEasy.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 9) {
            monsterEasy.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 10) {
            monsterEasy.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 11) {
            monsterEasy.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 12) {
            monsterEasy.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        hpInside.className = 'hpBarEasy4';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
        await wait(100);
        monsterEasy.classList.add('dyeAnimation');
        hp.classList.add('dyeAnimation');
        await wait(1000);
        monsterEasy.style.display = 'none';
        hp.style.display = 'none';
        levelCounter = 2;
        isLevelOneFinished = true;
        await wait(500);
        hpInside.className = 'hpBarInside';
        levelTwo();
        counterOfShootsEasyLevel = 0;
    }
}
    level.textContent = `Level ${levelCounter} 🏹`;
    // level 2 start
    if (!isLevelTwoFinished) {
    if (counterOfShootsEasyLevel == 1) {
        if (currentSquare == 1) {
            monsterEasy.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 2) {
            monsterEasy.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 3) {
            monsterEasy.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 4) {
            monsterEasy.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 5) {
            monsterEasy.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 6) {
            monsterEasy.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 7) {
            monsterEasy.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 8) {
            monsterEasy.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 9) {
            monsterEasy.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 10) {
            monsterEasy.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 11) {
            monsterEasy.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 12) {
            monsterEasy.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        hpInside.className = 'hpBarEasy2';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
    }}
    if (counterOfShootsEasyLevel == 2) {
        if (currentSquare == 1) {
            monsterEasy.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 2) {
            monsterEasy.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 3) {
            monsterEasy.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 4) {
            monsterEasy.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 5) {
            monsterEasy.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 6) {
            monsterEasy.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 7) {
            monsterEasy.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 8) {
            monsterEasy.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 9) {
            monsterEasy.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 10) {
            monsterEasy.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 11) {
            monsterEasy.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 12) {
            monsterEasy.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        hpInside.className = 'hpBarEasy3';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
    }
    if (counterOfShootsEasyLevel == 3) {
        if (currentSquare == 1) {
            monsterEasy.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 2) {
            monsterEasy.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 3) {
            monsterEasy.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 4) {
            monsterEasy.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 5) {
            monsterEasy.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 6) {
            monsterEasy.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 7) {
            monsterEasy.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 8) {
            monsterEasy.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 9) {
            monsterEasy.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 10) {
            monsterEasy.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 11) {
            monsterEasy.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 12) {
            monsterEasy.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        hpInside.className = 'hpBarEasy4';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
        await wait(100);
        monsterEasy.classList.add('dyeAnimation');
        hp.classList.add('dyeAnimation');
        await wait(1000);
        monsterEasy.style.display = 'none';
        hp.style.display = 'none';
        levelCounter = 2;
        isLevelOneFinished = true;
        if (counterOfShootsEasyLevel == 3) {
        if (currentSquare == 1) {
            monsterEasy.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 2) {
            monsterEasy.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 3) {
            monsterEasy.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 4) {
            monsterEasy.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 5) {
            monsterEasy.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 6) {
            monsterEasy.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 7) {
            monsterEasy.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 8) {
            monsterEasy.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 9) {
            monsterEasy.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 10) {
            monsterEasy.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 11) {
            monsterEasy.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
        if (currentSquare == 12) {
            monsterEasy.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterEasy.classList.remove('blinkAnimation');
        }
            hpInside.className = 'hpBarEasy4';
            hp.classList.add('shake');
            await wait(300);
            hp.classList.remove('shake');
            await wait(100);
            monsterEasy.classList.add('dyeAnimation');
            hp.classList.add('dyeAnimation');
            await wait(1000);
            monsterEasy.style.display = 'none';
            hp.style.display = 'none';
            isEasyBossDefeatedLevel2 = true;
            if (isMediumBossDefeatedLevel2 || isEasyBossDefeatedLevel2) {
                isLevelTwoFinished = true;
                level3();
                scoreCounter += 30;
                score.textContent = `Score: ${scoreCounter}`;
            }
        }
    }
}

async function mediumAttack () {
    counterOfShootsMediumLevel++;
    shootAudio();
    console.log(counterOfShootsMediumLevel);
    // level 2 
    if (!isLevelTwoFinished) {
    if (counterOfShootsMediumLevel == 1) {
        if (currentSquareMM == 1) {
            monsterMedium.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 2) {
            monsterMedium.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 3) {
            monsterMedium.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 4) {
            monsterMedium.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 5) {
            monsterMedium.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 6) {
            monsterMedium.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 7) {
            monsterMedium.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 8) {
            monsterMedium.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 9) {
            monsterMedium.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 10) {
            monsterMedium.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 11) {
            monsterMedium.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 12) {
            monsterMedium.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        hpMediumInside.className = 'hpBarInsideMedium';
        hpMedium.classList.add('shake');
        await wait(300);
        hpMedium.classList.remove('shake');
    }}
    if (counterOfShootsMediumLevel == 2) {
        if (currentSquareMM == 1) {
            monsterMedium.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 2) {
            monsterMedium.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 3) {
            monsterMedium.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 4) {
            monsterMedium.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 5) {
            monsterMedium.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 6) {
            monsterMedium.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 7) {
            monsterMedium.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 8) {
            monsterMedium.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 9) {
            monsterMedium.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 10) {
            monsterMedium.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 11) {
            monsterMedium.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 12) {
            monsterMedium.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        hpMediumInside.className = 'hpBarMedium2';
        hpMedium.classList.add('shake');
        await wait(300);
        hpMedium.classList.remove('shake');
    }
    if (counterOfShootsMediumLevel == 3) {
        console.log('3rd');
        if (currentSquareMM == 1) {
            monsterMedium.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 2) {
            monsterMedium.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 3) {
            monsterMedium.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 4) {
            monsterMedium.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 5) {
            monsterMedium.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 6) {
            monsterMedium.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 7) {
            monsterMedium.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 8) {
            monsterMedium.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 9) {
            monsterMedium.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 10) {
            monsterMedium.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 11) {
            monsterMedium.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 12) {
            monsterMedium.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        hpMediumInside.className = 'hpBarMedium3';
        hpMedium.classList.add('shake');
        await wait(300);
        hpMedium.classList.remove('shake');
        if (counterOfShootsMediumLevel == 4) {
            console.log('4th')
        if (currentSquareMM == 1) {
            monsterMedium.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 2) {
            monsterMedium.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 3) {
            monsterMedium.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 4) {
            monsterMedium.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 5) {
            monsterMedium.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 6) {
            monsterMedium.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 7) {
            monsterMedium.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 8) {
            monsterMedium.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 9) {
            monsterMedium.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 10) {
            monsterMedium.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 11) {
            monsterMedium.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 12) {
            monsterMedium.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
            hpMediumInside.className = 'hpBarMedium4';
            hpMedium.classList.add('shake');
            await wait(300);
            hpMedium.classList.remove('shake');
            await wait(100);
    }
        if (counterOfShootsMediumLevel == 5) {
        if (currentSquareMM == 1) {
            monsterMedium.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 2) {
            monsterMedium.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 3) {
            monsterMedium.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 4) {
            monsterMedium.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 5) {
            monsterMedium.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 6) {
            monsterMedium.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 7) {
            monsterMedium.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 8) {
            monsterMedium.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 9) {
            monsterMedium.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 10) {
            monsterMedium.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 11) {
            monsterMedium.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 12) {
            monsterMedium.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
            hpMediumInside.className = 'hpBarMedium5';
            hpMedium.classList.add('shake');
            await wait(300);
            hpMedium.classList.remove('shake');
            await wait(100);
    }
    if (counterOfShootsMediumLevel == 6) {
        if (currentSquareMM == 1) {
            monsterMedium.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 2) {
            monsterMedium.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 3) {
            monsterMedium.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 4) {
            monsterMedium.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 5) {
            monsterMedium.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 6) {
            monsterMedium.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 7) {
            monsterMedium.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 8) {
            monsterMedium.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 9) {
            monsterMedium.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 10) {
            monsterMedium.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 11) {
            monsterMedium.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 12) {
            monsterMedium.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
            hpMediumInside.className = 'hpBarMedium6';
            hpMedium.classList.add('shake');
            await wait(300);
            hpMedium.classList.remove('shake');
            await wait(100);
    }
    if (counterOfShootsMediumLevel == 7) {
        if (currentSquareMM == 1) {
            monsterMedium.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 2) {
            monsterMedium.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 3) {
            monsterMedium.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 4) {
            monsterMedium.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 5) {
            monsterMedium.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 6) {
            monsterMedium.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 7) {
            monsterMedium.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 8) {
            monsterMedium.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 9) {
            monsterMedium.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 10) {
            monsterMedium.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 11) {
            monsterMedium.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 12) {
            monsterMedium.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
            hpMediumInside.className = 'hpBarMedium7';
            hpMedium.classList.add('shake');
            await wait(300);
            hpMedium.classList.remove('shake');
            await wait(100);
    }
    if (counterOfShootsMediumLevel == 8) {
        if (currentSquareMM == 1) {
            monsterMedium.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 2) {
            monsterMedium.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 3) {
            monsterMedium.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 4) {
            monsterMedium.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 5) {
            monsterMedium.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 6) {
            monsterMedium.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 7) {
            monsterMedium.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 8) {
            monsterMedium.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 9) {
            monsterMedium.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 10) {
            monsterMedium.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 11) {
            monsterMedium.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareMM == 12) {
            monsterMedium.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
            hpMediumInside.className = 'hpBarMedium8';
            hpMedium.classList.add('shake');
            await wait(300);
            hpMedium.classList.remove('shake');
            await wait(100);
    }
            monsterMedium.classList.add('dyeAnimation');
            hpMedium.classList.add('dyeAnimation');
            await wait(1000);
            monsterMedium.style.display = 'none';
            hpMedium.style.display = 'none';
            isMediumBossDefeatedLevel2 = true;
            if (isMediumBossDefeatedLevel2 || isEasyBossDefeatedLevel2) {
                isLevelTwoFinished = true;
                counterOfShootsMediumLevel = 0;
                level3();
                score.textContent = `Score: ${scoreCounter}`;
            }
        }
    }

async function hardAttack () {
    counterOfShootsHardLevel++;
    shootAudio();
    console.log(counterOfShootsMediumLevel);
    // level 3 
    if (!isLevelThreeFinished) {
        if (counterOfShootsHardLevel == 1) {
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        hpHardInside.className = 'hpBarInsideMedium';
        hpHard.classList.add('shake');
        await wait(300);
        hpHard.classList.remove('shake');
    }}
    if (counterOfShootsHardLevel == 2) {
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        hpHardInside.className = 'hpBarInsideMedium';
        hpHard.classList.add('shake');
        await wait(300);
        hpHard.classList.remove('shake');
    }
    if (counterOfShootsHardLevel == 3) {
        console.log('3rd');
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterMedium.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterMedium.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterMedium.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterMedium.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterMedium.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterMedium.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterMedium.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterMedium.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterMedium.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterMedium.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterMedium.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterMedium.classList.remove('blinkAnimation');
        }
        hpHardInside.className = 'hpBarInsideMedium';
        hpHard.classList.add('shake');
        await wait(300);
        hpHard.classList.remove('shake');
        if (counterOfShootsHardLevel == 4) {
            console.log('4th')
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
            hpHardInside.className = 'hpBarMedium4';
            hpHard.classList.add('shake');
            await wait(300);
            hpHard.classList.remove('shake');
            await wait(100);
    }
        if (counterOfShootsHardLevel == 5) {
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
            hpHardInside.className = 'hpBarMedium5';
            hpHard.classList.add('shake');
            await wait(300);
            hpHard.classList.remove('shake');
            await wait(100);
    }
    if (counterOfShootsHardLevel == 6) {
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
            hpHardInside.className = 'hpBarMedium6';
            hpHard.classList.add('shake');
            await wait(300);
            hpHard.classList.remove('shake');
            await wait(100);
    }
    if (counterOfShootsHardLevel == 7) {
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
            hpHardInside.className = 'hpBarMedium7';
            hpHard.classList.add('shake');
            await wait(300);
            hpHard.classList.remove('shake');
            await wait(100);
    }
    if (counterOfShootsHardLevel == 8) {
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
            hpHardInside.className = 'hpBarMedium8';
            hpHard.classList.add('shake');
            await wait(300);
            hpHard.classList.remove('shake');
            await wait(100);
    }
    if (counterOfShootsHardLevel == 9) {
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        hpHardInside.className = 'hpBarInsideMedium';
        hpHard.classList.add('shake');
        await wait(300);
        hpHard.classList.remove('shake');
    }}
    if (counterOfShootsHardLevel == 10) {
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        hpHardInside.className = 'hpBarMedium2';
        hpHard.classList.add('shake');
        await wait(300);
        hpHard.classList.remove('shake');
    }
    if (counterOfShootsHardLevel == 11) {
        console.log('3rd');
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        hpHardInside.className = 'hpBarMedium3';
        hpHard.classList.add('shake');
        await wait(300);
        hpHard.classList.remove('shake');
        if (counterOfShootsMediumLevel == 12) {
            console.log('4th')
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
            hpHardInside.className = 'hpBarMedium4';
            hpHard.classList.add('shake');
            await wait(300);
            hpHard.classList.remove('shake');
            await wait(100);
    }
        if (counterOfShootsHardLevel == 13) {
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
            hpHardInside.className = 'hpBarMedium5';
            hpHard.classList.add('shake');
            await wait(300);
            hpHard.classList.remove('shake');
            await wait(100);
    }
    if (counterOfShootsHardLevel == 14) {
        if (currentSquareHM == 1) {
            monsterHard.classList.add('blinkAnimation');
            sq1.classList.add('bgImg');
            await wait(100);
            sq1.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 2) {
            monsterHard.classList.add('blinkAnimation');
            sq2.classList.add('bgImg');
            await wait(100);
            sq2.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 3) {
            monsterHard.classList.add('blinkAnimation');
            sq3.classList.add('bgImg');
            await wait(100);
            sq3.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 4) {
            monsterHard.classList.add('blinkAnimation');
            sq4.classList.add('bgImg');
            await wait (100);
            sq4.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 5) {
            monsterHard.classList.add('blinkAnimation');
            sq5.classList.add('bgImg');
            await wait(100);
            sq5.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 6) {
            monsterHard.classList.add('blinkAnimation');
            sq6.classList.add('bgImg');
            await wait(100);
            sq6.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 7) {
            monsterHard.classList.add('blinkAnimation');
            sq7.classList.add('bgImg');
            await wait(100);
            sq7.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 8) {
            monsterHard.classList.add('blinkAnimation');
            sq8.classList.add('bgImg');
            await wait(100);
            sq8.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 9) {
            monsterHard.classList.add('blinkAnimation');
            sq9.classList.add('bgImg');
            await wait(100);
            sq9.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 10) {
            monsterHard.classList.add('blinkAnimation');
            sq10.classList.add('bgImg');
            await wait(100);
            sq10.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 11) {
            monsterHard.classList.add('blinkAnimation');
            sq11.classList.add('bgImg');
            await wait(100);
            sq11.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
        if (currentSquareHM == 12) {
            monsterHard.classList.add('blinkAnimation');
            sq12.classList.add('bgImg');
            await wait(100);
            sq12.classList.remove('bgImg');
            await wait(300);
            monsterHard.classList.remove('blinkAnimation');
        }
            hpHardInside.className = 'hpBarMedium6';
            hpHard.classList.add('shake');
            await wait(300);
            hpHard.classList.remove('shake');
            await wait(100);
            scoreCounter += 100;
            score.textContent = `Score: ${scoreCounter}`;
    }
    }
}
    
function level3 () {
    if (isLevelTwoFinished) {
        levelCounter++;
        level.textContent = `Level 3 🏹`;
    }
    hp.classList.add('hpBarEasy2');
    if (levelCounter == 3) {
        countOfMonsters = 3;
        const randomLocation = Math.floor(Math.random() * (12 - 1) + 1);
        const randomLocation2 = Math.floor(Math.random() * (12 - 1) + 1);
        const randomLocation3 = Math.floor(Math.random() * (12 - 1) + 1);
        if (randomLocation == randomLocation2 || randomLocation3 == randomLocation2 || randomLocation3 == randomLocation) {
            currentSquare = 4;
            currentSquareMM = 6;
            currentSquareHM = 10;
            sq4.appendChild(hp);
            sq6.appendChild(hpMedium);
            sq10.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq4.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq6.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq10.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 1) {
            currentSquare = 1;
            currentSquareMM = 7;
            currentSquareHM = 3;
            sq1.appendChild(hp);
            sq7.appendChild(hpMedium);
            sq3.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq1.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq7.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq3.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 2) {
            currentSquare = 1;
            currentSquareMM = 5;
            currentSquareHM = 9;
            sq1.appendChild(hp);
            sq5.appendChild(hpMedium);
            sq9.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq1.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq5.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq9.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 3) {
            currentSquare = 4;
            currentSquareMM = 11;
            currentSquareHM = 6;
            sq4.appendChild(hp);
            sq11.appendChild(hpMedium);
            sq6.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq4.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq11.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq6.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 4) {
            currentSquare = 2;
            currentSquareMM = 5;
            currentSquareHM = 9;
            sq2.appendChild(hp);
            sq5.appendChild(hpMedium);
            sq9.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq2.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq5.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq9.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 5) {
            currentSquare = 12;
            currentSquareMM = 11;
            currentSquareHM = 5;
            sq12.appendChild(hp);
            sq11.appendChild(hpMedium);
            sq5.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq12.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq11.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq5.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 6) {
            currentSquare = 6;
            currentSquareMM = 2;
            currentSquareHM = 9;
            sq6.appendChild(hp);
            sq2.appendChild(hpMedium);
            sq9.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq6.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq2.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq9.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 7) {
            currentSquare = 9;
            currentSquareMM = 12;
            currentSquareHM = 10;
            sq9.appendChild(hp);
            sq12.appendChild(hpMedium);
            sq10.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq9.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq12.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq10.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 8) {
            currentSquare = 8;
            currentSquareMM = 7;
            currentSquareHM = 4;
            sq8.appendChild(hp);
            sq7.appendChild(hpMedium);
            sq4.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq8.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq7.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq4.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 9) {
            currentSquare = 2;
            currentSquareMM = 8;
            currentSquareHM = 11;
            sq2.appendChild(hp);
            sq8.appendChild(hpMedium);
            sq11.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq2.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq8.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq11.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 10) {
            currentSquare = 12;
            currentSquareMM = 7;
            currentSquareHM = 5;
            sq12.appendChild(hp);
            sq7.appendChild(hpMedium);
            sq5.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq12.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq7.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq5.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 11) {
            currentSquare = 9;
            currentSquareMM = 1;
            currentSquareHM = 5;
            sq9.appendChild(hp);
            sq1.appendChild(hpMedium);
            sq5.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq9.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq1.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq5.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 12) {
            currentSquare = 4;
            currentSquareMM = 8;
            currentSquareHM = 10;
            sq4.appendChild(hp);
            sq8.appendChild(hpMedium);
            sq10.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq4.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq8.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
            sq10.appendChild(monsterHard);
            monsterHard.style.display = 'block';
        }
    }
}


function levelTwo() {
    scoreCounter += 10;
    score.textContent = `Score: ${scoreCounter}`;
    monsterEasy.style.display = 'block';
    monsterMedium.style.display = 'block';
    if (levelCounter == 2) {
        countOfMonsters = 2;
        const randomLocation = Math.floor(Math.random() * (12 - 1) + 1);
        const randomLocation2 = Math.floor(Math.random() * (12 - 1) + 1);
        if (randomLocation == randomLocation2) {
            currentSquare = 4;
            currentSquareMM = 6;
            sq4.appendChild(hp);
            sq6.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq4.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq6.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 1) {
            currentSquare = 1;
            currentSquareMM = 4;
            sq1.appendChild(hp);
            sq4.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq1.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq4.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 2) {
            currentSquare = 2;
            currentSquareMM = 3;
            sq2.appendChild(hp);
            sq3.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq2.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq3.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 3) {
            currentSquare = 3;
            currentSquareMM = 7;
            sq3.appendChild(hp);
            sq7.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq3.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq7.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 4) {
            currentSquare = 4;
            currentSquareMM = 1;
            sq4.appendChild(hp);
            sq1.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq4.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq1.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 5) {
            currentSquare = 5;
            currentSquareMM = 6;
            sq5.appendChild(hp);
            sq6.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq5.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq6.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 6) {
            currentSquare = 6;
            currentSquareMM = 11;
            sq6.appendChild(hp);
            sq11.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq6.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq11.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 7) {
            currentSquare = 7;
            currentSquareMM = 12;
            sq7.appendChild(hp);
            sq12.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq7.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq12.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 8) {
            currentSquare = 8;
            currentSquareMM = 10;
            sq8.appendChild(hp);
            sq10.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq8.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq10.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 9) {
            currentSquare = 9;
            currentSquareMM = 3;
            sq9.appendChild(hp);
            sq3.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq9.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq3.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 10) {
            currentSquare = 10;
            currentSquareMM = 4;
            sq10.appendChild(hp);
            sq4.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq10.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq4.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 11) {
            currentSquare = 11;
            currentSquareMM = 12;
            sq11.appendChild(hp);
            sq12.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq11.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq12.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 12) {
            currentSquare = 12;
            currentSquareMM = 5;
            sq12.appendChild(hp);
            sq5.appendChild(hpMedium);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            sq12.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
            sq5.appendChild(monsterMedium);
            monsterMedium.style.display = 'block';
        }
    }
}

async function runGame() {
    containerOfMonsters.style.display = 'block';
    if (levelCounter == 1) {
        countOfMonsters = 1;
        const randomLocation = Math.floor(Math.random() * (12 - 1) + 1);
        if (randomLocation == 1) {
            currentSquare = 1;
            sq1.appendChild(hp);
            hp.style.display = 'block';
            sq1.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 2) {
            currentSquare = 2;
            sq2.appendChild(hp);
            hp.style.display = 'block';
            sq2.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 3) {
            currentSquare = 3;
            sq3.appendChild(hp);
            hp.style.display = 'block';
            sq3.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 4) {
            currentSquare = 4;
            sq4.appendChild(hp);
            hp.style.display = 'block';
            sq4.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 5) {
            currentSquare = 5;
            sq5.appendChild(hp);
            hp.style.display = 'block';
            sq5.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 6) {
            currentSquare = 6;
            sq6.appendChild(hp);
            hp.style.display = 'block';
            sq6.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 7) {
            currentSquare = 7;
            sq7.appendChild(hp);
            hp.style.display = 'block';
            sq7.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 8) {
            currentSquare = 8;
            sq8.appendChild(hp);
            hp.style.display = 'block';
            sq8.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 9) {
            currentSquare = 9;
            sq9.appendChild(hp);
            hp.style.display = 'block';
            sq9.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 10) {
            currentSquare = 10;
            sq10.appendChild(hp);
            hp.style.display = 'block';
            sq10.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 11) {
            currentSquare = 11;
            sq11.appendChild(hp);
            hp.style.display = 'block';
            sq11.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 12) {
            currentSquare = 12;
            sq12.appendChild(hp);
            hp.style.display = 'block';
            sq12.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
    }
}

async function startCounter() {
    console.log('Function startCounter started');
    go123.style.fontSize = '4rem'
    go123.textContent = '3';
    await wait(1000);
    go123.textContent = '2';
    await wait(1000);
    go123.textContent = '1';
    await wait(1000);
    go123.textContent = 'Go!';
    await wait(500);
    go123.textContent = '';
    console.log('Function startCounter ended');
    runGame();
}

async function start() {
    infoText.textContent = 'Game Started!';
    level.textContent = `Level ${levelCounter} 🏹`;
    mainMenu.className = 'moveMenu';
    console.log('Function worked out!');
    await wait(1000);
    mainMenu.style.display = 'none';
    await startCounter();
}