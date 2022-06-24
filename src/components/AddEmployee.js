import React, { Component } from "react";
import EmployeeServices from "../api/EmployeeServices";

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      ename: "",
      designation: "",
      email: "",
      location: "",
      experince: "",
      phone: "",
    };

    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      EmployeeServices.getEmployeeById(this.state.id).then((res) => {
        let empData = res.data;
        this.setState({
          ename: empData.ename,
          designation: empData.designation,
          email: empData.email,
          experince: empData.experince,
          phone: empData.phone,
          location: empData.location,
        });
      });
    }
  }
  cancel() {
    this.props.history.push("/");
  }

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      ename: this.state.ename,
      designation: this.state.designation,
      email: this.state.email,
      experince: this.state.experince,
      phone: this.state.phone,
      location: this.state.location,
    };

    if (this.state.id === "_add") {
      EmployeeServices.addEmployee(employee)
        .then((res) => {
          if (res.data.code === 200) {
            this.props.history.push("/");
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            alert(err.response.data.message);
          }
        });
    } else {
      EmployeeServices.editEmployee(employee, this.state.id).then((res) => {
        this.props.history.push("/");
      });
    }
  };

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Edit Employee</h3>;
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        {" "}
        <div>
          <br></br>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                {this.getTitle()}
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label> Emaployee Name: </label>
                      <input
                        placeholder="Emaployee Name"
                        name="ename"
                        className="form-control"
                        value={this.state.ename}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label> Designation: </label>
                      <input
                        placeholder="Designation"
                        name="designation"
                        className="form-control"
                        value={this.state.designation}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label> Email: </label>
                      <input
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label> Experince: </label>
                      <input
                        placeholder="Experince"
                        name="experince"
                        className="form-control"
                        value={this.state.experince}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label> Contact: </label>
                      <input
                        placeholder="Contact"
                        name="phone"
                        className="form-control"
                        value={this.state.phone}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="form-group">
                      <label> Location: </label>
                      <input
                        placeholder="Location"
                        name="location"
                        className="form-control"
                        value={this.state.location}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <button
                      className="btn btn-success"
                      onClick={this.saveOrUpdateEmployee}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
