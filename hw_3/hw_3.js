/*
* 1. Написать скрипт, переводящий количество байт в нужные единицы
  bytes => kB Mb Gb Tb
  16 565 846 bytes (16,6 Mb)

  1 Kb = 1024 byte
  1 Mb = 1024 Kb
  1 Gb = 1024 Mb
  1 Tb = 1024 Gb

  // Пример: ~ 1000
  4 548 = 4,5 Kb (Real 4,4 Kb)
  454 548 = 454,5 Kb
  1 454 548 = 1,5 Mb

  Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)

Сделать из "*" равнобедренный треугольник и ромб

3. Вам нужно вывести в консоль числа от 1 до 100.
Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.

4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре,
  у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

5*. Создать программу, которая будет принимать на вход СЛОВО (одно), и возвращать количество гласных и согласных букв в этом слове.
  Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

6**. Написать программу, которая видоизменяет принимаемое слово шифром ЦЕЗАРЯ (Шифр Цезаря ) со сдвигом на 1 в любую из сторон
(в фунцию кроме слова передает 1 или -1). Пример: caesar('AbC, -1) => ‘ZaB’*/

const log = console.log;
log(`=============== Task 1 ==========================`);

{
    function convertFromBytes(bytes) {
        let kilobyte = 1024;
        let megabyte = kilobyte * 1024;
        let gigabyte = megabyte * 1024;
        let terabyte = gigabyte * 1024;

        switch (true) {
            case(bytes >= terabyte):
                log(`${(bytes / terabyte).toFixed(1)} Tb`);
                break;
            case(bytes >= gigabyte):
                log(`${(bytes / gigabyte).toFixed(1)} Gb`);
                break;
            case(bytes >= megabyte):
                log(`${(bytes / megabyte).toFixed(1)} Mb`);
                break;
            case(bytes >= kilobyte):
                log(`${(bytes / kilobyte).toFixed(1)} Kb`);
                break;
            default: log(`${bytes} bytes`)
                break;
        }
    }
    convertFromBytes(4548);
    convertFromBytes(454548);
    convertFromBytes(1454548);
}

log(`=============== Task 2 ==========================`);

{
    {
        let smile = '^)';
        let str = '';
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j <= i; j++) {
                str += smile;
            }
            str += '\n';
        }
        log(str);
    }

    {
        let asterix_1 = '*';
        let asterix_2 = '*';
        let space = '          ';
        for (let i = 1; i < 6; i++) {
            log(`${space}${asterix_1}`);
            space = space.replace('  ', ' ');
            asterix_1 = `${asterix_1} ${asterix_2}`;
        }
    }
    log(``)
    {

    }
}

log(`=============== Task 3 ==========================`);

{
    function divisible() {

        for ( let i = 1; i < 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) log(`${i} - divisible by 3 and 5`)
            else if (i % 5 === 0) log(`${i} - divisible by 5`)
            else if (i % 3 === 0) log(`${i} - divisible by 3`)
        }

        // for ( let i = 1; i <= 100; i++) {
        //     switch (i) {
        //         case (i % 3 === 0 && i % 5 === 0):
        //             log(`${i} - divisible by 3 and 5`);
        //             break;
        //         case (i % 3 === 0):
        //             log(`${i} - divisible by 3`);
        //             break;
        //         case (i % 5 === 0):
        //             log(`${i} - divisible by 5`);
        //             break;
        //         default: break;
        //     }
        // }
    }

    divisible();
}

log(`=============== Task 4 ==========================`);

{
    {
        function toCamelCase(sentence) {
            let words = sentence.toLowerCase().split(' ');
            return words.map(function (word, index) {
                if (index === 0) {
                    return word;
                } else {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }
            }).join('');
        }

        log(toCamelCase("I am super engineer"));
    }

    {
        function toCamelCase(sentence) {
            let words = sentence.toLowerCase().split(' ');
            for (let i = 1; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            return words.join('');
        }

        log(toCamelCase("I am super engineer"));
    }

    {
        function toCamelCase(sentence) {
            let resultSentence = '';
            let nextChar = false;

            for (let i = 0; i < sentence.length; i++) {
                let currentChar = sentence[i];

                if (currentChar === ' ') {
                    nextChar = true;
                } else {
                    if (nextChar) {
                        resultSentence += currentChar.toUpperCase();
                        nextChar = false;
                    } else {
                        resultSentence += currentChar.toLowerCase();
                    }
                }
            }
            return resultSentence;
        }

        log(toCamelCase("I am super engineer"));
    }
}

log(`=============== Task 5 ==========================`);

{
    function countVowelConsonant(word) {
        const vowels = 'aeiouy'.split('');
        const consonants = 'qwrtpsdfghjklmnbvcxz'.split('');

        let counterVowels = 0;
        let counterConsonants = 0;
        for (const char of word.toLowerCase()) {
            if (vowels.includes(char)) counterVowels++;
            else if (consonants.includes(char)) counterConsonants++;
        }
        log(`Word '${word}' consist of ${counterVowels} vowels and ${counterConsonants} consonants`)
    }

    countVowelConsonant('case');
    countVowelConsonant('Case');
    countVowelConsonant('Check-list');
}