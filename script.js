let totalMonthlyCost = 0;
let maxMonthlyCost = 20000;

function addEmployee(event){
    event.preventDefault();

    console.log('in addEmployee:', event);

    let firstName = document.querySelector("#inputFirstName").value;
    let lastName = document.querySelector("#inputLastName").value;
    let id = document.querySelector("#inputId").value;
    let title = document.querySelector("#inputTitle").value;
    let salary = Number(document.querySelector("#inputSalary").value);
    // Update Table with data
    document.querySelector('#employeeTable').innerHTML += '<tr id="employeeRow-'+ id+'"><td>'+ firstName +'</td><td>'+ lastName +'</td><td>'+ id +'</td><td>'+ title +'</td><td>'+ salary.toLocaleString('en-US') +'</td><td><button onclick="deleteEmployee('+ id +')">Delete</button></td></tr>';
    // Reset Form
    document.getElementById('employeeForm').reset();
    // Update Total
    updateMonthlyCost(salary);
    checkOverBudget();
}

// Function to check budget
function checkOverBudget(){
    if ( totalMonthlyCost > maxMonthlyCost ){
       document.querySelector('footer').classList.add('over-budget');
    }
}

// Function to Update Monthly Cost
function updateMonthlyCost(amount){
    console.log('in updateMonthlyCost:', amount);
    totalMonthlyCost += Number(amount);
    document.querySelector('#monthlyCostOutput').innerHTML = 'Total Monthly: ' + totalMonthlyCost.toLocaleString('en-US');
}
// Function to Delete Employee
function deleteEmployee(id){
    console.log('in deleteEmployee', id);
    document.getElementById('employeeRow-' + id ).remove();
}