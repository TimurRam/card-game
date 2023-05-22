import { renderDifficulty } from './render-difficulty.js';
import {
    appElement,
    globalData,
    randomButtonElements,
    randomSuitAndRank,
} from '../index.js';
const gameTitleElement = ` <div class="game__title">
<div class="game__time-box">
    <div class="game__text-box">
        <p class="game__text">min</p>
        <p class="game__text">sek</p>
    </div>
    <p class="game__time">00.00</p>
</div>
<div class="game__again-button">Начать заново</div>
</div>`;

export function renderPresentsCard() {
    switch (globalData.difficulty) {
        case 'easy':
            randomSuitAndRank(3);
            appElement.innerHTML = `
            <div class="game">
                ${gameTitleElement}
                <div class="game__cards">
                    ${randomButtonElements(6)}
                </div>
            </div>
            `;
            break;
        case 'medium':
            randomSuitAndRank(6);
            appElement.innerHTML = `
            <div class="game">
                ${gameTitleElement}
                <div class="game__cards">
                    ${randomButtonElements(12)}
                </div>
            </div>
            `;
            break;
        case 'hard':
            randomSuitAndRank(9);
            appElement.innerHTML = `
            <div class="game">
                ${gameTitleElement}
                <div class="game__cards">
                    ${randomButtonElements(18)}
                </div>
            </div>
            `;
            break;
        default:
            break;
    }
    document
        .querySelector('.game__again-button')
        .addEventListener('click', () => {
            delete globalData.selectedCard;
            renderDifficulty();
        });
    checkButtonPresets();
}

function checkButtonPresets() {
    const itemElements = document.querySelectorAll('.game__cards-item');
    setTimeout(() => {
        for (const itemElement of itemElements) {
            itemElement.classList.remove(
                `preset__${itemElement.dataset.preset}`
            );
        }

        for (const itemElement of itemElements) {
            itemElement.addEventListener('click', () => {
                itemElement.classList.add('-button-active');
                itemElement.classList.add(
                    `preset__${itemElement.dataset.preset}`
                );
                if (!globalData.selectedCard) {
                    globalData.selectedCard = itemElement.dataset.preset;
                    itemElement.dataset.preset = '';
                    return;
                }
                if (globalData.selectedCard === itemElement.dataset.preset) {
                    alert('Вы победили!');
                    delete globalData.selectedCard;
                } else {
                    alert('Вы проиграли!');
                    delete globalData.selectedCard;
                }
            });
        }
    }, 5 * 1000);
}
