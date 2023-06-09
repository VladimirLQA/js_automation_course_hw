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

// @ts-ignore
const log = console.log;

{
    log(`============================ Task 1 ====================================`);

    type customObject = { [key: string]: string | number | boolean };

    const testArray: customObject[] = [
        {key1: 'string', key2: true, key3: 3},
        {key4: 'string 2 ', key5: false, key6: 6.1},
        {key7: 'string 3 ', key8: false, key9: 10},
    ]

    const getAnObject = (arrOfObjects: customObject[]): customObject => {
        const reversedKeysInObjects = arrOfObjects.map(obj => {
            return Object.keys(obj).reverse().reduce((reversedObj: customObject, key: string) => {
                reversedObj[key] = obj[key];
                return reversedObj;
            }, {})
        });

        return reversedKeysInObjects.reduce((result, obj) => {
            return {...obj, ...result};
        }, {});
    }

    log(getAnObject(testArray))

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
    log(`============================ Task 2 ====================================`);

    interface IAddress {
        city: string;
        street: string;
        house: number;
        flat?: number;
    }

    interface ICustomer {
        name: string;
        surname: string;
        address: IAddress;

    }

    enum Sauces {
        BBQ = `BBQ`,
        CHEESE = `cheese`,
        KETCHUP = `ketchup`,
        GARLIC = `garlic`,
    }

    enum Pizzas {
        MARGHERITA = "Margherita",
        PEPPERONI = "Pepperoni",
        SUPREME = "Supreme",
        VEGGIE = "Veggie"
    }

    enum PizzaSize {
        LARGE = `LARGE`,
        SMALL = `SMALL`,
        MEDIUM = `MEDIUM`,
    }

    enum Extras {
        MOZZARELLA = `mozzarella`,
        BACON = `bacon`,
        ONION = `onion`,
        BEEF_MINCE = `beef mince`,
        CAPSICUM = `capsicum`,
        PEPPERONI = `pepperoni`,
        OLIVES = `olives`,
        MUSHROOM = `mushroom`,
        HAM = `ham`,
        PINEAPPLE = `pineapple`,
    }

    interface IPizza {
        name: Pizzas;
        size: PizzaSize;
        extras: Extras[];
        cost: number;

    }

    interface IOrdered {
        pizzas: IPizza[];
        sauces?: Sauces[];
    }

    enum DeliveryCondition {
        ORDERED = "Ordered",
        IN_PROGRESS = "In Progress",
        OUT_FOR_DELIVERY = "Out for Delivery",
        DELIVERED = "Delivered",
        CANCELED = "Canceled"
    }

    interface IDelivery {
        condition: DeliveryCondition;
        address: IAddress;
        date: Date;
        time: string;
    }

    enum PaymentCondition {
        CARD = `card`,
        CASH = `cash`
    }

    interface IOrder {
        customer: ICustomer;
        ordered: IOrdered;
        delivery: IDelivery;
        paymentCondition: PaymentCondition;
        isPaid: boolean;
        totalPrice: number;
    }
}

{
    log(`============================ Task 3 ====================================`);
    type ResultObject = { [key: string]: number };

    const testString: string = `I am the best AQA ever!`;

    const counter = (string: string): ResultObject => {
        return [...string.toLowerCase().split('')].reduce((r: ResultObject, k) => {
            r[k] = (r[k] || 0) + 1;
            return r;
        }, {});
    }

    log(counter(testString));
}

{
    log(`============================ Task 4 ====================================`);

    type Callback = (element: number, index: number, array: number[]) => boolean;
    type FilterFunc = (array: number[], callback: Callback) => number[] | [];

    const numbers = [1, -5, 2, 3, 4, 133];

    const filterFunc: FilterFunc = (array, callback) => {
        const resultArray: number[] = [];

        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], i, array)) {
                resultArray.push(array[i]);
            }
        }
        return resultArray;
    }

    log(filterFunc(numbers, (n) => n > 3)); // [4, 133]
    log(filterFunc(numbers, (n) => n % 2 == 0)); // [2, 4]
    log(filterFunc(numbers, (n) => n < -5)); // []

}