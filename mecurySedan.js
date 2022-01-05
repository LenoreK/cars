//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

import Vehicle from 'vehicleBaseClass.js';

class car extends Vehicle {
    constructor (make, model, year, color, mileage){
        super(make, model, year, color, mileage);
            this.maximumPassengers = 6;
            this.passenger = 0;
            this.numberofWheels = 4;
            this.maximumSpeed = 200;
            this.fuel = 100;
            this.scheduleService = false;
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine has started");
        }
        else {
            return this.started = false;
            console.log("no fuel");
        }

    loadPassenger(num) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.maxPassenger = num;
            return this.passenger;
        }
        else {
            console.log(`${this.model} ${this.make} not have enough space to take all passengers`)
        }
    }

    this.scheduleService(mileage) {
        if (this.mileage > 30000) {
            this.scheduleService == true
            return this.scheduleService;
        }
    }
    }   
}  