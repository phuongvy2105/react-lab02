var Mark = {
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}
var john = {
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}
Mark.calcBMI() > john.calcBMI() ? console.log(`Mark's BMI (${Mark.calcBMI()}) is higher than John's (${john.calcBMI()})`) : console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's (${Mark.calcBMI()})`);