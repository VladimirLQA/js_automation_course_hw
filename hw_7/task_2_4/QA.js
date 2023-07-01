import { ITSpecialist } from 'classes.fabric';

export class QA extends ITSpecialist {
    constructor(name, grade, experience_in_years, age, country, salary, isAqa) {
        super(name, grade, experience_in_years, age, country, salary);
        this.isAqa = isAqa;
    }
}