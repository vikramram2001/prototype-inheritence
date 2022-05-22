function automobile(){
    this.brand="Ford";
    this.seat="5";
    this.fuel="petrol";
    this.cylinder="3";
}

automobile.prototype.space="full space"
automobile.prototype.airbag="dual airbag"
automobile.prototype.brake="ABS"
automobile.prototype.doorlock="child lock"
const auto=  new automobile()
// console.log(auto)

function automobile1(){
    // automobile.prototype.call(this)
    automobile.call(this);
    this.roof="sunroof";
    this.camera="camera";
    this.start="remote start";
}

automobile1.prototype=Object.create(automobile.prototype);
automobile1.prototype.constructor=automobile1;

const auto1=new automobile1()
console.log(auto1)