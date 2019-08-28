import axios from "axios";
import config from "../config";
import * as employee from "./employee";

export function makeRequest() {
  return axios.create({
    baseURL: config.api.url
  });
}

export default {
  employee,
};
