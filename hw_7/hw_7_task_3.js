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
}


{
    log(`================== #2 ==================================`);

    {
        String.prototype.removeSpecialCharacters = function () {
            return this.replace(/[^\w\s]/gi, '');
        }

        log('HE!!LL??OO'.removeSpecialCharacters());
    }
        log(`==========================`);
    {
        String.prototype.removeSpecialCharacters = function() {
            return [...this].reduce((result, char) => {
                if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
                    return result + char;
                }
                return result;
            }, '');
        };

        log('HE!!LL??OO'.removeSpecialCharacters());
    }
}