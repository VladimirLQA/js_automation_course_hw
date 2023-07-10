/*Task 3.

1. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа.
  Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean.
  Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве.

2. Создайте псевдоним типа с именем ValidationRule, представляющий правило проверки для поля формы.
  Он должен включать свойства для имени поля (строка) и функцию проверки, которая принимает значение (любое) и возвращает логическое значение,
  указывающее, является ли значение допустимым. Затем создайте функцию с именем validateForm,
  которая принимает массив объектов ValidationRule и объект данных формы.
  Функция должна проверять каждое поле формы на основе соответствующих правил проверки и возвращать объект,
  указывающий статус проверки для каждого поля. Убедитесь, что сигнатура функции обеспечивает использование псевдонима типа ValidationRule.

  Создайте функцию falidateForm, которая будет принимать массив объектов ValidationRule и объект типа FormData.
  FormData - объект, где: ключи - строки (name, surname, email, phone, age, usernameg, password),
    значения - соответственно (string, string, string, number, number, string, string)
  ValidationRule - объект, с ключем fieldName, в значении которого могут находиться названия полей (те же что и в FormData),
    и ключ validate - валидационная функция (например (value: string) => value.length < 40 && value.length > 2)
  функция falidateForm должна проверить каждое значение в объекте formData на соответствие валидационным функциям для соответствующих полей,
    переданнм в массиве ValidationRules. Возвращает функция объект с ключами как в formData и boolean значениями, вернувшимися из валидаций

  Например:

    const rules: ValidationRule[] = [
      {
        fieldName: "username",
        validate: (value) => value && value.length >= 3,
      },
      {
        fieldName: "password",
        validate: (value) => value && value.length >= 8,
      }
    ];

    const formData = {
      username: "john",
      password: "secretpass",
    };

    const validationStatus = validateForm(rules, formData);
    На выходе: { username: true, password: true }*/


{
    console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);

    type Values = 'string' | 'number' | 'boolean';
    type DataObject = Record<string, string | number | boolean>;
    type ResultObject = Record<Values, number> & Record<string, number>;

    const testObject: DataObject = {
        key1: 'value1',
        key2: 123,
        key3: true
    };

    const testArray: DataObject[] = [
        {
            key1: 'value1',
            key2: 123,
            key3: true
        },
        {
            key1: 'value2',
            key2: 456,
            key3: false
        }
    ];

    const countValuesInObject = (obj: DataObject, result: ResultObject) => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'string') {
                    result.string++;
                } else if (typeof obj[key] === 'number') {
                    result.number++;
                } else if (typeof obj[key] === 'boolean') {
                    result.boolean++;
                }
            }
        }
    };

    const countValueType = (data: DataObject | DataObject[]): ResultObject => {
        const result: ResultObject = {
            string: 0,
            boolean: 0,
            number: 0,
        };

        if (Array.isArray(data)) {
            for (const object of data) {
                countValuesInObject(object, result);
            }
        } else {
            countValuesInObject(data, result);
        }

        return result;
    };

    console.log(countValueType(testObject));
    console.log(countValueType(testArray));
}

{
    console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    type ValidationRule = { fieldName?: FormDataKeys, validate: (value: any) => boolean, };
    type FormDataKeys = keyof IFormData;
    type ResultAfterValidation = { [key in FormDataKeys]?: boolean };
    type ValidateForm = (rules: ValidationRule[], formDate: IFormData) => ResultAfterValidation;

    interface IFormData {
        name?: string;
        surname?: string;
        email?: string;
        phone?: number;
        age?: number;
        username?: string;
        password?: string;
    }

    const rules: ValidationRule[] = [
        {
            fieldName: "username",
            validate: (value) => value && value.length >= 3,
        },
        {
            fieldName: "password",
            validate: (value) => value && value.length >= 8,
        },
        {
            fieldName: "email",
            validate: (value) => value && value.length >= 5 && value.includes('@'),
        },
        {
            fieldName: "phone",
            validate: (value) => value && String(value).length >= 8,
        },
    ];

    const formData: Partial<IFormData> = {
        username: "john",
        password: "secretpass",
        email: "vooooooooo@gmail.com",
        phone: 88005553535,
    };

    const validateForm: ValidateForm = (rules, formData): ResultAfterValidation => {
        let resultValidation: ResultAfterValidation = {};

        for (let rule of rules) {
            Object.keys(formData).forEach(field => {
                if(rule.fieldName === field) {
                    resultValidation = {...resultValidation, ...{[field]: rule.validate(formData[field])}};
                }
            })
        }
        return resultValidation;
    }

    const validationStatus = validateForm(rules, formData);
    console.log(validationStatus); // { username: true, password: true }
}



