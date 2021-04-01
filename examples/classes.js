class Car{
    constructor(make, model, type){
        this.make = make;
        this.model = model;
        this.type = type;
    }

    startEngine(){
        console.log("Engine is on");
    }

    fillTank(){
        console.log("Tank filled");
    }
}

class ElectricCar extends Car{
    constructor(make, model, type, batterySize){
        super(make, model, type);
        /*
        this.make = make;
        this.model = model;
        this.type = type;
        */
        this.battery = 'BIG';
    }
    
    charge(){
        console.log("Battery charged");
    }

    fillTank(){
        this.charge();
    }
}

class Tesla extends ElectricCar{
    
}

let tesla = new ElectricCar('Tesla', 'S3','Sedan', '14kwh');
let plainCar = new Car('Ford', 'Escape', 'Compact');
// console.log(tesla);
// console.log(plainCar);
plainCar.fillTank();
tesla.charge();
tesla.fillTank();
tesla.startEngine();