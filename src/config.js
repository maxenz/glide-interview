const dev = {
  api: {
    url:
      "https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api/"
  }
};

const prod = {
  api: {
    url: null,
  }
};

const config = process.env.NODE_ENV === "production" ? prod : dev;

export default config;
