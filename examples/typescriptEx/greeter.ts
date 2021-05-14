interface Person{
    firstName: string;
    lastName: string;
}
const greeter = ({firstName, lastName}: Person): string => `Hello ${firstName} ${lastName}`;
let outsideScope;
function greeter2(myEventParam){
    myEventParam.target
    let scope = 1;
    outsideScope = 1;
    if(outsideScope === 2){
        return "equals 2"
    }
    return "my return value"
    
}
let myReturn = greeter2()
//console.log(scope);
console.log(outsideScope);
let returnVal = greeter2()
const user: Person = {firstName: "Grand", lastName:"Circus"};

console.log(greeter(user));

class Student{
    fullName: string;
    constructor(private firstName: string, public lastName: string){
        this.fullName = `${firstName} ${lastName}`;
        this.firstName
    }
    setFirstName(firstName: string){
        this.firstName = firstName;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }
    getFirstName(){
        return this.firstName;
    }
}
let index = 0;
index = 1;
let student = new Student("Grant", "Chirpus");
let student2 = new Student("Grant", "Chirpus the 2nd");
console.log(student.lastName = "newname");
let myArray = [student, student2 ];
console.log(myArray[1].fullName);
document.getElementById('test').setAttribute('name','value');
let newEle = document.createElement('div');
document.appendChild(newEle);
newEle.addEventListener('click',greeter2);
newEle.removeEventListener('click', greeter2);