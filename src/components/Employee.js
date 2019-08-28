import React from "react";
import EmployeeAvatar from "./EmployeeAvatar";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Employee = props => {
  const {
    first,
    last,
    department,
    office,
    onChange,
    id,
    isLoadingChildren
  } = props;

  return (
    <div className="employee-container" onClick={() => onChange(id)}>
      {isLoadingChildren && (
        <Loader
          type="TailSpin"
          color="#00b894"
          height="50"
          width="50"
          className="employee-loader"
        />
      )}
      <div
        className={`employee-principal-data-container ${
          isLoadingChildren ? "loading" : ""
        }`}
      >
        <EmployeeAvatar {...props} />
        <div className="employee-principal-data">
          <span className="employee-name">{`${first} ${last}`}</span>
          <span className="employee-department">Department: {department}</span>
          <span className="employee-office">Office: {office}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Employee);
