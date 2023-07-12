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

{
    log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    type TestArray<T> = T[];

    const testArrayOfNumbers: TestArray<number> = [1, 2, 3, 4, 5];
    const testArrayOfStrings: TestArray<string> = ['New', 'test', 'for', 'today'];

    type CallBack<T> = (element: T, index?: number, array?: T[]) => void;
    const callBackNumber: CallBack<number> = (el, i, array) => log(el);
    const callBackString: CallBack<string> = (el, i, array) => log(el);

    const forEach = <T>(arr: T[], callback: CallBack<T>) => {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        }
    }

    forEach(testArrayOfNumbers, callBackNumber);
    forEach(testArrayOfStrings, callBackString);

}

{
    log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
}

{
    log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
}

{
    log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
}