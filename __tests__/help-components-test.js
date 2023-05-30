import { it, expect, describe } from '@jest/globals';
import {
    randomSuitAndRank,
    randomItemElements,
} from '../components/help-components';
import { stringify } from 'querystring';

describe('Функции внутри модуля help-components', () => {
    it('Создает массив с рандомным наполнением на основе двух других и дублирует его, проверяем на длину созданного массива', () => {
        const number = 3;
        let randomArr = new Array(number);

        randomArr = randomSuitAndRank(number);

        expect(randomArr).toHaveLength(number + number);
    });

    it('Создает массив с HTML разметкой кнопок, проверяем на String', () => {
        const number = 6;
        let randomArr = new Array(number);

        randomArr = randomItemElements(number);

        expect(randomArr).toEqual(expect.any(String));
    });
});
