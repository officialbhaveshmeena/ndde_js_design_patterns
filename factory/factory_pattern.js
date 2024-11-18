//The factory method allows you to centralize the logic of creating objects (which object to create and why) in a single place. This allows you to focus on simply requesting the object you need and then using it. 

//Example :- 

class Employee {

    speak() {
            return "Hi, I'm a " + this.type + " employee"
    }

}

class PartTimeEmployee extends Employee{

    constructor(data){
        super();
        this.type = "part time"
    }
}

class fullTimeWEmployee extends Employee{
    constructor(data){
        super();
        this.type = "full time"
    }
}

class contractorWEmployee extends Employee{
    constructor(data){
        super();
        this.type = "contractor"
    }
}

class MyEmployeeFactory{
    createEmployee(data){
        if(data.type == "parttime") return new PartTimeEmployee(data)
        if(data.type == "fulltime") return new fullTimeWEmployee(data)
        if(data.type == "contractor") return new contractorWEmployee(data)
     }
}

(_=>{
 let factory = new MyEmployeeFactory();
 let types = ["parttime","fulltime","contractor"]
 let employees = [];
 for(let i=0;i<types.length;i++){
  
    employees.push(factory.createEmployee({type:types[i]}))
 }
 employees.forEach((obj)=>{
    console.log(obj.speak())
 })
})()