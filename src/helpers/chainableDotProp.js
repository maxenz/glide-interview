/* eslint-disable prefer-rest-params,no-shadow,no-loop-func,guard-for-in,no-restricted-syntax,no-plusplus,max-len */
const dotProp = require("dot-prop-immutable");

const chainableDotProp = Object.assign(init => {
  let next = init;

  const methods = {
    value() {
      return next;
    }
  };

  for (const name in dotProp) {
    methods[name] = function(name) {
      const params = [next];
      for (let i = 1; i < arguments.length; i++) {
        params.push(arguments[i]);
      }
      next = dotProp[name](...params);
      return methods;
    }.bind(undefined, name);
  }

  return methods;
}, dotProp);

export default chainableDotProp;
