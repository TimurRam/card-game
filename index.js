import { renderDifficulty } from './components/render-difficulty.js';
import { renderPresentsCard } from './components/render-presents-card.js';
import './style.css';
export const appElement = document.querySelector('.container');
export const globalData = {
    suit: ['spades', 'hearts', 'diamonds', 'clubs'],
    rank: ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'],
};

renderDifficulty();

export function randomSuitAndRank(numb) {
    let randomPreset = new Array(numb);
    for (let i = 0; i < numb; i++) {
        if (globalData.suit.length === 0) {
            globalData.suit = ['spades', 'hearts', 'diamonds', 'clubs'];
        }
        if (globalData.rank.length === 0) {
            globalData.rank = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
        }
        const randomSuit = Math.floor(Math.random() * globalData.suit.length);
        const randomRank = Math.floor(Math.random() * globalData.rank.length);
        randomPreset[i] =
            globalData.suit[randomSuit] + globalData.rank[randomRank];
        globalData.suit.splice(randomSuit, 1);
        globalData.rank.splice(randomRank, 1);
    }
    globalData.randomPreset = [...randomPreset, ...randomPreset];
    return;
}

export function randomButtonElements(numb) {
    let randomButtonElement = new Array();
    for (let i = 0; i < numb; i++) {
        const randomI = Math.floor(
            Math.random() * globalData.randomPreset.length
        );
        randomButtonElement[i] = `
        <div data-preset="${globalData.randomPreset[randomI]}" class="game__cards-item preset__${globalData.randomPreset[randomI]}"></div>
        `;
        globalData.randomPreset.splice(randomI, 1);
    }
    return randomButtonElement.join('');
}

export function checkButtonsDifficulty() {
    const difficultyButtons = document.getElementsByName('difficult');
    const buttonStart = document.querySelector('.start__button');
    difficultyButtons.forEach((el) => {
        el.addEventListener('click', () => {
            globalData.difficulty = el.value;
        });
    });
    buttonStart.addEventListener('click', () => {
        if (!globalData.difficulty) {
            alert('С начало выберете сложность');
            return;
        }
        renderPresentsCard();
    });
}
