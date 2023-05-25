import axios from "axios";

export const BaseURL = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: import.meta.env.VITE_HOST_URL,
    headers: { Authorization: `Bearer ${token ?? null}` },
  });
};
