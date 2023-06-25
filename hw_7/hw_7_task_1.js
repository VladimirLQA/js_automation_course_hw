/*
1. Создайте функцию counter с переменной cosnt count = 0. Реализуйте замыкание так, чтобы при вызове функции count увеличиваться на +1
и выводился в консоль в виде `Function was called ${count} times`
2. Создайте класс User с публичной пропертей name и приватным полем surname, а также методом sayHi() возвращающим "Hello from <name>".
3. Создать объект из класса User и вывести результат метода sayHi() в консоль
4. Создать объект из класса User и вывести surname в консоль (получить ошибку)
*/

{
    console.log(`============================== #1 ==================================`);
    const counter = () => {
        let count = 0;
        return () => {
            ++count;
            return `Function was called ${count} times`
        };
    }

    let count1 = counter();
    let count2 = counter();
    console.log(count1());
    console.log(count2());
    console.log(count2());
    console.log(count1());
    console.log(count1());
}

{
    console.log(`============================== # 2-4 ==================================`)

    class User {
        name = 'Vova';
        #surname = 'Lazurenko';

        sayHi() {
            return `Hi from ${this.name}`;
        }
    }

    const userName = new User();
    console.log(userName.sayHi())
    console.log(userName.name);

    const userSurname = new User();
    console.log(userName.#surname); // SyntaxError: Private field '#surname' must be declared in an enclosing class
}


