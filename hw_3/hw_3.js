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

console.log(`=============== Task 1 ==========================`);

{

}

console.log(`=============== Task 2 ==========================`);

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
        console.log(str);
    }

    {
        let asterix_1 = '*';
        let asterix_2 = '*';
        let space = '          ';
        for (let i = 1; i < 6; i++) {
            console.log(`${space}${asterix_1}`);
            space = space.replace('  ', ' ');
            asterix_1 = `${asterix_1} ${asterix_2}`;
        }
    }
    console.log(``)
    {

    }
}


console.log(`=============== Task 5 ==========================`);

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
        console.log(`Word '${word}' consist of ${counterVowels} vowels and ${counterConsonants} consonants`)
    }

    countVowelConsonant('case');
    countVowelConsonant('Case');
    countVowelConsonant('Check-list');
}