/**
 * Problem 1. 
 * Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
 * Sam, Tech, Manager, 40000, true
 * Mary, Finance, Trainee, 18500, true
 * Bill, HR, Executive, 21200, false
 * 
 * Print JSON(s) to console.
 **/

let sam = {
    "first name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raise eligible": true
};

let mary = {
    "first name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raise eligible": true
};

let bill = {
    "first name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raise eligible": false
};

console.log(sam, mary, bill);

/**
 * Problem 2. 
 * 
 * Create JSON for the company with the following details (companyName, website, employees)
 * Tech Stars, www.techstars.site, array of Employees
 * 
 * Print JSON to console.
 **/

let company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        sam, mary, bill
    ]
}

/**
 * Problem 3.
 * 
 * A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
 * Anna, Tech, Executive, 25600, false
 * 
 * Write function to add a new employee
 * 
 * Print updated JSON to console.
 **/

let anna = {
    "first name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise eligible": false
};
    company.employees.push(anna); // push anna to array of employees in company

/**
 * Problem 4. 
 * 
 * Given the JSON for the company, calculate the total salary for all company employees.
 * 
 * Print total salary to console.
 **/
var totalSal = 0
for(var i = 0; i < company.employees.length; i++) {
    totalSal += company.employees[i].salary;
}

console.log(totalSal);



/**
 * Problem 5. 
 * 
 * It's raise time. If an employee is raise eligible, increase their salary by 10%. 
 * Given the JSON of the company and its employees, write a function to update the salary 
 * for each employee who is raised eligible, then set their eligibility to false.
 * 
 * Print names of employees who got a raise to console, list original and new salary.
 **/

function salIncrease(company) {
    for(var i = 0; i < company.employees.length; i++) {
        if(company.employees[i]["raise eligible"]) { // if the employees are eligible for a raise
            console.log(company.employees[i]["first name"] + " got a raise! Their old salary was " + company.employees[i].salary + " and now it's " + ((company.employees[i].salary*.10) + company.employees[i].salary));
            company.employees[i].salary = (company.employees[i].salary*.10) + company.employees[i].salary;
            company.employees[i]["raise eligible"] = false;
        }
    }
}
salIncrease(company);



/**
 * Problem 6. 
 * 
 * Some employees have decided to work from home. The following array indicates who is working from home. 
 * Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
 * 
 * Working from home: ['Anna', 'Sam']
 * 
 * Print updated JSON to console.
 **/

let wfhArr = ["Anna", "Sam"]

for(var i = 0; i < (company.employees).length; i++) {
    for(var j = 0; j < wfhArr.length; j++)
    {
        if(company.employees[i]["first name"] == wfhArr[j])
        {
            company.employees[i].wfh = "true";
        }
        else 
        {
            company.employees[i].wfh = "false";
        }
    }
    console.log(company.employees[i]);
}
