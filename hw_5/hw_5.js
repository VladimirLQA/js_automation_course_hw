/*
* 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом,
  чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении.
  Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.

2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
  Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];


3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
  Массив должен быть отфильтрован по возврастанию количества гласных букв в слове.

 TODO
  Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару идентичных букв на одну следующую в алфавите,
  и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
  Пример: aabc => bbc => cc => d

4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
  Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
  Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
  Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара.
  Пример:
  const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]

 5. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число)
  и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты.
  Решите эту задачу, используя эффективные методы массива.

  TODO
    Для решения задачи вам понадобится разобраться с возможность доступа к ключам объекта через квадратные скобки.
    У вас есть список неотсортированный массив заказов пицц за неделю.
    Напишите функцию, которая принимает на вход массив заказов, поле для сортировки (name или price) и направление сортировки (ASC или DESC).
    Вернуть массив, отсортированный по данному полю.
    const orders = [
    {
      name: 'Caprichosa',
      size: large,
      price: 50,
      date: 2023/02/26
    },
    {
      name: 'Diablo',
      size: medium,
      price: 35,
      date: 2023/02/23
    },
    {
      name: 'Peperoni',
      size: small,
      price: 20,
      date: 2023/02/21
    },
    {
      name: 'Hawai',
      size: large,
      price: 45,
      date: 2023/02/27
    }
    ]

6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты.
  Вернуть массив с сугубо уникальными карточками. Реализовать методом SET.
  Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.*/

const log = console.log;
const fs = require('fs')

{
    log(`================================== Task 1 =========================================`);
    {
        function numberOfOccurrencesLettersInSentence(sentence) {
            let result = [];
            let lowerCase = sentence.toLowerCase().split('');
            for (let i = 0; i < lowerCase.length; i++) {
                let char = lowerCase[i];
                if (char >= 'a' && char <= 'z') {
                    result.push(lowerCase.filter(el => el === char).length)
                } else {
                    result.push(char);
                }
            }
            return result.join('')
        }

        log(numberOfOccurrencesLettersInSentence('I am the best AQA ever!'));
    }
        log(`================ reduce =====================`);
    {
        const numberOfOccurrencesLettersInSentence = (sentence) => {
            let lowerCase = sentence.toLowerCase().split('');
            return lowerCase.reduce((result, char) => {
                if (char >= 'a' && char <= 'z') {
                    result.push(lowerCase.filter(el => el === char).length)
                } else {
                    result.push(char);
                }
                return result;
            }, []).join('')
        }

        log(numberOfOccurrencesLettersInSentence('I am the best AQA ever!'));
    }
        log(`================ map =====================`);
    {
        const numberOfOccurrencesLettersInSentence = (sentence) => {
            let lowerCase = sentence.toLowerCase().split('');
            return lowerCase.map((char) => {
                if (char >= 'a' && char <= 'z') {
                    return lowerCase.filter((el) => el === char).length;
                } else {
                    return char;
                }
            }).join('');
        };

        log(numberOfOccurrencesLettersInSentence('I am the best AQA ever!'));
    }
        log(`================== for ===================`);
    {
        function numberOfOccurrencesLettersInSentence(sentence) {
            const charCount = {};
            const transformed = [];

            for (let i = 0; i < sentence.length; i++) {
                const char = sentence[i].toLowerCase();
                if (char >= 'a' && char <= 'z') {
                    charCount[char] = (charCount[char] || 0) + 1;
                }
            }

            for (let i = 0; i < sentence.length; i++) {
                const char = sentence[i].toLowerCase();
                if (char >= 'a' && char <= 'z') {
                    const count = charCount[char];
                    transformed.push(count);
                } else {
                    transformed.push(sentence[i]);
                }
            }

            return transformed.join('');
        }

        log(numberOfOccurrencesLettersInSentence('I am the best AQA ever!'));
    }

    {
        log(`====== Notes ======`);

        function countChars_long(str) {
            let result = {};
            let chars = str.split("");
            for (let i = 0; i < chars.length; i++) {
                let count = result[chars[i]] ? result[chars[i]] : 0;
                result[chars[i]] = count + 1;
            }
            return result;
        }

        function countChars_short(str) {
            return str.split("").reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {});
        }

        log(countChars_long('aabbaccd'));
        log(countChars_short('aabbaccd'));
    }
}

{
    log(`================================== Task 2 =========================================`);

    {
        const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

        function sumAvg(arr) {
            if (!arr || !Array.isArray(arr)) return `Value not passed or not valid`;
            let sum = [...arr].reduce((sum, price) => sum + price, 0);
            let avg = sum / arr.length;
            return `Итого: ${sum}$, средняя цена товара ${Math.trunc(avg)}$`;
        }

        log(sumAvg(prices));
        log(sumAvg());
        log(sumAvg('dfd'));
    }

}

{
    log(`================================== Task 3 =========================================`);

    function countVowels(word) {
        let dictVowels = 'aieou'.split('');
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            let char = word[i].toLowerCase();
            if (dictVowels.includes(char)) count++
        }
        return count;
    }

    function sortArrWordsASCbyCountVowels(arr) {
        if (!arr || !Array.isArray(arr)) return `Check value not passed or not valid`;
        return arr.slice(0).sort((a, b) => countVowels(a) - countVowels(b));
    }

    log(sortArrWordsASCbyCountVowels());
    log(sortArrWordsASCbyCountVowels('sdfsdfsdf'));
    log(sortArrWordsASCbyCountVowels(['aieou', 'Peperoni', 'Diablo', 'Hawai', 'Caprichosa'])); // [ 'Diablo', 'Hawai', 'Peperoni', 'Caprichosa', 'aieou' ]
}

{
    log(`================================== Task 4 =========================================`);
    const testArr1 = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]];
    const testArr2 = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']], ')', ')', ')'];

    {

        function eachBracketHasPair(arr) {
            if (!arr || !Array.isArray(arr)) return `Check value not passed or not valid`;

            let flattenedArr = arr.slice(0).flat(Infinity);

            return flattenedArr.reduce((result, el) => {
                if (el === '(') result++;
                else result--;
                return result;
            }, 0) === 0;
        }

        log(eachBracketHasPair(testArr1)); // true
        log(eachBracketHasPair(testArr2)); // false
        log(eachBracketHasPair());
        log(eachBracketHasPair(572345234));
    }
        log(`=======================================`);
    {
        function eachBracketHasPair(arr) {
            if (!arr || !Array.isArray(arr)) return `Check value not passed or not valid`;

            let flattenedArr = arr.slice(0).flat(Infinity);

            let count = 0;
            for (let i = 0; i < flattenedArr.length; i++) {
                if (flattenedArr[i] === '(') {
                    count++;
                } else if (flattenedArr[i] === ')') count--;
            }
            if (count < 0) return false;
            return count === 0;
        }

        log(eachBracketHasPair(testArr1)); // true
        log(eachBracketHasPair(testArr2)); // false
        log(eachBracketHasPair());
        log(eachBracketHasPair(572345234));
    }
        log(`=======================================`);
    {
        function eachBracketHasPair(arr) {
            if (!arr || !Array.isArray(arr)) return `Check value not passed or not valid`;
            let flattenedArr = arr.slice(0).flat(Infinity);
            return flattenedArr.filter(el => el === '(').length === flattenedArr.filter(el => el === ')').length;
        }

        log(eachBracketHasPair(testArr1)); // true
        log(eachBracketHasPair(testArr2)); // false
        log(eachBracketHasPair());
        log(eachBracketHasPair(572345234));
    }
        log(`=======================================`);
    {
        function eachBracketHasPair(arr) {
            if (!arr || !Array.isArray(arr)) return `Check value not passed or not valid`;
            let flattenedArr = arr.slice(0).flat(Infinity);
            const [openBracket, closedBracket] = flattenedArr.reduce((result, el) => {
                if (el === '(') result[0]++;
                else result[1]++;
                return result;
            }, [0, 0]);
            return openBracket === closedBracket;
        }

        log(eachBracketHasPair(testArr1)); // true
        log(eachBracketHasPair(testArr2)); // false
        log(eachBracketHasPair());
        log(eachBracketHasPair(572345234));
    }
}

{
    log(`================================== Task 5 =========================================`);

    const testArr1 = [2, 1, 1, 3, 7, 8, 6, 5, 8, 4, 10, 11, 12, 13, 14];
    const testArr2 = [2, 1, 1, 3, 7, 8, 6, 5, 8, 4, 9, 10];

    {
        function findMissingNumber(arr) {
            if (!arr || !Array.isArray(arr)) return `Check value not passed or not valid`;
            let copiedArr = arr.slice(0);
            return +copiedArr.map((n, i) => copiedArr.indexOf(i) < 0 ? i : null).filter(f => f);
        }

        log(findMissingNumber(testArr1));
        log(findMissingNumber(testArr2));
        log(findMissingNumber());
        log(findMissingNumber('33452345'));

    }
        log(`===================================================`);
    {
        function findMissingNumber(arr) {
            if (!arr || !Array.isArray(arr)) return `Check value not passed or not valid`;
            const n = arr.length + 1;
            const set = new Set(arr);

            return Array.from({length: n}, (_, index) => index + 1).reduce(
                (acc, curr) => {
                    if (!set.has(curr) && acc === null) {
                        return curr;
                    }
                    return acc;
                }, null);
        }

        log(findMissingNumber(testArr1));
        log(findMissingNumber(testArr2));
        log(findMissingNumber());
        log(findMissingNumber('33452345'));
    }
        log(`===================================================`);
    {
        function findMissingNumber(arr) {
            if (!arr || !Array.isArray(arr)) return `Check value not passed or not valid`;
            const n = arr.length + 1;

            const set = new Set(arr);
            return Array.from({length: n}, (_, index) => index + 1).map((number) => {
                if (!set.has(number)) {
                    return number;
                }
            }).find((number) => number !== undefined);
        }

        log(findMissingNumber(testArr1));
        log(findMissingNumber(testArr2));
        log(findMissingNumber());
        log(findMissingNumber('33452345'));
    }
}

{
    log(`================================== Task 6 =========================================`);

    let data = fs.readFileSync('cards.json', 'utf-8');
    let parsedData = JSON.parse(data);
    {
        // won't work if obj contains a circular reference or "BigInt" value is encountered
        function removeDuplicatesInArr(arr) {
            return [...new Set(arr.map(s => JSON.stringify(s)))]
                .map(s => JSON.parse(s));
        }

        log(removeDuplicatesInArr(parsedData)); // length === 10
    }
        log(`==============================================================`);
    {
        function removeDuplicatesInArr(arr, key) {
            return arr
                .map(e => e[key]) // store values by passed key
                .map((e, i, final) => final.indexOf(e) === i && i)  // store the keys of the unique objects
                .filter(e => arr[e]).map(e => arr[e]); // eliminate the dead keys & store unique objects
        }

        log(removeDuplicatesInArr(parsedData, 'name')) // length === 10
    }
}