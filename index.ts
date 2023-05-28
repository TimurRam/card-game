import { renderDifficulty } from './components/render-difficulty';
import './style.css';
interface Card  {
    appElement: HTMLElement | null;
    suit: Array<string>;
    rank: Array<string>;
    randomPreset: Array<string>;
    difficulty: string;
    selectedCard: string | undefined;
    index: Number;
    timer: String;
    timerCheck: string;
};
export const globalData: Card = {
    appElement: document.querySelector('.container'),
    suit: ['spades', 'hearts', 'diamonds', 'clubs'],
    rank: ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'],
    randomPreset: new Array<string>(),
    difficulty: '',
    selectedCard: 'clear',
    index: 0,
    timer: '',
    timerCheck: 'on',
};
renderDifficulty();
