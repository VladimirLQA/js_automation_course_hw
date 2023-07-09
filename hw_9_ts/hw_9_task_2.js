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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// @ts-ignore
var log = console.log;
{
    log("============================ Task 1 ====================================");
    var testArray = [
        { key1: 'string', key2: true, key3: 3 },
        { key4: 'string 2 ', key5: false, key6: 6.1 },
        { key7: 'string 3 ', key8: false, key9: 10 },
    ];
    var getAnObject = function (arrOfObjects) {
        var reversedKeysInObjects = arrOfObjects.map(function (obj) {
            return Object.keys(obj).reverse().reduce(function (reversedObj, key) {
                reversedObj[key] = obj[key];
                return reversedObj;
            }, {});
        });
        return reversedKeysInObjects.reduce(function (result, obj) {
            return __assign(__assign({}, obj), result);
        }, {});
    };
    log(getAnObject(testArray));
    // {
    //     const reverseObjKeysOrder = (arrOfObjects: customObject[]): customObject[] => {
    //         const reversedKeysInObjects = arrOfObjects.map(obj => {
    //             const reversedObj: customObject = {};
    //             Object.keys(obj).reverse().forEach(key => {
    //                 reversedObj[key] = obj[key];
    //             });
    //             return reversedObj;
    //         });
    //         return reversedKeysInObjects;
    //     }
    //
    //     log(getAnObject(testArray));
    // }
}
{
    log("============================ Task 2 ====================================");
    var Sauces = void 0;
    (function (Sauces) {
        Sauces["BBQ"] = "BBQ";
        Sauces["CHEESE"] = "cheese";
        Sauces["KETCHUP"] = "ketchup";
        Sauces["GARLIC"] = "garlic";
    })(Sauces || (Sauces = {}));
    var Pizzas = void 0;
    (function (Pizzas) {
        Pizzas["MARGHERITA"] = "Margherita";
        Pizzas["PEPPERONI"] = "Pepperoni";
        Pizzas["SUPREME"] = "Supreme";
        Pizzas["VEGGIE"] = "Veggie";
    })(Pizzas || (Pizzas = {}));
    var PizzaSize = void 0;
    (function (PizzaSize) {
        PizzaSize["LARGE"] = "LARGE";
        PizzaSize["SMALL"] = "SMALL";
        PizzaSize["MEDIUM"] = "MEDIUM";
    })(PizzaSize || (PizzaSize = {}));
    var Extras = void 0;
    (function (Extras) {
        Extras["MOZZARELLA"] = "mozzarella";
        Extras["BACON"] = "bacon";
        Extras["ONION"] = "onion";
        Extras["BEEF_MINCE"] = "beef mince";
        Extras["CAPSICUM"] = "capsicum";
        Extras["PEPPERONI"] = "pepperoni";
        Extras["OLIVES"] = "olives";
        Extras["MUSHROOM"] = "mushroom";
        Extras["HAM"] = "ham";
        Extras["PINEAPPLE"] = "pineapple";
    })(Extras || (Extras = {}));
    var DeliveryCondition = void 0;
    (function (DeliveryCondition) {
        DeliveryCondition["ORDERED"] = "Ordered";
        DeliveryCondition["IN_PROGRESS"] = "In Progress";
        DeliveryCondition["OUT_FOR_DELIVERY"] = "Out for Delivery";
        DeliveryCondition["DELIVERED"] = "Delivered";
        DeliveryCondition["CANCELED"] = "Canceled";
    })(DeliveryCondition || (DeliveryCondition = {}));
    var PaymentCondition = void 0;
    (function (PaymentCondition) {
        PaymentCondition["CARD"] = "card";
        PaymentCondition["CASH"] = "cash";
    })(PaymentCondition || (PaymentCondition = {}));
}
{
    log("============================ Task 3 ====================================");
    var testString = "I am the best AQA ever!";
    var counter = function (string) {
        return __spreadArray([], string.toLowerCase().split(''), true).reduce(function (r, k) {
            r[k] = (r[k] || 0) + 1;
            return r;
        }, {});
    };
    log(counter(testString));
}
{
    log("============================ Task 4 ====================================");
    var numbers = [1, -5, 2, 3, 4, 133];
    var filterFunc = function (array, callback) {
        var resultArray = [];
        for (var i = 0; i < array.length; i++) {
            if (callback(array[i], i, array)) {
                resultArray.push(array[i]);
            }
        }
        return resultArray;
    };
    log(filterFunc(numbers, function (n) { return n > 3; })); // [4, 133]
    log(filterFunc(numbers, function (n) { return n % 2 == 0; })); // [2, 4]
    log(filterFunc(numbers, function (n) { return n < -5; })); // []
}
