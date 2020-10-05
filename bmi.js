class BMI {
    //constructor for height and weight to be assigned locally using *this*
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;

    }
    //method & formula to calculate the BMI
    calculateBMI() {

        let bmi = this.weight / (this.height ** 2);
        return bmi;

    }

}
//Created instance of class
let MyBmi = new BMI(2, 80);
//used above instance to invoke the method "calculateBMI"
let calculatedBMI = MyBmi.calculateBMI();
console.log(calculatedBMI);