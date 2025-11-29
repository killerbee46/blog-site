import { useState, useEffect } from "react";
import { getToken } from "../utils/localUser";

const tempUsers = [
    {email:"test@email.com", password:'password'}
]

const useAuth = () => {
    const token = getToken()
  const [data, setData] = useState(tempUsers);

  useEffect(() => {
    console.log("use auth called")
  }, [data]);

  return [data];
};