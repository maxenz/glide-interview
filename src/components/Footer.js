import React from "react";

const actualYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div class="fixed-footer">
      <div class="container">Copyright &copy; {actualYear} BigCorp</div>
    </div>
  );
};

export default Footer;
