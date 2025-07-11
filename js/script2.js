let empTable = document.querySelector('#empTable tbody')

let employees =  JSON.parse(localStorage.getItem('employees')) || [];
let getData = ()=>{
    empTable.innerHTML = '';
    employees.map((emp,index)=>{
        let {ename,salary,post,manager,id} = emp;
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${index+1}</td>
            <td>${ename}</td>
            <td>${salary}</td>
            <td>${post}</td>
            <td>${manager}</td>
            <td class="d-flex justify-content-between gap-3">
                <button onclick="handleDelete(${id})" class="btn btn-danger">Delete</button>
                <button onclick="handleEdit(${id})" class="btn btn-warning">Edit</button>
            </td>
        `
        empTable.appendChild(row);
    })
};

const handleDelete=(id)=>{
   
    let newData = employees.filter((emp)=>{
        return emp.id !== id
    })
    employees = newData;
    localStorage.setItem('employees',JSON.stringify(newData));
    getData();
}

const handleEdit=(id)=>{
    let emp = employees[id];

    let empname = prompt("Edit Employee Name: ", emp.empname);
    if(empname === null) return;

    let salary = prompt("Edit Employee Salary: ", emp.salary);
    if(salary === null) return;

    let post = prompt("Edit Employee Post: ", emp.post);
    if(post === null) return;

    let manager = prompt("Edit Employee Manager: ", emp.manager);
    if(manager === null) return;

    employees[id] = {empname, salary, post, manager};
    localStorage.setItem('employees',JSON.stringify(employees));
    getData();
}

getData();