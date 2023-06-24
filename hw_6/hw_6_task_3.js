/*
Task 3. ** Ниже найдете разноуровневый массив объектов company, очень похожий на массив из прошлого задания,
  только количество вложенностей может быть не ограничено.
  Задание: написать функцию:
  Функция строит древовидный список компании.
  При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с
  соблюдением вложенности подразделений.
*/

const {company} = require("./data_storage");

const {countEmployee} = require('./utils_task_2');

{
    const  printCompanyStructure = (company, level = 0) => {
        const indent = " ".repeat(level * 4);
        for (const department of company) {
            console.log(`${indent}- ${department.name} (${countEmployee(department.users_count)})`);
            if (department.children) {
                printCompanyStructure(department.children, level + 1);
            }
        }
    };

    printCompanyStructure(company);
}