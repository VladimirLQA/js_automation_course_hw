export class ITSpecialist {
    constructor(name, grade, experience_in_years, age, country, salary) {
        this.name = name;
        this.grade = grade;
        this.experience_in_years = experience_in_years;
        this.age = age;
        this.country = country;
        this._salary = salary;
    }

    getAllInfo() {
        return `Name: ${this.name}, Grade: ${this.grade}, Experience: ${this.experience_in_years} years, Age: ${this.age}, Country: ${this.country}`;
    }

    setCountry(country) {
        this.country = country;
    }

    get salary() {
        return this._salary;
    }
}
