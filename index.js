import { renderDifficulty } from './components/render-difficulty.js';
import { renderPresentsCard } from './components/render-presents-card.js';
import './style.css';
export const appElement = document.querySelector('.container');
export const globalData = {
    difficulty: '',
    cards: '',
};

renderDifficulty();

export function checkButtonsDifficulty() {
    const difficultyButtons = document.getElementsByName('difficult');
    console.log(difficultyButtons);
    const buttonStart = document.querySelector('.start__button');
    difficultyButtons.forEach((el) => {
        console.log(el);
        el.addEventListener('click', () => {
            globalData.difficulty = el.value;
            console.log(globalData.difficulty);

            switch (globalData.difficulty) {
                case 'easy':
                    globalData.difficulty = 'easy';
                    globalData.cards = '6 карточек (3 пары)';
                    break;
                case 'medium':
                    globalData.difficulty = 'medium';
                    globalData.cards = '12 карточек (6 пар)';
                    break;
                case 'hard':
                    globalData.difficulty = 'hard';
                    globalData.cards = '18 карточек (9 пар)';
                    break;
                default:
                    break;
            }
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
