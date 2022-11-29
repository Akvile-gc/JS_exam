/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator (a, b){
    this.numberA = a;
    this.numberB = b;
    this.sum = function(){
        return this.numberA + this.numberB;
    }
    this.subtraction = function(){
        return this.numberA - this.numberB;
    }
    this.multiplication = function(){
        return this.numberA * this.numberB;
    }
    this.division = function(){
        return this.numberA / this.numberB;
    }
}

// const number = new Calculator(1, 3);
// console.log(number.sum());