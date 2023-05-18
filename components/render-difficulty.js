import { appElement, checkButtonsDifficulty } from '../index.js';

export function renderDifficulty() {
    appElement.innerHTML = `<div class="difficulty">
    <h2 class="difficulty__text">Выбери <br> 
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
    checkButtonsDifficulty();
}
