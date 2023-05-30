/*
Task 1. Работа с переменными:
    1. Создать переменную “item_1”
    2. Присвоить переменной item_1 цифру 5.
    3. Вывести в консоль item_1.
    4. Создать переменную “item_2”
    5. Присвоить переменной item_2 цифру 3.
    6. Вывести в консоль item_2.
    7. Создать переменную “item_3”
    8. Присвоить переменной item_3 сложение item_1 и item_2.
    9. Вывести в консоль item_3.
    10. Создать переменную “item_4”
    11. Присвоить переменной item_4 строку “Yolochka”
    12. Вывести в консоль item_4.
    13. Вывести в консоль сложение item_3 и item_4.
    14. Вывести в консоль умножение item_3 и item_4.
    15. Создать переменную “item_5”
    16. Присвоить переменной item_5 переменную item_3
    17. Создать переменную item_6.
    18. Создать переменную item_6_type
    19. Присвоить переменной item_6 значение 15
    20. Присвоить переменной item_6_type тип переменной item_6
    21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——
    22. Создать переменную item_7 и в ней преобразовать item_6 в String.
    23. Создать переменную item_7_type
    24. Присвоить переменной item_7_type тип переменной item_7
    25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——

Task2. Решить квадратные уравнения. Переменные называть по правилам.
Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"
1.  x2 - 6x + 9 = 0. - один корень
2.  x2 - 4x - 5 = 0. - два корня

Task3. Напишите программу, которая принимает целое положительное число n, 1 <= n <= 9, и выводит сумму равную
n + nn + nnn, где n не перемножаются, а конкатенируются
*/

console.log(`==================== Task 1 ===========================`);

{
    // 1-3
    let item_1 = 5;
    console.log(item_1);

    // 4-6
    let item_2 = 3;
    console.log(item_2);

    // 7-9
    let item_3 = item_1 + item_2;
    console.log(item_3);

    // 10-12
    let item_4 = "Yolochka";
    console.log(item_4);

    // 13
    console.log(item_3 + item_4);

    //14
    console.log(item_3 * item_4);

    // 15-16
    let item_5 = item_3;

    // 17-19
    let item_6 = 15;

    // 18-20
    let item_6_type = typeof(item_6);

    // 21
    let delimiter = "|";
    console.log("Item_6 ==", typeof(item_6), delimiter, "Item_6_type ==", item_6_type);

    // 22
    let item_7 = item_6 + "";

    // 23-25
    let item_7_type = typeof(item_7);
    let delimiter_1 = "|";
    console.log("Item_7 ==", typeof(item_7), delimiter_1, "Item_7_type ==", item_7_type);
}

console.log(`==================== Task 2 ===========================`);

{
    console.log(`================== Task 2.1 > x2 - 6x + 9 = 0. - один корень < ===========================`);
    {
        // D = b^2 - 4*a*c
        let a = 1;
        let b = -6;
        let c = 9;
        let discriminant = b ** 2 - 4 * a * c; // 0
        let result = (-b + Math.sqrt(discriminant)) / 2 * a;
        console.log(`Solution to the first equation: "${result}"`);
    }

    console.log(`================== Task 2.2 > x2 - 4x - 5 = 0. - два корня < ===========================`);
    {
        let a = 1;
        let b = -4;
        let c = -5;
        let discriminant = b ** 2 - 4 * a * c; // 0
        let result_1 = (-b + Math.sqrt(discriminant)) / 2 * a;
        let result_2 = (-b - Math.sqrt(discriminant)) / 2 * a;
        console.log(`Solution to the second equation: "${result_1}", "${result_2}"`);
    }
}

console.log(`==================== Task 3 ===========================`);

{
    const sum = (num) => {
        if (!isNaN(num)) {
            if ( 1 <= num && num <= 9 ) {
                let twoDigitNum = ''+num + num;
                let threeDigitNum = ''+num + num + num;
                return `${num} + ${twoDigitNum} + ${threeDigitNum} === ${+num + +twoDigitNum + +threeDigitNum}`;
            } else return (`Entered value (n) doesn't meet conditions 1 <= n <= 9 `);
        } else return (`Entered value is not a number`);
    }
    console.log(sum(4));
    console.log(sum(-1));
    console.log(sum('4'));
    console.log(sum('aaa'));
    console.log(sum());
}
