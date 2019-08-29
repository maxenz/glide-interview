import React, { Component } from "react";
import Employee from "./Employee";
import { connect } from "react-redux";

class EmployeeList extends Component {

  render() {    
    const { children, id, collapsed, onChange } = this.props;    

    return (
      <ul>
        <li key={id}>
          <Employee {...this.props}></Employee>
          {children && children.length > 0 && !collapsed && (
            <ul>
              {children.map(childId => {
                return (
                  <li key={childId}>
                    <EmployeeListConnected id={childId} onChange={onChange} />
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.employee.data.find(x => x.id === ownProps.id);
};

const EmployeeListConnected = connect(
  mapStateToProps,
  null
)(EmployeeList);

export default EmployeeListConnected;
