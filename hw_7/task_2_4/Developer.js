import { ITSpecialist } from 'classes.fabric';

export class Developer extends ITSpecialist {
    constructor(name, grade, experience_in_years, age, country, salary, isWritingUnitTests) {
        super(name, grade, experience_in_years, age, country, salary);
        this.isWritingUnitTests = isWritingUnitTests;
    }
}

