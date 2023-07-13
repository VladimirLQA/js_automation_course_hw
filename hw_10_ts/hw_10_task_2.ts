/*Task 2
1. Напишите функции, реализующие методы массивов forEach и map. Функции принимают на вход массив и колбэк. Используйте дженерик типы.
   Затипизировать надо сами функции и коллбэки.
 a. Создать реализацию функции forEach, получающую на вход массив слов, и выводящую в консоль каждый элемент массива без главных букв
 b. Создать реализацию функции map, принимающую массив числе 1-10, возвращающую новый массив, где каждый каждый элемент - это нулевой элемент исходного массива умноженный на его индекс

2. У нас есть интерфейс, описывающий какой объект должен отправляться в апи для эндпоинта /users.
  Напишите функцию, которая будет генерировать объект юзера с захардкоданными/динамически создаваемыми данными,
  а также может (но не обязана) принимать на вход объект, с теми полями юзера, которые мы бы хотели заменить в сгенерированных.
  Динамическое создание данных в юзере можно реализовывать разными способами, а также с подключением библиотек.
  Исходный интерфейс у вас только один, его используем и новые не пишем.

  interface IUser {
    username: string,
    password: string,
    email: string,
    role: 'user' // [user, admin, guest],
    createdAt: Date
  }

3. Написать дженерик тип, который принимает тип объекта с любым количеством вложенных параметров (как примитивных, так и ещё объектов),
  и возвращает новый тип, где все поля исходного стали не обязательными

4. Написать дженерик функцию search, которая ищет в массиве объекты, в значениях которых есть переданное значение.
  Функция на вход принимает массив объектов и значение для поиска. Возвращает массив тех объектов, которые подпадают под условие, либо пустой массив.
  Объекты могут быть абсолютно разными по набору ключей и типов значений в них.
  Для упрощения - в ключах обьектов не могут лежать другие массивы/объекты.*/

// @ts-ignore
const log = console.log;
import {faker} from '@faker-js/faker';

{
    log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    type TestArray<T> = T[];

    const testArrayOfNumbers: TestArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const testArrayOfStrings: TestArray<string> = ['New', 'tesT', 'fOR', 'toDay'];

    {
        // .forEach method
        type CallBack<T> = (element: T, index: number, array: T[]) => void;
        const callBackString: CallBack<string> = (el, i, array) => log(el.slice(1));

        const forEach = <T>(arr: T[], callback: CallBack<T>) => {
            for (let i = 0; i < arr.length; i++) {
                callback(arr[i], i, arr);
            }
        }

        forEach(testArrayOfStrings, callBackString);
    }
    log(`----------------------------------------------`);
    {
        // .map method
        type CallBack<T> = (element: T, index: number, array: T[]) => T;
        const callBackNumber: CallBack<number> = (el, i, array) => el * i;
        // const callBackString: CallBack<string> = (el, i, array) => el.toLowerCase();

        const map = <T>(arr: T[], callback: CallBack<T>) => {
            const resultArray: T[] = [];
            for (let i = 0; i < arr.length; i++) {
                resultArray.push(callback(arr[i], i, arr));
            }
            return resultArray;
        }

        log(map(testArrayOfNumbers, callBackNumber));
        // log(map(testArrayOfStrings, callBackString));
    }
}

{
    log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);

    interface IUser {
        username: string;
        password: string;
        email: string;
        role: 'user' | 'admin' | 'guest';
        createdAt: Date;
    }

    type ArrayRoles = Array<IUser['role']>;
    const arrayOfRoles: ArrayRoles = ['user', 'admin', 'guest'];
    const getRandomRole = (array: ArrayRoles) => array[Math.floor(Math.random() * array.length)];

    const getPostUserBody = <T>(params?: Partial<T>): T => {
        return Object.assign({
            username: faker.person.firstName(),
            password: faker.internet.password(8),
            email: faker.internet.email(),
            role: getRandomRole(arrayOfRoles),
            createdAt: faker.date.between({from: '2022-01-01T00:00:00.000Z', to: '2023-01-01T00:00:00.000Z'}),
            ...params
        });
    }

    console.log(getPostUserBody<IUser>());
}

{
    log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);


}

{
    log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
}