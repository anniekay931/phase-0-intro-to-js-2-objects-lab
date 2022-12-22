// Assign an employee variable to an object containing name and streetAddress keys
const employee = {
    name: 'John',
    streetAddress: '123 Main St'
};

// updateEmployeeWithKeyandValue
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// destructivelyUpdateEmployeeWithKeyAndValue

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// deleteFromEmployeeByKey
function deleteFromEmployeeByKey(employee, key) {
    const {[key]: deleted, ...rest} = employee;
    return rest;
}

// destructivelyDeleteFromEmployeeByKey
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}