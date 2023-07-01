import { ITSpecialist } from 'classes.fabric';

export class Manager extends ITSpecialist {
    constructor(name, grade, experience_in_years, age, country, salary, isScrumMaster) {
        super(name, grade, experience_in_years, age, country, salary);
        this.isScrumMaster = isScrumMaster;
    }
}

