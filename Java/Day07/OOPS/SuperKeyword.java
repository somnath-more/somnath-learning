// super keyword in java example 

// Base class vehicle 
class Vehicle { 
	int maxSpeed = 120; 
} 

// sub class Car extending vehicle 
class Car extends Vehicle { 
	int maxSpeed = 180; 

    public Car(int maxSpeed){
        this.maxSpeed = maxSpeed;  // initialize maxSpeed of car
    }
	void display() 
	{ 
		// print maxSpeed of base class (vehicle) 
	
        System.out.println("Use of this Keyword : "+ this.maxSpeed);
        System.out.println("Maximum Speed: "
        + super.maxSpeed); 
	} 
} 

// Driver Program 
class Test { 
	public static void main(String[] args) 
	{ 
		Car small = new Car(9000); 
		small.display(); 
	} 
}
