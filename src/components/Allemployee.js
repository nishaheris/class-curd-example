import React, { Component } from "react";
import EmployeeServices from "../api/EmployeeServices";

class Allemployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeServices.getEmployee()
      .then((res) => {
        this.setState({ employee: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeServices.deleteEmployee(id).then((res) => {
      this.setState({
        employee: this.state.employee.filter((employee) => employee.id != id),
      });
    });
  }

  viewEmployee(id) {
    this.props.history.push(`/employee/${id}`);
  }

  addEmployee = () => {
    this.props.history.push("/add-employee/_add");
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Employee Name</th>
                <th> Designation</th>
                <th> Email</th>
                <th> Experience</th>
                <th> Contact</th>
                <th> Location</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employee.map((employee) => (
                <tr key={employee.id}>
                  <td> {employee.ename} </td>
                  <td> {employee.designation} </td>
                  <td> {employee.email} </td>
                  <td> {employee.experince} </td>
                  <td> {employee.phone} </td>
                  <td> {employee.location} </td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Allemployee;
