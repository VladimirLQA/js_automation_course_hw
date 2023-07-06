/*Task 1
1. Создайте interface ItEmployee
2. В интерфейсе ItEmployee сделайте поле name которое может быть только string
3. В интерфейсе ItEmployee сделайте поле surname которое может быть только string
4. В интерфейсе ItEmployee сделайте поле salary которое может быть только number и доступно только для чтения
5. Создайте тип данных Grade для стринговой переменной, которая может принимать значения: junior, middle, senior, lead
6. В интерфейсе ItEmployee сделайте поле grade типа Grade
7. Создайте enum OCCUPATION, который будет представлять професси в айти вида DEVELOPER = "Developer" и так далее
8. В интерфейсе ItEmployee сделайте поле occupation типа OCCUPATION
9. Создайте интерфейс IAddress, предствляющий объект с полями country, street, house, flat
10. В интерфейсе ItEmployee сделайте необязательное поле address типа IAddress
11. В интерфейсе ItEmployee сделайте projectNames, типа массив строк (названий проектов)*/
var _a;
var OCCUPATION;
(function (OCCUPATION) {
    OCCUPATION["DEVELOPER"] = "DEVELOPER";
    OCCUPATION["QA"] = "QA";
    OCCUPATION["AQA"] = "AQA";
    OCCUPATION["SCRUM_MASTER"] = "SCRUM MASTER";
    OCCUPATION["PRODUCT"] = "PRODUCT OWNER";
    OCCUPATION["BUSINESS_ANALYTIC"] = "BUSINESS ANALYTIC";
})(OCCUPATION || (OCCUPATION = {}));
var newItEmployee = {
    name: "Vova",
    surname: "Lazurenko",
    salary: 1000,
    grade: 'junior',
    occupation: OCCUPATION.QA,
    projectNames: ["web", "mobile", "desktop"],
    address: {
        country: "Ukraine",
        street: "New Street",
        house: 20,
        flat: 20,
    }
};
console.log(newItEmployee.name);
console.log((_a = newItEmployee.address) === null || _a === void 0 ? void 0 : _a.street);
console.log(newItEmployee.occupation);
