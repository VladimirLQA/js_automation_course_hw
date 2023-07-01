import { ITSpecialist } from './classes.fabric.js';

export class QA extends ITSpecialist {
    constructor(name, grade, experience_in_years, age, country, salary, isAqa) {
        super(name, grade, experience_in_years, age, country, salary);
        this.isAqa = isAqa;
    }
}
const newQA = new QA('Vova', 'Junior', 2, 22, 'Ukraine', 2500, false);

console.log(newQA.name())

// const qaInfoDiv = document.getElementById('qaInfo');
//
// qaInfoDiv.innerHTML += `
//     <h1>QA Information</h1>
//     <p>Name: ${newQA.name()}</p>
//     <p>Grade: ${newQA.grade()}</p>
//     <p>Experience: ${newQA.experience_in_years()} years</p>
//     <p>Age: ${newQA.age()}</p>
//     <p>Country: ${newQA.country()}</p>
//     <p>Salary: ${newQA.salary()}</p>
//     <p>Is AQA: ${newQA.isAqa}</p>
// `;

module.exports = QA;