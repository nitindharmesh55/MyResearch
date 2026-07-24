function Car(brand, model, rentperDay)
{
    this.brand =  brand;
    this.model = model;
    this.rentperDay =  rentperDay;
    isRented =  false;

    this.rentCar = function(){
        if(isRented)
        {
            console.log("Car is already rented!");
            return;
        }
        else
        {
            this.isRented = true;
            console.log(`${this.brand} ${this.model} rented successfully.`);
            
        }
    }

    this.returnCar =  function(){
        if(!isRented)
        {
            console.log("This car Wasn't rented!");
            return;
            
        }
        else
        {
           isRented  = false;
           console.log("Car returned successfully");
           
        }
    }


    this.showCar = function(){
        console.log(`Brand:${this.brand}`);
        console.log(`Model:${this.model}`);
        console.log(`Rent Per Day:${this.rentperDay}`);

        console.log(isRented ? "Available: Yes" : "Available: No");
    }

}

const Toyota = new Car("Toyota", "Supra", 5000);
Toyota.rentCar();
Toyota.returnCar();
Toyota.showCar();

const Honda = new Car("Honda", "Civic", 3000);
const BMW = new Car("BMW", "M4", 8000);

// 🟢 Project 7 – Gym Membership System (Classes)


class GymMember{
    constructor(name, membershipType){
        this.name = name;
        this.membershipType = membershipType;
        this.isActive = true;
    }
    showDetails(){
        console.log(`Name:${this.name}`);
        console.log(`MemberShip:${this.membershipType}`);
        let active = this.isActive ? "Active" : "Inactive";
        console.log(`Status:${active}`);
    }

    cancelMembership(){
        if(!this.isActive)
        {
         console.log("Membership is already inactive");
         return;
        }
        else
        {   
            this.isActive = false;
            console.log("Membership cancelled Successfully");
            return;
            
        }
    }


    renewMembership(){
        if(this.isActive)
        {
            console.log("Membership is already active");
            return;
        }
        else{
            this.isActive = true;
            console.log("Membership renwed successfully");

            return;
            
        }
    }
}

const Employee = new GymMember("Nitin","Gold" );
console.log(Employee);

Employee.showDetails();
Employee.cancelMembership();


// 🚀 Next Project (Level Up)