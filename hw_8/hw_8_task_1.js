/*Task 1.
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
  Обработайте промис методом .catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса*/

{
        // #1
    const delayTwoSeconds = (clback) => {
        setTimeout(clback, 2000);
    }
    const myFunc = () => console.log(`Function executed after 2 seconds`);
    delayTwoSeconds(myFunc);
}

{
    // #2
    const newPromise = new Promise((resolve, reject) => resolve(1));
        newPromise.then(value => console.log(`Promise success. Obtained value is ${value}`));
}

{
    // #3
    const newPromise = new Promise((resolve, reject) => reject(1));
    newPromise.catch(err => console.log(`Promise failed with error - ${err}`));
}

{
    // #4
    const promiseNumber = (number) => {
        return new Promise((resolve) => resolve(number));
    }

    promiseNumber(5).then(value => console.log(`Resolved promise with number - ${value}`));

    // #5
    Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
        .then(value => value.forEach(el => console.log(el)));
}