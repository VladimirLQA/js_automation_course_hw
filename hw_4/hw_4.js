/*
* 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив)
  и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
  Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']

2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв.
  Если таких слов несколько - выводит их все.

3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры.
  Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9.
  После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

6**. Написать функцию, принимающую на вход неограниченное количество аргументов. Вернуть сумму всех цифр, попавших на вход функции.
  Например:
  function getSumm(1,2,'as', 'aaa4', 0.1, -5) => 2.1*/

const log = console.log;

{
    log(`================================== Task 1 ==============================`);

    {
        const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
        const myPizzas1 = ['Hello', 'Peperoni', 'new', 'Farma', 'hawai'];
        const myPizzas2 = ['Peperoni', 'Caprichosa', 'Diablo'];

        function checkCompetitorPizza(arr) {
            if (!arr) return `Check value not passed`;
            if (!Array.isArray(arr)) return `Check value must be an array`;
            let resultArr = [];
            if (competitorPizzas.every(v => arr.includes(v))) return null;
            for (let i = 0; i < arr.length; i++) {
                if (!competitorPizzas.includes(arr[i])) resultArr.push(arr[i])
            }
            return resultArr;
        }

        log(checkCompetitorPizza(myPizzas1));  // [ 'Hello', 'new', 'Farma' ]
        log(checkCompetitorPizza(myPizzas2)); // []
        log(checkCompetitorPizza()); // Check value not passed
        log(checkCompetitorPizza(2)); // Check value must be an array

    }
    log(`====================================================`);
    {
        const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
        const myPizzas1 = ['Hello', 'Peperoni', 'new', 'Farma', 'hawai'];
        const myPizzas2 = ['Peperoni', 'Caprichosa', 'Diablo'];

        function checkCompetitorPizza(arr) {
            if (!arr) return `Check value not passed`;
            if (!Array.isArray(arr)) return `Check value must be an array`;
            if (!competitorPizzas.every(v => arr.includes(v))) {
                return arr.filter(el => !competitorPizzas.includes(el));
            } else return null;
        }

        log(checkCompetitorPizza(myPizzas1));  // [ 'Hello', 'new', 'Farma' ]
        log(checkCompetitorPizza(myPizzas2)); // []
        log(checkCompetitorPizza()); // Check value not passed
        log(checkCompetitorPizza(2)); // Check value must be an array
    }
}

{
    log(`================================== Task 2 ==============================`);

    {
        // sentence -> Hello my dear son hello => hello hello
        // sentence -> abb bbsc an hhherop => hhherop

        function longestWord(string) {
            if (!string || typeof string !== 'string') return `Check string not passed or passed value not valid`;
            let checkLength = 0;
            return string.split(' ').reduce((result, word) => {
                if (checkLength < word.length) {
                    checkLength = word.length;
                    result = [word];
                } else if (checkLength === word.length) {
                    result.push(word);
                }
                return result
            }, []).join(' ');
        }

        log(longestWord('Hello my dear son hello')); // hello hello
        log(longestWord('abb bbsc an hhherop')); // hhherop
        log(longestWord(''));
        log(longestWord(123123));
    }
}

{
    log(`================================== Task 3 ==============================`);

    {
        function uniqueArray(arr) {
            let resultArray = [];
            return arr.filter(el => {
                if (!resultArray.includes(el) && typeof el === 'number') return resultArray.push(el)
            });
        }

        log(uniqueArray([1, 2, 3, 4, 4, 4, 5, 11])); //  [ 1, 2, 3, 4, 5, 11 ]
        log(uniqueArray([1, 2, 3, 4, 4, 4, 5, {}, '123'])); //  [ 1, 2, 3, 4, 5 ]
    }
}

{
    log(`================================== Task 4 ==============================`);

    {
        function isPalindrom(word) {
            if (!word) return `Check string not passed`;
            if (typeof word !== 'string') return `Passed value not valid`;

            word = word.toLowerCase();
            return word === word.toLowerCase().split('').reduceRight((resultString, item) => {
                resultString = resultString + item;
                return resultString;
            }, '');
        }

        log(isPalindrom('Radar')); // true
        log(isPalindrom('HElLo')); // false
        log(isPalindrom()); // error
        log(isPalindrom(121312)); // error
    }


    log(`==========================================================`);

    {
        function isPalindrom(word) {
            if (!word) return `Check string not passed`;
            if (typeof word !== 'string') return `Passed value not valid`;
            word = word.toLowerCase();
            for (let i = 0, j = word.length - 1; i < word.length, j >= 0; i++, j--) {
                if (word[i] !== word[j]) {
                    return false;
                }
            }
            return true;
        }

        log(isPalindrom('Radar')); // true
        log(isPalindrom('HElLo')); // false
        log(isPalindrom()); // error
        log(isPalindrom(121312)); // error

    }
}

{
    log(`================================== Task 5 ==============================`);

    {
        function summ(number) {
            if (!number) return `Check number not passed`;
            if (typeof number !== 'number') return `Passed value not valid`;
            let sum = number;
            while (sum > 9) {
                sum = sum.toString().split('').reduce((prev, current) => +prev + +current)
            }
            return sum;
        }

        log(summ(19)); // 1
        log(summ(3)); // 3
        log(summ(327)); // 3
        log(summ(98993)); // 2
        log(summ());
        log(summ('sdfd'));
    }

    log(`=============================================`);

    {
        // a eto ochen' krutoe reshenie, no ne moe :)
        function digitalRoot(n) {
            return --n % 9 + 1;
        }
        log(digitalRoot(19)); // 1
        log(digitalRoot(3)); // 3
        log(digitalRoot(327)); // 3
        log(digitalRoot(98993)); // 2
    }
}

{
    log(`================================== Task 6 ==============================`);

}