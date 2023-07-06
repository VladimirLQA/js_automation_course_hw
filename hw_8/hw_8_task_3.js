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
        // setInterval(throttledFunction, 1000);
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
        // setInterval(throttledFunction, 1000);
    }
    // TODO: add one more solution
    {

    }
}

{
    // #2
    const URLs = {
        baseUrl: `https://jsonplaceholder.typicode.com`,
        getUsers: `/users`,
        getALbums: (userID) => `/users/${userID}/albums`,
        getPhotoInAlbums: (userID) =>`/albums/${userID}/photos`,
    }

    async function getUsers() {
        try {
            const response = await fetch(`${URLs.baseUrl}${URLs.getUsers}`);
            const users = await response.json();
            return users;
        } catch (error) {
            console.log(`Error while getting users: ${error}`);
        }
    }

    async function getALbums(userID) {

        try {
            const response = await fetch(`${URLs.baseUrl}${URLs.getALbums(userID)}`);
            const listOfAlbums = await response.json();
            return listOfAlbums;
        } catch (error) {
            console.log(`Error while getting list of albums: ${error}`);
        }

    }

    async function getPhotoInAlbums(userID) {

        try {
            const response = await fetch(`${URLs.baseUrl}${URLs.getPhotoInAlbums(userID)}`);
            const listOfPhotos = await response.json();
            return listOfPhotos;
        } catch (error) {
            console.log(`Error while getting list of photos in albums: ${error}`);
        }
    }

    {
        async function showData() {
            try {
                const users = await getUsers();

                const promises = users.map(user => {
                    return getALbums(user.id).then(albums => {
                        return Promise.all(albums.map(album => getPhotoInAlbums(album.id)));
                    });
                });

                const albumsAndPhotos = await Promise.all(promises);
                // console.log(albumsAndPhotos[0])

                for (let i = 0; i < users.length; i++) {
                    const user = users[i];
                    console.log(`User ID: ${user.id}`);
                    console.log(`name: ${user.name}`);
                    console.log(`email: ${user.email}`);
                    console.log(`phone: ${user.phone}`);
                    console.log(`company: ${user.company.name}`);


                    console.log('albums:');
                    const albums = albumsAndPhotos[i];
                    for (const album of albums) {
                        console.log(`${album[0].title} (${album.length} photos)`);
                    }
                    console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>`);
                }

            } catch (error) {
                console.log(`Error occurred while getting structured data: ${error}`);
            }
        }

        showData();
    }

    {
        async function showData() {
            try {

               // const [users, albums, photos] = await Promise.all([getUsers(), getALbums(), getPhotoInAlbums()])

                const users = await getUsers();
                for (const user of users) {
                    console.log(`User ID: ${user.id}`);
                    console.log(`name: ${user.name}`);
                    console.log(`email: ${user.email}`);
                    console.log(`phone: ${user.phone}`);
                    console.log(`company: ${user.company.name}`);

                    const albums = await getALbums(user.id);

                    // const userAlbums = albums.filter(album => album.userId === users.id);
                    console.log('albums:');

                    // for (const album of userAlbums) {
                    //     const albumPhotos = photos.filter(photo => photo.albumId === album.id);
                    //     console.log(`${album.title} (${albumPhotos.length} photos)`);
                    // }

                    for (const album of albums) {
                        const photos = await getPhotoInAlbums(album.id);
                        console.log(`${album.title} (${photos.length} photos)`);
                    }
                    console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>`);
                }
            } catch (error) {
                console.error(`Error occurred while getting structured data: ${error}`);
            }
        }

        showData();
    }
}