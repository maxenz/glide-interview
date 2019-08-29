import React from "react";
import Loader from "react-loader-spinner";

const EmployeeLoader = () => {
  return (
    <Loader
      type="TailSpin"
      color="#00b894"
      height={50}
      width={50}
      className="employee-loader"
    />
  );
};

export default EmployeeLoader;