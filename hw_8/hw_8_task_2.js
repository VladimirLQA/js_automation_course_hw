/*Task 2
1. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел.
  Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b.
  Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке.
  Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами,
  и обработайте любые ошибки с помощью метода .catch().

2. Создайте функцию retryPromise, которая принимает функцию и максимальное количество повторных попыток в качестве входных данных.
   Функция должна выполнить предоставленную функцию и вернуть обещание. Если обещание отклонено, оно должно повторять выполнение функции до тех пор,
   пока оно не будет зарезолвлено или не будет достигнуто   максимальное количество попыток. Задержка каждой попытки на 1 секунду.
   В качестве коллбэка напишите функцию getNumber, возвращаующую новый промис, в котором создается рандомное число от 1 до 10.
   Если число больше 5 - промис резолвается, если меньше либо равно - реджектается.
   Пример в консоли при отработке функции до Success с 3мя ретраями:
    First attempt
    Retrying 1 time
    Retrying 2 time
    Retrying 3 time
    Success

3. Создайте конвертер валют, используя Exchange Rates API. (зарегистрироваться и получить токен) Данные с сайта брать запросом используя fetch().
  Пользователь должен иметь возможность передавать валюту и сумму денег в функцию и получать сумму денег в желаемой валюте на выходе.
  Например: currencyConvertor(USD, 40, EUR) ⇒ 35 EUR
  Решить с помощью в 2 вариантах: с  .then() и с использованием async/await*/


{
    // #1
    const promiseSumOfTwo = (a, b) => {
        if (isNaN(a) || isNaN(b) || typeof a !== "number" || typeof b !== "number") {
            return Promise.reject(new Error(`Passed argument not a number`));
        } else {
            return Promise.resolve(a + b);
        }
    }

    promiseSumOfTwo(1, 2)
        .then((result => console.log(result)))
        .catch(error => console.log(error));

    promiseSumOfTwo(1, "2")
        .then((result => console.log(result)))
        .catch(error => console.log(error));

    promiseSumOfTwo(1)
        .then((result => console.log(result)))
        .catch(error => console.log(error));
}

{
    // #2
    {
        const getNumber = () => new Promise((resolve, reject) => {
            let randomNumber = Math.floor(Math.random() * 10) + 1;
            if (randomNumber > 5) resolve(randomNumber);
            else reject(new Error(`Number is less than or equal to 5`));
        });

        const retryPromise = (fn, maxRetries) => {
            return new Promise((resolve, reject) => {
                const retry = (attempt) => {
                    fn().then(resolve)
                        .catch(error => {
                            if (attempt < maxRetries) {
                                console.log(`Retrying ${attempt} time`);
                                setTimeout(() => retry(attempt + 1), 1000);
                            } else reject(error);

                        });
                };

                console.log("First attempt");
                retry(1);
            });
        }

        retryPromise(getNumber, 5)
            .then(result => console.log("Success", result))
            .catch(error => console.error(error));
    }

    {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        const getNumber = () => new Promise((resolve, reject) => {
                const randomValue = Math.floor(Math.random() * 10) + 1;
                if (randomValue > 5) resolve(randomValue);
                else reject(new Error("Number is less than or equal to 5"));
            });

        const retryPromise = async (callback, maxRetries) => {
            let retries = 0;
            while (retries < maxRetries) {
                try {
                    return await callback();
                } catch (error) {
                    retries++;
                    console.log(`Retrying ${retries} time`);
                    await delay(1000);
                }
            }
            throw new Error("Max retries reached");
        }

        console.log("First attempt");
        retryPromise(getNumber, 5)
            .then(result => console.log("Success", result))
            .catch(error => console.error(error));
    }
}