/*
* Имеется массив объектов (ниже). Ваше задание:
1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта
2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта
3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${ket}, value = ${value}`.
   Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)
4. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
   Перебирать каждый объект циклом for..in
5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида:
   `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

 const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];*/

const log = console.log;

const characters = [
    {'name': 'Barney', 'age': 36},
    {'name': 'Fred', 'age': 40},
    {'name': 'Jack', 'age': 50},
];

{
    log(`======================== #1 ===================================`)
    {
        const logKeys = (arr) => {
            return arr.forEach((el, i) => {
                if (typeof el === 'object' && !Array.isArray(el) && el !== null) log(`Object № ${i + 1} in array, object keys are >> ${Object.keys(el)} <<`);
                else log(`Array element is not an object`);
            });
        }

        logKeys(characters);
    }
}

{
    log(`======================== #2 ===================================`)
    {
        const logValues = (arr) => {
            return arr.forEach((el, i) => {
                if (typeof el === 'object' && !Array.isArray(el) && el !== null) log(`Object № ${i + 1} in array, object values are >> ${Object.values(el)} <<`);
                else log(`Array element is not an object`);
            });
        }

        logValues(characters);
    }
}

{
    log(`======================== #3-4 ===================================`)
    {
        log(`>>>>> For... of <<<<`);
        const key_value_forOf = (arr) => {
            return arr.forEach((el, i) => {
                for(let [key, value] of Object.entries(el)) {
                    log(`key = ${key}, value = ${value}`);
                }
            })
        }

        key_value_forOf(characters);
    }

    {
        log(`>>>>>>> forEach <<<<<<<`);
        const key_value_forOf = (arr) => {
            return arr.forEach((el, i) => {
                Object.entries(el).forEach(([key, value]) => {
                    log(`key = ${key}, value = ${value}`);
                })
            })
        }

        key_value_forOf(characters);

    }
}

{
    log(`======================== #5  ===================================`)
    {

    }
}