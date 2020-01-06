import Employee from '../Model/Employee'
import Admins from '../Model/Admin'
import Crypto from 'crypto'

const dataFilePath = '%PUBLIC_URL%/data.dat'
const employeesToCreate = 5;
const adminsToCreate = 2;

let employees = []
let admins = []


function createNewUsers(){
    createTestEmployees();
    createTestAdmins();

    let json = {
        'Employees' : employees,
        'Admins' : admins
    }

    writeData(json);
}

function writeData(JSON){
    const fs = require('fs');

    try { fs.writeFileSync(dataFilePath, JSON, 'utf-8'); }
    catch(e) { alert('Failed to save the file !'); }
}

function createTestEmployees(){
    employees = []
    
    for(var i = 0; i < employeesToCreate; i++){
        let testEmployee = new Employee();
        
        testEmployee.id = Crypto.randomBytes(7).toString('hex');;
        testEmployee.firstName = "fname_" + testEmployee.id;
        testEmployee.lastName = "lname_" + testEmployee.id;
        testEmployee.passcode = "passcode" + testEmployee.id;

        employees.push(testEmployee);
    }
}

function createTestAdmins(){
    admins = []
    
    for(var i = 0; i < adminsToCreate; i++){
        let testAdmin = new Admins();
        
        testAdmin.id = Crypto.randomBytes(7).toString('hex');;
        testAdmin.firstName = "fname_" + testAdmin.id;
        testAdmin.lastName = "lname_" + testAdmin.id;
        testAdmin.passcode = "passcode" + testAdmin.id;

        admins.push(testAdmin);
    }
}
