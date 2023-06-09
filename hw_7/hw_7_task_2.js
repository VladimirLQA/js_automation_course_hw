/*
* 1. Создайте функцию, принимающую число n, которая при каждом вызове будет генерировать случайное число [1 - n] включительно.
   Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах).
   И так пока не переберутся все n чисел. На n + 1 вызов и далее функция должна возвращать 'All numbers were received'.
   Задачу решить через замыкания
    Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

2. Создать функцию, которая принимает на вход дату в виде гггг/мм/дд и возвращает, что вам 18 лет и подсчитанное количество месяцев.
   Реализовать с помощью объекта Date

3.  Таня любит печь торты. У нее есть рецепты и ингредиенты. К сожалению, она не сильна в математике.
    Поможешь ей узнать, сколько тортов она сможет испечь, учитывая ее рецепты?
    Напишите функцию cakes(), которая принимает рецепт (объект) и доступные ингредиенты (тоже объект)
    и возвращает максимальное количество тортов, которые Таня может испечь (целое число).
    Для простоты нет единиц измерения количества (например, 1 фунт муки или 200 г сахара — это просто 1 или 200).
    Ингредиенты, отсутствующие в объектах, можно считать равными 0.
    Пример:
      // must return 2
      cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
      // must return 0
      cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

4.  Вам необходимо команду айтишников для проекта!
    Вам нужно создать класс Team, структура представлена ниже.
    Вы должны реализовать следующие методы:
      get/set team's name
      get/set team’s sprint duration (number of weeks)
      get planned release date
      get/set daily standup time
      get number of teammates
      add/remove/edit teammate
      add/remove/edit tasks (таски могут храниться только уникальные)
      show all teammates
      show teammates by specialication
      show all tasks

    Создайте класс ITSpecialist. Реализуйте следующие методы:
      get all info
      set country
      get salary
    Создайте дочерние классы для некоторых айтишников.
    Реализовать возможность задавать свойства дочерних классов.
    Каждый класс должен находиться в своем собственном файле.
    Все данные из обьекта класса Team вывести в HTML

    Структура:

    class Team
    name
    sprint_duration
    release_date
    daily_standup_time
    teammates: []
    tasks: [],

    class ITSpecialist
    name
    grade
    experience_in_years
    age
    country
    _salary

    class Manager
    isScrumMaster

    class QA
    isAqa

    class Developer
    isWritingUnitTests

    class Task
    featureName
    userStoryNumber
    estimations
*/

const log = console.log;

{
    log(`=========================== #1 =================================`);

    const generateRandomNumber = (n) => {
        let numbers = Array.from({length: n}, (_, i) => i + 1);
        let count = 0;
        return () => {
            if (count >= n) return 'All numbers were received';

            const randomIndex = Math.floor(Math.random() * numbers.length);
            const randomNumber = numbers[randomIndex];
            numbers.splice(randomIndex, 1);
            ++count;
            return randomNumber;
        };
    };

    const getRandomNumber = generateRandomNumber(5);
    log(getRandomNumber());
    log(getRandomNumber());
    log(getRandomNumber());
    log(getRandomNumber());
    log(getRandomNumber());
    log(getRandomNumber());
    log(getRandomNumber());

    {
        const generateUniqueRandomNumber = (n) => {
            const numbers = new Set();
            return () => {
                if (numbers.size === n) {
                    return 'All numbers were received';
                }
                let randomNumber;
                do {
                    randomNumber = Math.floor(Math.random() * n) + 1;
                } while (numbers.has(randomNumber));

                numbers.add(randomNumber);
                return randomNumber;
            };
        };

        // const getRandomNumber = generateUniqueRandomNumber(5);
        // log(getRandomNumber());
        // log(getRandomNumber());
        // log(getRandomNumber());
        // log(getRandomNumber());
        // log(getRandomNumber());
        // log(getRandomNumber());
        // log(getRandomNumber());
    }
}

{
    log(`=========================== #2 =================================`);

    Date.prototype.isValid = d => !isNaN(Date.parse(d));

    const adultAndCountedMonths = (date) => {
        if (!new Date().isValid(date)) return `Passed date is not correct`;

        const currDate = new Date();
        const passedDate = new Date(date);

        const age = currDate.getFullYear() - passedDate.getFullYear();
        const monthDiff = currDate.getMonth() - passedDate.getMonth() + 12 * age;
        if (age < 18) {
            return `You're not 18 years old`;
        } else {
            return `You're 18 years old and counted months = ${monthDiff}`;
        }
    }
    // log(Date.parse('dfghsdfg'))

    log(adultAndCountedMonths('2021/06/26'));
    log(adultAndCountedMonths('2005/06/26'));
    log(adultAndCountedMonths(3423423));
    log(adultAndCountedMonths());
    log(adultAndCountedMonths('342342342'));
}

{
    log(`=========================== #3 =================================`);

    {
        function cakes(recipe, available) {
            let maxCakes = Infinity;
            for (const ingredient in recipe) {
                if (!(ingredient in available)) {
                    return 0;
                }

                const possibleCakes = Math.floor(available[ingredient] / recipe[ingredient]);
                if (possibleCakes < maxCakes) {
                    maxCakes = possibleCakes;
                }
            }
            return maxCakes;
        }

        log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
        log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
    }
    log(`============================================================================================`);
    {
        function cakes(recipe, available) {
            return Object.keys(recipe).reduce((maxCakes, ingredient) => {
                if (!(ingredient in available)) {
                    return 0;
                }
                const possibleCakes = Math.floor(available[ingredient] / recipe[ingredient]);

                return possibleCakes < maxCakes ? possibleCakes : maxCakes;
            }, Infinity);
        }

        log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
        log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
    }
    log(`============================================================================================`);
    {
        function cakes(recipe, available) {
            return Math.min(...Object.keys(recipe).map((ingredient) => {
                if (!(ingredient in available)) {
                    return 0;
                }

                return Math.floor(available[ingredient] / recipe[ingredient]);
            }));
        }

        log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
        log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
    }
}

{
    log(`=========================== #4 =================================`);

    export class Team {

        constructor(name, sprintDuration) {
            this._releaseDate = null;
            this._dailyStandup = null;
            this._teammates = [];
            this._tasks = new Set();
            this._name = name;
            this._sprintDuration = sprintDuration;
        }

        get teamName() {
            return this._name;
        }

        set teamName(nameOfTeam) {
            this._name = nameOfTeam;
        }

        get sprintDuration() {
            return this._sprintDuration;
        }

        set sprintDuration(duration) {
            this._sprintDuration = duration;
        }

        get releaseDate() {
            return this._releaseDate = new Date(new Date().setDate(new Date().getDate() + 2 * 7)).toLocaleDateString();
        }

        get dailyStandup() {
            return this._dailyStandup;
        }

        set dailyStandup(time) {
            this._dailyStandup = time;
        }

        get numberOfTeammates() {
            return this._teammates.length;
        }

        addTeammate(teammate) {
            this._teammates.push(teammate);
        }

        removeTeammate(teammate) {
            this._teammates = this._teammates.filter((el, _, array) => el.name !== teammate);

            // const i = this._teammates.indexOf(teammate);
            // if (i !== -1) this._teammates.splice(i, 1);
        }

        editTeammate(oldTeammate, updatedTeammate) {
            // this._teammates = this._teammates.map((el) => {
            //     if (el.name === oldTeammate) return updatedTeammate
            //     else return el;
            // })

            this._teammates = this._teammates.reduce((updatedTeam, teammate) => {
                if (teammate.name === oldTeammate) updatedTeam.push(updatedTeammate)
                else updatedTeam.push(teammate);
                return updatedTeam;
            }, [])

            // const i = this._teammates.findIndex((teammate) => teammate.name === oldTeammate);
            // if (i !== -1) this._teammates[i] = updatedTeammate;
        }

        addTask(task) {
            this._tasks.add(task)
        }

        removeTask(task) {
            this._tasks.delete(task)
        }

        editTask(oldTask, newTask) {
            if (this._tasks.has(oldTask)) {
                this._tasks.delete(oldTask);
                this._tasks.add(newTask);
            }
        }

        showAllTeammates() {
            return this._teammates;
        }

        showTeammatesBySpecialization(specialization) {
            return this._teammates.filter((teammate) => teammate.specialization === specialization);
        }

        showAllTasks() {
            return Array.from(this._tasks);
        }


    }

    const qa = new Team('Quality assurance', 2);
    qa.teamName = 'Sharks in testing world';
    log(`New team name - ${qa.teamName}`);

    qa.sprintDuration = 3;
    log(`Set new sprint duration - ${qa.sprintDuration} weeks`);

    log(`Next planned release date - ${qa.releaseDate}`);

    qa.dailyStandup = new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'});
    log(`We have changeable daily stand up at ${qa.dailyStandup}`);

    log(`Numbers of teammates before adding: ${qa.numberOfTeammates}`);

    qa.addTeammate({name: 'Frank', specialization: 'Developer'});
    qa.addTeammate({name: 'Helen', specialization: 'Designer'});
    qa.addTeammate({name: 'Gimmle', specialization: 'Scrum master'});
    qa.addTeammate({name: 'Sun', specialization: 'QA Lead'});

    log(`Numbers of teammates after adding: ${qa.numberOfTeammates}`);

    qa.removeTeammate('Sun');
    log(`Numbers of teammates after removing: ${qa.numberOfTeammates}`);

    qa.editTeammate('Frank', {name: 'Frank', specialization: 'Developer Full stack'})


    qa.addTask('Implement');
    qa.addTask('Design');
    qa.addTask('Optimize');
    qa.addTask('Grooming');

    qa.removeTask('Implement')
    qa.editTask('Grooming', 'Planning');

    log(qa.showAllTeammates());
    log(qa.showTeammatesBySpecialization('Designer'));
    log(qa.showAllTasks());

}