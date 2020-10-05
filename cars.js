//created Vehicle class
class Vehicle {
//The constructor which holds the arguments for the vehicle class
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //The method to log the arguments declared in the constructor
    Information() {
        console.log(`Make: ${this.make}, Model: ${this.model}, year: ${this.year}`);
    }
}
//created cars class which inherits from the vehicle class
class Cars extends Vehicle{
    //The constructor that uses super to inherit the arguments from the vehicle class 
    //and adds the doors argument for cars
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;

    }
    //The information method inheritedd from Vehicle class using super
    //added doors to be logged by the console as well
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }


}
//Invokes the cars class and sends it to the console to be displayed
let myCar = new Cars('VW', 'Golf', 2012, 5);
myCar.Information();