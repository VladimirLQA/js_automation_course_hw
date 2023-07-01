// @ts-ignore
declare global {
    interface String {
        removeSpecialCharacters(): string;
    }
}
/*1.  Создайте класс AQA с полями experience_in_years: number, grade: string, name: string, desiredSalary: number,
    skills: Array<string> и методом getCV, выводящим инфо о тестировщике вида
    "This is Anatoly Karpovich's CV.
     Middle AQA with 3 years of working experience.
     Key skills are typescript, automation and manual testing.
     Desired salary is not less then $3000".
    Создайте класс AQAnew с теми же полями. Реализуйте в нем метод getCV таким образом,
    чтобы он использовал тот же метод класса AQA, но с контекстом класса AQAnew

2.  Расширьте встроенный класс String с помощью метода removeSpecialCharacters. Этот метод должен работать для каждой строки, созданной в вашем файле js. Решить также через регулярное выражение.
    Например:
    'HE!!LL??OO'.removeSpecialCharacters() => 'HELLO'*/


const log = console.log;

{
    log(`================== #1 ==================================`);

    class AQA {

        constructor(
            public name: string,
            public grade: string,
            public experience_in_years: number,
            public skills: string[],
            public desiredSalary: number,
        ) {
            this.experience_in_years = experience_in_years;
            this.grade = grade;
            this.name = 'Vova';
            this.desiredSalary = desiredSalary;
            this.skills = skills;
        }

        getCV() {
            return `"This is ${this.name}. ${this.grade} with ${this.experience_in_years} years of working experience.
            Key skills are ${this.skills}.
            Desired salary is not less then $${this.desiredSalary}".`
        }

    }

    class newAQA {
        constructor(
            public name: string,
            public grade: string,
            public experience_in_years: number,
            public skills: string[],
            public desiredSalary: number,
        ) {

            this.experience_in_years = experience_in_years;
            this.grade = grade;
            this.name = name;
            this.desiredSalary = desiredSalary;
            this.skills = skills;
        }

        // getCV = AQA.prototype.getCV;
        getCV = AQA.prototype.getCV.bind(this)
    }

    const aqa = new AQA('Amen', 'Junior', 0.5, ['skill 1', 'skill 2', 'skill 3'], 1000);
    const nAQA = new newAQA('Amen', 'Junior', 0.5, ['skill 1', 'skill 2', 'skill 3'], 1000);

    // log(aqa.getCV.call(nAQA)) // 1
    log(nAQA.getCV()) // 2
}

{
    log(`================== #2 ==================================`);

    {
        // @ts-ignore
        String.prototype.removeSpecialCharacters = function () {
            return this.replace(/[^\w\s]/gi, '');
        }
        // @ts-ignore
        log('HE!!LL??OO'.removeSpecialCharacters());
    }
    log(`==========================`);
    {
        // @ts-ignore
        String.prototype.removeSpecialCharacters = function () {
            return [...this].reduce((result, char) => {
                if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
                    return result + char;
                }
                return result;
            }, '');
        };
        // @ts-ignore
        log('HE!!LL??OO'.removeSpecialCharacters());
    }
}