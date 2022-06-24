import React, { Component } from "react";
import EmployeeServices from "../api/EmployeeServices";

export default class ViewEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }
  componentDidMount() {
    EmployeeServices.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Employee Name: </label>

              <div> {this.state.employee.ename}</div>
            </div>
            <div className="row">
              <label> Designation: </label>
              <div> {this.state.employee.designation}</div>
            </div>
            <div className="row">
              <label> Email: </label>
              <div> {this.state.employee.email}</div>
            </div>
            <div className="row">
              <label> Experince: </label>
              <div> {this.state.employee.experince}</div>
            </div>
            <div className="row">
              <label> Location: </label>
              <div> {this.state.employee.location}</div>
            </div>
            <div className="row">
              <label> Contact: </label>
              <div> {this.state.employee.phone}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
