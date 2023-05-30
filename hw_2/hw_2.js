/*
* Task 1. Работа с оператором IF:

  1. Создать переменную “age” и присвоить ей значение 10

  2. Создать переменную “age_2” и присвоить ей значение 18

  3. Создать переменную “age_3” и присвоить ей значение 60

  4. Создать if в котором будите проверять значение переменной age_1

    Если “age” < age_2, вывести в консоль “You don’t have access cause your age is ” + “age” + “ It’s less then ”

    Если “age” >=  age_2 и “age” <  age_3, вывести в консоль “Welcome  !”

    Если “age”  > age_3, вывести в консоль “Keep calm and look Culture channel”.

    Иначе выводите “Technical work”.

Task 2*. Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных.
  И если он не number - кидалась ошибка в консоль.
  Вывести в консоль результат работы функции с возрастами 17, 18, 61, "2", "aaa"

Task 3*. Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось,
  преобразовываясь в number


Task 4*. Преобразовать Task 3* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert*/

console.log(`======================= Task 1 =====================`);

{
    // Task 1. Работа с оператором IF
    let age = 10;
    let age_2 = 18;
    let age_3 = 60;

    if (age < age_2) {
        console.log(`You don’t have access cause your age is ${age}. It’s less then ${age_2}`);
    } else if (age >= age_2 && age < age_3) {
        console.log(`Welcome !`);
    } else if (age > age_3) {
        console.log(`Keep calm and look Culture channel`);
    } else console.log(`Technical work”`);

}

console.log(`======================= Task 2 =====================`);

{
    // Task 2

    let age_2 = 18;
    let age_3 = 60;

    function checkAge(number) {
        if (number && !isNaN(number)) {  // Number.isInteger(number)
            if (number < age_2) {
                console.log(`You don’t have access cause your age is ${number}. It’s less then ${age_2}`);
            } else if (number >= age_2 && number < age_3) {
                console.log(`Welcome !`);
            } else if (number > age_3) {
                console.log(`Keep calm and look Culture channel`);
            } else console.log(`Technical work”`);
        } else console.error(`Entered value is not a number`);
    }

    checkAge(17);
    checkAge(18);
    checkAge(61);
    checkAge('2');
    checkAge('aaaa');
    checkAge(0);
    checkAge();
}

console.log(`======================= Task 3 =====================`);

{
    let age_2 = 18;
    let age_3 = 60;

    function checkAge(number) {
        if (number && !isNaN(number)) {
            if (number < age_2) {
                console.log(`You don’t have access cause your age is ${number}. It’s less then ${age_2}`);
            } else if (number >= age_2 && number < age_3) {
                console.log(`Welcome !`);
            } else if (number > age_3) {
                console.log(`Keep calm and look Culture channel`);
            } else console.log(`Technical work”`);
        } else console.error(`Entered value is not a number`);
    }

    checkAge(17);
    checkAge(18);
    checkAge(61);
    checkAge('2');
    checkAge('aaaa');
    checkAge(0);
    checkAge();
}

console.log(`======================= Task 4 =====================`);

{
    let age_2 = 18;
    let age_3 = 60;

    function checkAge(number) {
        if (number && !isNaN(number)) {
            if (number < age_2) {
                alert(`You don’t have access cause your age is ${number}. It’s less then ${age_2}`);
            } else if (number >= age_2 && number < age_3) {
                alert(`Welcome !`);
            } else if (number > age_3) {
                alert(`Keep calm and look Culture channel`);
            } else alert(`Technical work”`);
        } else alert(`Entered value is not a number`);
    }

    checkAge(prompt("Enter your age"));
}
