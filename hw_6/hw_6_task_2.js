/*Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!


Задания:
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму
 всех сотрудников во всех отделах.

**Пример:**
Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)

2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия,
к которому относится).

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2

3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")

4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

Пример:
addDepartment(1, "Название нового отдела")

5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

Пример:
editEnterprise(1, "Новое название предприятия")


6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

Пример:
editDepartment(7, "Новое название отдела")


7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

Пример:
deleteEnterprise(1)

8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

Пример:
deleteDepartment(3)

9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

Пример:
moveEmployees(2, 3)*/


// utils
const {getNewID, countEmployee, getDepartment, getEnterprise, log} = require('./utils_task_2');

// data
const {company, enterprises} = require('./data_storage');

{
    log(`===================================== # 1 ======================================`);
    {
        const getStructure = (enterprises) => {
            if (!enterprises) return log(`Enterprises not provided`);
            enterprises.forEach(comp => {
                let departments = [];
                let count = 0;
                departments.push(comp.name);
                if (comp.departments) {
                    comp.departments.forEach(dept => {
                        count += dept.employees_count;
                        departments.push(`- ${dept.name} (${countEmployee(dept.employees_count)})`);
                    });
                    departments[0] += ` (${countEmployee(count)})`;
                }
                log(departments.join('\n'));
            });
        };

        getStructure(enterprises);
        getStructure();
    }
}

{
    log(`===================================== # 2 ======================================`);
    {
        const getEnterpriseName = (arg) => {
            if (!arg) return `Department id or name not passed`;
            let enterprise;
            enterprises.forEach(comp => {
                let department;
                if (comp.departments) {
                    department = comp.departments.find(division => {
                        return division.id === arg || division.name === arg
                    });
                }
                if (department) enterprise = comp.name;
            })
            return enterprise ? enterprise : `There is no department with id == ${arg} or name == ${arg}`;
        }
        log(getEnterpriseName(2));
        log(getEnterpriseName('Отдел разработки'));
        log(getEnterpriseName(33));
        log(getEnterpriseName());
    }
}

{
    log(`===================================== # 3 ======================================`);
    {
        const addEnterprise = (companyName) => {
            if (typeof companyName !== 'string' || !companyName) return `Enterprise name not passed or has incorrect type`;
            enterprises.push({
                id: getNewID(enterprises),
                name: companyName,
                departments: []
            });
        };

        addEnterprise('New company test');
        log(enterprises.at(-1));
    }
}

{
    log(`===================================== # 4 ======================================`);
    {
        const addDepartment = (compID, deptName, empl_count = 0) => {
            const enterprise = getEnterprise(compID, enterprises);
            if (enterprise) enterprise.departments.push({
                id: getNewID(enterprises),
                name: deptName,
                employees_count: empl_count,
            })
        };

        addDepartment(1, 'Department name test', 22);
        log(enterprises.at(0));
    }
}

{
    log(`===================================== # 5 ======================================`);
    {
        const changeEnterpriseName = (enterpriseID, newName) => {
            if (!enterpriseID || !newName) return `Enterprise id or new name is not provided`;
            let enterprise = getEnterprise(+enterpriseID, enterprises);
            if (typeof enterprise === 'object') enterprise.name = newName;
            else log(`Enterprise not received`);
        };

        changeEnterpriseName(1, 'New enterprise name test');
        log(enterprises.at(0));
    }
}

{
    log(`===================================== # 6 ======================================`);
    {

    }
}

{
    log(`===================================== # 7 ======================================`);
    {

    }
}

{
    log(`===================================== # 8 ======================================`);
    {

    }
}

{
    log(`===================================== # 9 ======================================`);
    {

    }
}