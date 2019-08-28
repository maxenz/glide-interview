import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import { connect } from "react-redux";
import { getEmployees } from "../actions/employee";

class OrganigramContainer extends Component {
  componentDidMount() {
    this.props.getEmployees(0);
  }

  onSelectEmployee = employeeId => {
    this.props.getEmployees(employeeId);
  };

  render() {
    const { employees } = this.props;    
    return employees && employees.length > 0 ? (
      <div className="tree">
        <EmployeeList         
          id={employees[0].id}
          onChange={this.onSelectEmployee}
        />
      </div>
    ) : null;
  }
}

const mapDispatchToProps = dispatch => ({
  getEmployees: (managerId, employeeId) => dispatch(getEmployees(managerId, employeeId))
});

const mapStateToProps = state => ({  
  employees: state.employee.data,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganigramContainer);
