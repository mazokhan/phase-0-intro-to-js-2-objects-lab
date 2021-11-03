// Write your solution in th Samis file!
let employee ={ 
    name:"test"
    streetAddress : "test" 
}

function updatemployeewithkeyandvalue (employee, key, value){
    let copy = {...employee};
    copy[key] = value
    return employee;

    function destructivelyUpdateEmployeeWithKeyAndValue (employee,key,value){
        employee[key] = value
        return employee;
    }

    function deleteFromEmployeeByKey (employee, key){
        let copy =object.assign({},employee)
        delete copy [key]
        return employee;
    }

    function destructivelyDeleteFromEmployeeByKey (employee,key){
        delete employee[key]
        return employee;
    }