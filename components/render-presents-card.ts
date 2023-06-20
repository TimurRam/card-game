import { renderDifficulty } from './render-difficulty';
import { globalData } from '../index';
import { renderingWinGame, renderingLoseGame } from './end-game-components';
import {
    randomSuitAndRank,
    randomItemElements,
    startTime,
} from './help-components';
const gameTitleElement = ` <div class="game__title">
<div class="game__time-box">
    <div class="game__text-box">
        <p class="game__text">min</p>
        <p class="game__text">sek</p>
    </div>
    <span id="timer" class="game__time">00:00</span>
</div>
<div class="game__again-button">Начать заново</div>
</div>`;

export function renderPresentsCard() {
    switch (globalData.difficulty) {
        case 'easy':
            globalData.randomPreset = randomSuitAndRank(3);
            globalData.appElement!.innerHTML = `
            <div class="game">
                ${gameTitleElement}
                <div class="game__cards">
                    ${randomItemElements(6)}
                </div>
            </div>
            `;
            break;
        case 'medium':
            globalData.randomPreset = randomSuitAndRank(6);
            globalData.appElement!.innerHTML = `
            <div class="game">
                ${gameTitleElement}
                <div class="game__cards">
                    ${randomItemElements(12)}
                </div>
            </div>
            `;
            break;
        case 'hard':
            globalData.randomPreset = randomSuitAndRank(9);
            globalData.appElement!.innerHTML = `
            <div class="game">
                ${gameTitleElement}
                <div class="game__cards">
                    ${randomItemElements(18)}
                </div>
            </div>
            `;
            break;
        default:
            break;
    }
    const againButton = document.querySelector('.game__again-button');
    againButton!.addEventListener('click', () => {
        delete globalData.selectedCard;
        renderDifficulty();
    });
    checkButtonPresets();
}

function checkButtonPresets() {
    const buttonElements = document.querySelectorAll('.game__cards-item');
    let cardIndex = 0;
    setTimeout(() => {
        globalData.timerCheck === 'off';
        startTime();
        for (const buttonElement of buttonElements as any) {
            if (buttonElement instanceof HTMLElement) {
                buttonElement.classList.remove(
                    `preset__${buttonElement.dataset.preset}`
                );
            }
        }

        for (const buttonElement of buttonElements as any) {
            if (buttonElement instanceof HTMLElement) {
                buttonElement.addEventListener('click', () => {
                    buttonElement.classList.add('-button-active');
                    buttonElement.classList.add(
                        `preset__${buttonElement.dataset.preset}`
                    );
                    switch (globalData.selectedCard) {
                        case 'clear':
                            if (globalData.timerCheck === 'on') {
                                globalData.timerCheck = 'off';
                            }
                            globalData.selectedCard =
                                buttonElement.dataset.preset;
                            buttonElement.dataset.preset = 'open';
                            break;
                        case 'open':
                            globalData.selectedCard = 'clear';
                            break;
                        case buttonElement.dataset.preset:
                            cardIndex = cardIndex + 2;
                            if (globalData.index === cardIndex) {
                                globalData.timerCheck = 'on';
                                renderingWinGame();
                                return;
                            }
                            globalData.selectedCard = 'clear';
                            buttonElement.dataset.preset = 'open';
                            break;
                        default:
                            globalData.timerCheck = 'on';
                            renderingLoseGame();
                            break;
                    }
                });
            }
        }
    }, 5 * 1000);
}
