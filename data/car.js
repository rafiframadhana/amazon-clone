class Car{
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails){
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }


    displayInfo(){
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

        console.log(`${this.#brand} ${this.#model} Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`);
    }

    go(){
        this.speed += 5;

        if(!this.isTrunkOpen){
            this.speed += 5;
        }

        if(this.speed > 200){
            this.speed = 200;
        };

       
    }

    brake(){
        this.speed -= 5;

        if(this.speed < 0){
            this.speed = 0;
        };
    }

    openTrunk(){
        if(this.speed === 0){
            this.isTrunkOpen = true;
        }    
    }

    closeTrunk(){
        this.isTrunkOpen = false;
    }
}

const car1 = new Car({brand: 'Toyota', model:'Corolla'});
const car2 = new Car({brand: 'Tesla', model:'Model 3'});

console.log(car1);
console.log(car2);

car1.brake();
car1.displayInfo();

// Trunk should not open since the car is moving.
car1.openTrunk();
car1.displayInfo();

car2.displayInfo();
car2.go();
car2.brake();
car2.brake();
car2.displayInfo();

// Trunk should open since the car is not moving.
car2.openTrunk();
// Car should not go since the trunk is open.
car2.go();
car2.displayInfo();

// car1.openTrunk();

// car1.displayInfo();
// car1.go();
// car1.go();
// car1.go();
// car1.go();
// car1.displayInfo();
// car1.brake();
// car1.brake();
// car1.brake();
// car1.displayInfo();




// car2.displayInfo();
// car2.go();
// car2.go();
// car2.go();
// car2.go();
// car2.displayInfo();
// car2.brake();
// car2.brake();
// car2.displayInfo();
// car2.openTrunk();


class RaceCar extends Car{
    acceleration;

    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go(){
        this.speed += this.acceleration;

        if(this.speed > 300){
            this.speed = 300;
        }
    }

    openTrunk(){
        console.log('Race car do not have trunk');
    }
    
    closeSTrunk(){
       console.log('Race car do not have trunk');
    }
}

const raceCar1 = new RaceCar({brand: 'McLaren', model: 'F1', acceleration: 20});

raceCar1.go();
raceCar1.openTrunk();
console.log(raceCar1);

raceCar1.displayInfo();