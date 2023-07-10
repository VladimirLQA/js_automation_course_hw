/*1. Задание: Создайте универсальную функцию с именем findMaxKeysValue, которая принимает массив значений любого типа и
    возвращает объект с максимальным количеством пар ключ\значение из этого массива. Напишите пошаговую инструкцию, как решить эту задачу.
  Шаги:
  1. Создайте дженерик функцию, принимающую на вход массив объектов Т и возвращающий Т
  2. Пропишите, что Т - обобщенный тип, наследуемый от Record, где ключи - строки, значения - строки, цифры, булевые
  2. Напишите проверку не пустой ли массив
  3. Создайте переменную resultObject типа Т, и положите в нее нулевой элемент
  4. Создайте цикл бегущий по массиву от 1 элемента до конца
  5. Проверяйте на каждой итерации количество пар ключ\значение в объекте, если это количетсво больше чем у объекта в resultObject -
      положить в resultObject текущий элемент
  6. Вернуть из функции объект resultObject после завершения цикла*/

type CustomObject = Record<string, string | number | boolean>;

const objects: CustomObject[] = [
    {key1: 1, key2: '2', key3: true},
    {key3: 34523, key4: '342343', key5: false},
    {key6:452345, key7: 'dfgsdfgsd', key8: true, key9: 'were'},
];

{
    function findMaxKeysValue<T extends CustomObject>(arr: T[]): T {
        if (arr.length === 0) throw new Error('Empty array');

        let resultObject: T = arr[0];

        for (let i = 1; i < arr.length; i++) {
            const currentObjectKeysCount = Object.entries(arr[i]).length;
            const resultObjectKeysCount = Object.entries(resultObject).length;

            if (currentObjectKeysCount > resultObjectKeysCount) {
                resultObject = arr[i];
            }
        }

        return resultObject;
    }

    console.log(findMaxKeysValue(objects))
}

{

}