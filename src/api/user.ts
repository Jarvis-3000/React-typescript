import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/users"; // Replace with your API base URL

export const fetchUsers = () => {
  return axios.get(API_BASE_URL);
};

export const fetchUserById = (id: number) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};
