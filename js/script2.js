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
            <td>
                <button onclick="handleDelete(${id})" class="btn btn-danger">Delete</button>
            </td>
        `
        empTable.appendChild(row);
    })
};


// const handleDelete=(index)=>{
//     employees.splice(index,1);
//     localStorage.setItem('employees',JSON.stringify(employees));
//     getData();
// }

const handleDelete=(id)=>{
   
    let newData = employees.filter((emp)=>{
        return emp.id !== id
    })
    employees = newData;
    localStorage.setItem('employees',JSON.stringify(newData));
    getData();
}


getData();