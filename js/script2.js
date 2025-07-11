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
    let emp = employees.find((emp)=>emp.id === id);
    let empName = prompt('Enter new employee name');
    let empSalary = prompt('Enter new employee salary');
    let empPost = prompt('Enter new employee post');
    let empManager = prompt('Enter new employee manager');
    emp.ename = empName;
    emp.salary = empSalary;
    emp.post = empPost;
    emp.manager = empManager;
    localStorage.setItem('employees',JSON.stringify(employees));
    getData();

}

getData();