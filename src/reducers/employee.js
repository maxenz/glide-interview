import {
  GET_EMPLOYEES_SUCCESS,
  TOGGLE_EMPLOYEES_COLLAPSED,
  TOGGLE_EMPLOYEE_LOADER
} from "../actions/actionTypes";
import dotProp from "../helpers/chainableDotProp";

const initialState = {  
  error: null,
  data: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EMPLOYEES_SUCCESS:
      const managerIndex = state.data.findIndex(
        x => x.id === payload.managerId
      );
      if (payload.managerId === 0) {
        return dotProp(state)
          .set("data", [...state.data, ...payload.data])
          .value();
      } else {
        return dotProp(state)
          .set("data", [...state.data, ...payload.data])
          .set(`data.${managerIndex}.children`, payload.data.map(x => x.id))
          .value();
      }

    case TOGGLE_EMPLOYEES_COLLAPSED:
      const idx = state.data.findIndex(x => x.id === payload.id);   
      return dotProp.set(state, `data.${idx}.collapsed`, !state.data[idx].collapsed);

      case TOGGLE_EMPLOYEE_LOADER:
      const employeeIndex = state.data.findIndex(x => x.id === payload.id);   
      if (employeeIndex > -1) {
        return dotProp.set(
          state,
          `data.${employeeIndex}.isLoadingChildren`,
          !state.data[employeeIndex].isLoadingChildren
        );
      }
      return state;   

    default:
      return state;
  }
};
