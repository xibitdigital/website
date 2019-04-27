import axios from "axios";

const API_ROOT = "";

export function getList(action: any) {
  return axios.get(`${API_ROOT}`);
}
