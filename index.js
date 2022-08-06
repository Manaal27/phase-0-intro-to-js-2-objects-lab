// Write your solution in this file!
const employee = {

    name: "Cynthia",
    streetAddress: "9 Avenue",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {

    const newEmployee= {...employee};

    newEmployee[key] = value;

    return newEmployee;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee,"Sam","11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee,key,value) {

    newEmployee[key] = value;

    return newEmployee;
}

const updatedNewEmployee = destructivelyUpdateEmployeeWithKeyAndValue(newEmployee,"Sam","12 Broadway",);

function deleteFromEmployeeByKey(employee, key) {

    const deleteEmployee = {...employee};
    delete deleteEmployee[key];

    return deleteEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];
    return employee;
}
   














