import React from "react";

const getInitial = data => data && data.toUpperCase().substring(0, 1);

const EmployeeAvatar = employee => {
  const { first, last } = employee;
  const initials = `${getInitial(first)}${getInitial(last)}`;

  return (
    <div className="avatar-circle">
      <span className="initials">{initials}</span>
    </div>
  );
};

export default EmployeeAvatar;
