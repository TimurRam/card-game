import { renderPresentsCard } from './render-presents-card';
import { globalData } from '../index';
import { ChunkGraph } from 'webpack';

export function renderDifficulty() {
    if (globalData.appElement) {
        globalData.appElement.innerHTML = `<div class="difficulty">
    <h2 class="difficulty__title">Выбери <br> 
        сложность
    </h2>
         <form class="difficulty__buttons">
         
            <input id="easy" type="radio" name="difficult" value="easy">
            <label class="difficulty__item" for="easy">1</label>
            <input id="medium" type="radio" name="difficult" value="medium"> 
            <label class="difficulty__item" for="medium">2</label>
            <input id="hard" type="radio" name="difficult" value="hard">
            <label class="difficulty__item" for="hard">3</label>
        </form>
         <div class="start">
            <button class="start__button">Старт</button>
        </div>
            
</div>
</div>`;
    }
    checkButtonsDifficulty();
}
export function checkButtonsDifficulty() {
    const difficultyButtons = document.querySelectorAll('input[type="radio"]');
    const buttonStart = document.querySelector('.start__button');
    for (const difficultyButton of difficultyButtons as any) {
        console.log(typeof 'difficultyButton');
        difficultyButton.addEventListener('click', () => {
            globalData.difficulty = difficultyButton.value;
        });
    }
    if (buttonStart) {
        buttonStart.addEventListener('click', () => {
            if (!globalData.difficulty) {
                alert('С начало выберете сложность');
                return;
            }
            renderPresentsCard();
        });
    }
}
