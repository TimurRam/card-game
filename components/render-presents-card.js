import { renderDifficulty } from "./render-difficulty.js";
import { appElement, globalData } from "../index.js";

export function renderPresentsCard() {
  switch (globalData.difficulty) {
    case "easy":
      appElement.innerHTML = `
            <h1>ЗДЕСЬ БУДЕТ СРЕДНИЙ УРОВЕНЬ СЛОЖНОСТИ</h1>
            <button class="difficulty__button_back">Назад</button>
            `;
      break;
    case "medium":
      appElement.innerHTML = `
            <h1>ЗДЕСЬ БУДЕТ СРЕДНИЙ УРОВЕНЬ СЛОЖНОСТИ</h1>
            <button class="difficulty__button_back">Назад</button>
            `;
      break;
    case "hard":
      appElement.innerHTML = `
            <h1>ЗДЕСЬ БУДЕТ ВЫСОКИЙ УРОВЕНЬ СЛОЖНОСТИ</h1>
            <button class="difficulty__button_back">Назад</button>
            `;
      break;
    default:
      break;
  }
  document
    .querySelector(".difficulty__button_back")
    .addEventListener("click", () => {
      renderDifficulty();
    });
}
