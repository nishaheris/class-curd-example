import axios from "axios";

const APIURL = "http://localhost:8080/findAll";
const CREATEAPI = "http://localhost:8080/add/";
const FINDONE = "http://localhost:8080/findOne";
const EDITURL = "http://localhost:8080/edit";
const DELETEURL = "http://localhost:8080/deleteOne";

class EmployeeServices {
  getEmployee() {
    return axios.get(APIURL);
  }

  addEmployee(employee) {
    return axios.post(CREATEAPI, employee);
  }

  getEmployeeById(employeeID) {
    return axios.get(FINDONE + "/" + employeeID);
  }

  editEmployee(employee, employeeID) {
    return axios.put(EDITURL + "/" + employeeID, employee);
  }

  deleteEmployee(employeeID) {
    return axios.delete(DELETEURL + "/" + employeeID);
  }
}

export default new EmployeeServices();
