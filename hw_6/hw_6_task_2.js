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
const {enterprises} = require('./data_storage');

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

        addEnterprise('Added enterprise test');
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

        addDepartment(1, 'Added department test', 22);
        log(enterprises.at(0));
    }
}

{
    log(`===================================== # 5 ======================================`);
    {
        const editEnterpriseName = (enterpriseID, newName) => {
            if (!enterpriseID || !newName) return `Enterprise id or new name is not provided`;
            let enterprise = getEnterprise(+enterpriseID, enterprises);
            if (typeof enterprise === 'object') enterprise.name = newName;
            else log(`Enterprise not received`);
        };

        editEnterpriseName(1, 'New enterprise name test');
        log(enterprises.at(0));
    }
}

{
    log(`===================================== # 6 ======================================`);
    {
        {
            const editDepartmentName = (enterpriseID, newName) => {
                if (!enterpriseID || !newName) return `Department id or new name is not provided`;
                let department = getDepartment(+enterpriseID, enterprises);
                if (typeof department === 'object') department.name = newName;
                else log(`Department not received`);
            };

            editDepartmentName(2, 'New department name test');
            log(enterprises.at(0));
        }
    }
}

{
    log(`===================================== # 7 ======================================`);
    {
        const deleteEnterpriseByID = (enterpriseID) => {
            if (!enterpriseID) return `Enterprise id is not provided`;
            const index = enterprises.findIndex(el => el.id === enterpriseID);
            if (index !== -1) enterprises.splice(index, 1);
            else log(`The enterprise was not found for the given identifier`);

        }

        deleteEnterpriseByID(1);
        deleteEnterpriseByID(2);
        log(enterprises.at(0)); // first enterprise in array has id: 5
    }
}

{
    log(`===================================== # 8 ======================================`);
    {
        const deleteDepartmentByID = (enterpriseID) => {
            let checkArr = [];
            if (!enterpriseID) return `Department id is not provided`;
            for ( let enterprise of enterprises) {
                let index = enterprise.departments.findIndex((el) => el.id === enterpriseID && el.employees_count === 0);
                checkArr.push(index);
                if (index !== -1) enterprise.departments.splice(index, 1);
            }
            if (checkArr.every(value => value < 0)) return log(`The department was not found for the given identifier`);
        }

        // deleteDepartmentByID(10);
        // deleteDepartmentByID(9);
        // log(enterprises.at(1)); // There is no departments in enterprise with id: 9;
    }

    {
        const deleteDepartmentByID = (enterpriseID) => {
            if (!enterpriseID) return `Department id is not provided`;
            const checkArr = enterprises.reduce((acc, enterprise) => {
                const index = enterprise.departments.findIndex((el) => el.id === enterpriseID && el.employees_count === 0);
                if (index !== -1) {
                    enterprise.departments.splice(index, 1);
                    acc.push(index);
                }
                return acc;
                }, []);
            if (checkArr.every((value) => value < 0)) return log(`The department was not found for the given identifier`);
        };

        deleteDepartmentByID(10);
        deleteDepartmentByID(9);
        log(enterprises.at(1)); // There is no departments in enterprise with id: 9;
    }
}

{
    log(`===================================== # 9 ======================================`);
    {

    }
}