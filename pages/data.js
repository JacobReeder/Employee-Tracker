const seeEmployee = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
FROM employee 
LEFT JOIN role on employee.role_id = role.id 
LEFT JOIN department on role.department_id = department.id 
LEFT JOIN employee manager on manager.id = employee.manager_id;`

const getEmployee = `SELECT * FROM employee`

const addEmployee = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES (?,?,?,?)`  //didnt seed

const updateEmployee = `UPDATE employee 
SET role_id = ?
WHERE id = ?` //didnst seed

const seeRoles = `SELECT title AS Title, salary AS Salary, department.name AS Department
FROM role
JOIN department
ON role.department_id = department.id;`

const addRole = `INSERT INTO role(title, salary, department_id)
VALUES (?,?,?)` //didnt seed

const viewDept = `SELECT * FROM department`

const addDept = `INSERT INTO department
VALUES (?)`

module.exports = { 
    seeEmployee, 
    getEmployee,
    addEmployee,
    updateEmployee,
    seeRoles,
    addRole,
    viewDept,
    addDept
};