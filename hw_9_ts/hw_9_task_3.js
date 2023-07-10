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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    var testObject = {
        key1: 'value1',
        key2: 123,
        key3: true
    };
    var testArray = [
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
    var countValuesInObject_1 = function (obj, result) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'string') {
                    result.string++;
                }
                else if (typeof obj[key] === 'number') {
                    result.number++;
                }
                else if (typeof obj[key] === 'boolean') {
                    result.boolean++;
                }
            }
        }
    };
    var countValueType = function (data) {
        var result = {
            string: 0,
            boolean: 0,
            number: 0,
        };
        if (Array.isArray(data)) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var object = data_1[_i];
                countValuesInObject_1(object, result);
            }
        }
        else {
            countValuesInObject_1(data, result);
        }
        return result;
    };
    console.log(countValueType(testObject));
    console.log(countValueType(testArray));
}
{
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Task 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    var rules = [
        {
            fieldName: "username",
            validate: function (value) { return value && value.length >= 3; },
        },
        {
            fieldName: "password",
            validate: function (value) { return value && value.length >= 8; },
        },
        {
            fieldName: "email",
            validate: function (value) { return value && value.length >= 5 && value.includes('@'); },
        },
        {
            fieldName: "phone",
            validate: function (value) { return value && String(value).length >= 8; },
        },
    ];
    var formData = {
        username: "john",
        password: "secretpass",
        email: "vooooooooo@gmail.com",
        phone: 88005553535,
    };
    var validateForm = function (rules, formData) {
        var resultValidation = {};
        var _loop_1 = function (rule) {
            Object.keys(formData).forEach(function (field) {
                var _a;
                if (rule.fieldName === field) {
                    resultValidation = __assign(__assign({}, resultValidation), (_a = {}, _a[field] = rule.validate(formData[field]), _a));
                }
            });
        };
        for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
            var rule = rules_1[_i];
            _loop_1(rule);
        }
        return resultValidation;
    };
    var validationStatus = validateForm(rules, formData);
    console.log(validationStatus); // { username: true, password: true }
}
