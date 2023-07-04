/*Task 3.
1.  Реализуйте функцию Throttle, которая принимает коллбэк функцию
  и временной интервал в качестве входных данных. Функция должна гарантировать,
  что коллбэк вызывается не более одного раза за заданный интервал времени,
  даже если он вызывается несколько раз в течение этого интервала.

2. На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей.
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах.
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий.
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId).
  Пример:
  1.  name: Leanne Graham
      email: Sincere@april.biz
      phone: 1-770-736-8031 x56442
      company: Romaguera-Crona
      albums:
        Album name 1 (10 photos)
        Album name 2 (100 photos)
  __________________________________

  2.  name: Ervin Howell
      email: Shanna@melissa.tv
      phone: 010-692-6593 x09125
      company: Deckow-Crist
      albums:
        Album name 1 (10 photos)
        Album name 2 (100 photos)*/

{
    // #1
    {
        const throttle = (fn, delay) => {
            let isThrottle = false;

            return (...args) => {
                if (!isThrottle) {
                    fn.apply(this, args);
                    isThrottle = true;
                    setTimeout(() => isThrottle = false, delay);
                }
            }
        }

        const myFn = () => console.log(`${new Date().getMinutes()}:${new Date().getSeconds()}`);
        const throttledFunction = throttle(myFn, 3000);
        setInterval(throttledFunction, 1000);
    }

    {
        const throttle = (fn, delay) => {
            let lastTime = 0;
            return (...args) => {
                const now = Date.now();
                if (now - lastTime < delay) return;
                lastTime = now;
                // fn.apply(null, args);
                fn(...args);
            };
        };

        const myFn = () => console.log(`${new Date().getMinutes()}:${new Date().getSeconds()}`);
        const throttledFunction = throttle(myFn, 3000);
        setInterval(throttledFunction, 1000);
    }
}