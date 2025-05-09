"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidators = {};
function Required(target, propName) {
    const className = target.constructor.name;
    registeredValidators[className] = Object.assign(Object.assign({}, registeredValidators[className]), { [propName]: ['required'] });
}
function PositiveNumber(target, propName) {
    const className = target.constructor.name;
    registeredValidators[className] = Object.assign(Object.assign({}, registeredValidators[className]), { [propName]: ['positive'] });
}
function validate(obj) {
    const className = obj.constructor.name;
    const classValidationRules = registeredValidators[className];
    if (!classValidationRules) {
        return true;
    }
    let isValid = true;
    for (const propertyName in classValidationRules) {
        const propertyValidators = classValidationRules[propertyName];
        for (const validator of propertyValidators) {
            const value = obj[propertyName];
            switch (validator) {
                case 'required':
                    isValid = isValid && !!value;
                    break;
                case 'positive':
                    isValid = isValid && typeof value === 'number' && value > 0;
                    break;
            }
            if (!isValid)
                return false;
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const formEl = document.getElementById('app-form');
formEl.addEventListener('submit', e => {
    e.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const newCourse = new Course(title, price);
    if (!validate(newCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(newCourse);
});
//# sourceMappingURL=app.js.map