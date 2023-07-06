/*1. Создать функцию, принимающую на вход массив объектов, у которых ключ ТОЛЬКО string, а значения могут быть string, number, boolean.
    Вернуть результирующий объект, хранящий в себе все переданные в функцию объекты справа на лево

2. Представьте, что вам нужно отправлять на сервер запрос на создание заказа, и получать ответ.
  И функция делающая это представим, что уже есть! Осталось лишь затипизировать сам объект который вы шлёте, и какой ожидаете,
  без реализации функции. Создайте алиасы типов для тела запроса, а также для его ответа.
  В ответе возвращаются отправленные данные + createdAt и id. Вы не должны заниматься самокопированием,
  т.е. используйте где надо объединения, исключения из типа, енамы и так далее.
  Названия пицц, соусов, видов получения заказа и типов оплаты должны быть фиксированными, а не любыми.
  Подумайте, можно ли в данном алиасе выделить части, которые можно вынести в отдельные алиасы.
  Подумайте также, все ли поля должны быть обязательными.
  Ниже представлен пример запроса:
  const order = {
    customer: {
      name: "Anatoly",
      surname: "Karpocich",
      address: {
        city: "Minsk",
        street: "Narodnaja",
        house: 10,
        flat: 99,
      },
    },
    ordered: {
      pizzas: [
        {
          name: "peperoni",
          size: "large",
          extras: ["cheese", "bacon"],
          cost: 100,
        },
        {
          name: "diablo",
          size: "medium",
          extras: ["halapenio"],
          cost: 70,
        },
        {
          name: "hawai",
          size: "small",
          extras: [],
          cost: 50,
        },
      ],
      sauses: ["BBQ", "cheese", "1000 islands"],
    },
    delivery: {
      condition: "DELIVERY",
      address: {
        city: "Minsk",
        street: "Narodnaja",
        house: 10,
        flat: 99,
      },
      date: "2023/07/22",
      time: "19:00",
    },
    paymentCondition: "card",
    isPaid: true,
    totalPrice: 250,
  };

3. Напишите функцию, которая принимает строку и возвращает объект со счетчиком того, сколько раз каждая буква встречается в строке.
  Затипизируйте так, чтобы функция принимала только строковые входные данные и чтобы выходной объект имел строковые ключи
  (представляющие каждую букву) и числовые значения (представляющие количество этой буквы).

4.  Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат,
    который будет использоваться для проверки каждого числа на соответствие требованиям.
    Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов.
    Пример функции:
    const numbers = [1, -5, 2, 3, 4, 133];
    filter(numbers, (n) => n > 3); // [4, 133]
    filter(numbers, (n) => n % 2 == 0); // [2, 4]
    Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// @ts-ignore
var log = console.log;
{
    log("============================ Task 1 ====================================");
    var testArray = [
        { key1: 'string', key2: true, key3: 3 },
        { key4: 'string 2 ', key5: false, key6: 6.1 },
    ];
    var getAnObject = function (arrOfObjects) {
        // const reversedKeysInObjects =  arrOfObjects.map(obj => {
        //     return Object.keys(obj).reduce((reversedObj: customObject, key: string) => {
        //         reversedObj[key] = obj[key];
        //         return reversedObj;
        //     }, {})
        // });
        return arrOfObjects.reduce(function (result, obj) {
            return __assign(__assign({}, obj), result);
        }, {});
    };
    log(getAnObject(testArray));
}
{
    log("============================ Task 2 ====================================");
}
{
    log("============================ Task 3 ====================================");
}
{
    log("============================ Task 4 ====================================");
}
