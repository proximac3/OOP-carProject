class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    };

    honk() {
        return `Beep`
    }

    toString() {
        return `This car is a ${this.make} ${this.model} from ${this.year}`
    }
};

class Car extends Vehicle {
    constructor(make, model, year, numWWheels) {
        super()
        this.make = make;
        this.model = model;
        this.year = year;
        this.numWWheels = numWWheels;
    }
}

class Motorcycles extends Vehicle {
    constructor(make,model,year, numWWheels, revEngine) {
        super()
        this.make = make;
        this.model = model;
        this.year = year;
        this.numWWheels = numWWheels;
        this.revEngine = revEngine;
    }
}

class Garage {
    constructor(vehicles, capacity) {
        this.vehicles = vehicles;
        this.capacity = capacity;
    }

    add(car) {
        if (!(car instanceof Vehicle)) return `Vehicles Only!`
        if (this.capacity < 3) {
            this.capacity++
            this.vehicles.push(car)
        } else {
            return `Sorry garage is full`
        }

        
    }
}

const mclaren = new Vehicle(`Mclaren`, `720s`, 2021)
const myFirstCar = new Car(`Jeep`, `ZJ`, 1997, `4Wheels`)
const rNineT = new Motorcycles(`BMW`, `R Nine T`, 2020, 4, `VROOM`)

const myGarage = new Garage([], 0)
myGarage.add( new Car(`Jeep`, `ZJ`, 1997, `4Wheels`))

console.log(myGarage);