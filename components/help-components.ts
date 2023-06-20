import { globalData } from '../index';
export function randomSuitAndRank(numb: number) {
    const randomPreset = new Array(numb);
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
    return [...randomPreset, ...randomPreset];
}
export function randomItemElements(numb: number) {
    globalData.index = numb;
    const randomItemElement = new Array(numb);
    for (let i = 0; i < numb; i++) {
        const randomI = Math.floor(
            Math.random() * globalData.randomPreset.length
        );
        randomItemElement[i] = `
        <div data-preset="${globalData.randomPreset[randomI]}" class="game__cards-item preset__${globalData.randomPreset[randomI]}"></div>
        `;
        globalData.randomPreset.splice(randomI, 1);
    }
    return randomItemElement.join('');
}
export function startTime() {
    const timerElement = document.getElementById('timer');
    let sec = 0;
    let min = 0;
    let t: number;
    function tick() {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
            }
        }
        return;
    }

    function add() {
        if (globalData.timerCheck === 'on') {
            clearTimeout(t);
            return;
        }
        tick();
        if (timerElement) {
            timerElement.innerHTML =
                (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
            globalData.timer = timerElement.innerHTML;
            timer();
            return;
        }
    }

    function timer() {
        t = window.setTimeout(add, 1000);
        return;
    }

    timer();
}
