"use strict";
var greeter = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "Hello " + firstName + " " + lastName;
};
var user = { firstName: "Grand", lastName: "Circus" };
console.log(greeter(user));
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.firstName;
    }
    Student.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
        this.fullName = this.firstName + " " + this.lastName;
    };
    Student.prototype.getFirstName = function () {
        return this.firstName;
    };
    return Student;
}());
var student = new Student("Grant", "Chirpus");
console.log(student.getFirstName());
