import {
  GET_EMPLOYEES_SUCCESS,
  TOGGLE_EMPLOYEE_LOADER,
  GET_EMPLOYEES_ERROR,
  TOGGLE_EMPLOYEES_COLLAPSED
} from "./actionTypes";
import API from "../api";

const toggleEmployeeLoader = id => {
  return dispatch => {
    dispatch({
      type: TOGGLE_EMPLOYEE_LOADER,
      payload: {
        id
      }
    });
  };
};

const setEmployees = (data, managerId) => {
  return dispatch => {
    dispatch({
      type: GET_EMPLOYEES_SUCCESS,
      payload: {
        data,
        managerId
      }
    });
  };
};

const setError = error => {
  return dispatch => {
    dispatch({
      type: GET_EMPLOYEES_ERROR,
      payload: error
    });
  };
};

const toggleCollapsedEmployee = id => {
  return dispatch => {
    dispatch({
      type: TOGGLE_EMPLOYEES_COLLAPSED,
      payload: {
        id
      }
    });
  };
};

export function getEmployees(employeeId) {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const employeeSelected = state.employee.data.find(
        x => x.id === employeeId
      );
      if (!employeeSelected || !employeeSelected.children) {
        dispatch(toggleEmployeeLoader(employeeId));
        const { data } = await API.employee.getManagerDependencies(employeeId);
        dispatch(setEmployees(data, employeeId));
        dispatch(toggleEmployeeLoader(employeeId));
      } else {
        if (employeeSelected.children && employeeSelected.children.length > 0) {
          dispatch(toggleCollapsedEmployee(employeeId));
        }        
      }
    } catch (error) {
      dispatch(toggleEmployeeLoader(employeeId));
      dispatch(setError(error));
    }
  };
}
