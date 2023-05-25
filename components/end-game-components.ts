import { globalData } from '../index';
import { renderDifficulty } from './render-difficulty';
export function renderingWinGame() {
    globalData.appElement!.innerHTML = `
<section class="difficulty">
<h1 class="difficulty__win"></h1>
<h2 class="difficulty__title-win">Вы выиграли!</h2>
<p class="difficulty__text">Затраченное время:</p>
<p class="difficulty__timer">${globalData.timer}</p>
<button class="difficulty__buttonStart">Играть снова</button>
</section>
`;

    checkButtonEnd();
}

export function renderingLoseGame() {
    globalData.appElement!.innerHTML = `
<section class="difficulty">
<h1 class="difficulty__lose"></h1>
<h2 class="difficulty__title-win">Вы проиграли!</h2>
<p class="difficulty__text">Затраченное время:</p>
<p class="difficulty__timer">${globalData.timer}</p>
<button class="difficulty__buttonStart">Играть снова</button>
</section>
`;

    checkButtonEnd();
}

function checkButtonEnd() {
    const startButtonElement = document.querySelector(
        '.difficulty__buttonStart'
    );

    startButtonElement!.addEventListener('click', () => {
        globalData.selectedCard = 'clear';
        globalData.index = 0;
        renderDifficulty();
    });
}
