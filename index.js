
//1 . Create a function constructor called Employee that accepts a name, position, and salary. Create an array of 5 employees.
// Write a program that increases the salary by 10% for employees who have the position "developer" and print the updated employee list. 

function Employee(name,position,salary){
    this.name=name;
    this.position=position;
    this.salary=salary;
}
let employees=[
    new Employee('Lwam','developer','150000'),
    new Employee('Hewan','designer','100000'),
    new Employee('Brhanu','Manager','200000'),
    new Employee('Fana','developer','150000'),
    new Employee('Fiyona','ux-researcher','100000')];
function increaseDeveloperSalary(inputEmployee)  {
    return inputEmployee.map(employee=>{
        if (employee.position==="developer"){
            employee.salary*=1.10;  
        }
        return employee;
    });

}  
let updatedEmployeeList=increaseDeveloperSalary(employees);
console.log("The updated employee salary is listed below:" );
console.log(updatedEmployeeList);

//2.Given an array of product objects (each with name, price, and inStock properties), 
//write a function that returns a new array containing only the products that are inStock: 
//true, and sort the available products by price in ascending order. 

function ascendInstockProduct(products){
        const listProduct = products.filter(product => product.inStock).sort((a, b) => a.price - b.price);
        return listProduct;
    }
    let products = [
        { name: "Nike", price: 2000, inStock: true },
        { name: "Adidas", price: 2500, inStock: false },
        { name: "Converse", price: 3000, inStock: true },
        { name: "Jordan", price: 2500, inStock: true },
        { name: "Puma", price: 3500, inStock: false },
        { name: "Reebook", price:3000,instock:true}
    ];
    
    const filterdProducts = ascendInstockProduct(products);
    console.log(filterdProducts);
    
// 3  Create an object called grades where the keys are student names and the values are arrays of their scores. Write a 
//function that calculates and prints each student's average score, and if the average is above 70,
// print "Pass"; otherwise, print "Fail" next to their name. 



let  grades = {
    "Hewan": [10, 7, 8],
    "Rgbe": [40, 80, 70],
    "Neema": [60, 75, 80],
    "Fiyona": [80, 85, 85],
    "Linn": [80,90,95]
};
function printAverages(grade) {
    for (const student in grade) {
        const scores = grade[student];
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        const record = average > 70 ? "Pass" : "Fail";
        console.log(`${student}: Average = ${average} - ${record}`);
    }
}

printAverages(grades);

// 4  Write a function constructor called User that takes username, email, and isActive (boolean). Create an array of users. Write a program that
// loops through the array and deactivates users who have not logged in recently (simulate this with a random isActive: false assignment) 
//and print out the usernames of active users.

function User(username, email, isActive) {
    this.username = username;
    this.email = email;
    this.isActive = isActive;
}

let users = [
    new User("Lwam", "lwambsrat@example.com", true),
    new User("Hewan", "hewan@example.com", true),
    new User("Rgbe", "rgbe@example.com", true),
    new User("Salwa", "salwa@example.com", true),
    new User("paulin", "paulin@example.com", true)
];

function deactivateInactiveUsers(userList) {
    const activeUsers = [];
   
    userList.forEach(user => {
        if (Math.random() < 0.2) {
            user.isActive = false;
        }
       
        if (user.isActive) {
            activeUsers.push(user.username);
        }
    });
   
    console.log("Active Users:", activeUsers);
}

deactivateInactiveUsers(users);



//5 You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). 
//Write a function that accepts a maximum distance and a budget and returns
// all destinations the user can afford and reach within that distance. If none are found, return 
//"No destinations available under your budget and distance".

function findDestinations(destinations, maxDistance, maxBudget) {
    const affordableAndClose = destinations.filter(destination =>
        destination.distance <= maxDistance && destination.budgetRequired <= maxBudget
    );
   
    if (affordableAndClose.length === 0) {
        return "No destinations available under your budget and distance";
    }
   
    return affordableAndClose;
}

const destinations = [
    { name: "Mekelle", distance: 500, budgetRequired: 10 },
    { name: "Adigrat", distance: 350, budgetRequired: 20 },
    { name: "Kenya", distance: 1700, budgetRequired: 300 },
    { name: "Usa", distance: 4600, budgetRequired: 4000 },
    { name: "Addis Abeba", distance: 1200, budgetRequired: 350 }
];

const maxDistance = 500;
const maxBudget = 100;
const availableDestinations = findDestinations(destinations, maxDistance, maxBudget);
console.log(availableDestinations);
