import { COOKIE } from "@/constants";
import axios from "axios";
import { getCookie } from "cookies-next";

const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

$api.interceptors.request.use((config) => {
  const token = getCookie(COOKIE.TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { $api };
