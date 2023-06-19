class Car {
    constructor(engine) {
        this.engine = engine;
    }
    start() {
        this.engine.start();
    }
}

class Engine {
    start(){
        console.log('Engine started!');
    }
}

class ElectricEngine{
    start() {
        console.log('Electric engine started');
    }
}

// let engine = new Engine();
// let car = new Car(engine);
// car.start();

let electricEngine = new ElectricEngine();
let electricCar = new Car(electricEngine);
electricCar.start();