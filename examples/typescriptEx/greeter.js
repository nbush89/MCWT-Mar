"use strict";
var greeter = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "Hello " + firstName + " " + lastName;
};
var outsideScope;
function greeter2(myEventParam) {
    myEventParam.target;
    var scope = 1;
    outsideScope = 1;
    if (outsideScope === 2) {
        return "equals 2";
    }
    return "my return value";
}
var myReturn = greeter2();
//console.log(scope);
console.log(outsideScope);
var returnVal = greeter2();
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
var index = 0;
index = 1;
var student = new Student("Grant", "Chirpus");
var student2 = new Student("Grant", "Chirpus the 2nd");
console.log(student.lastName = "newname");
var myArray = [student, student2];
console.log(myArray[1].fullName);
document.getElementById('test').setAttribute('name', 'value');
var newEle = document.createElement('div');
document.appendChild(newEle);
newEle.addEventListener('click', greeter2);
newEle.removeEventListener('click', greeter2);
