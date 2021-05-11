interface Person{
    firstName: string;
    lastName: string;
}
const greeter = ({firstName, lastName}: Person): string => `Hello ${firstName} ${lastName}`;

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

let student = new Student("Grant", "Chirpus");
console.log(student.getFirstName());