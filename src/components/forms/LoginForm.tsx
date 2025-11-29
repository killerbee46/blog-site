import { FormControl, InputLabel, Input, Button } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { login } from "../../utils/localUser";

const LoginForm = () => {
const navigate = useNavigate()
const [searchParams] = useSearchParams()
const ref = searchParams.get('ref') ?? "/"

  const [loginData, setLoginData] = useState({
    email: null,
    password: null,
  });

  const setData = (key: "email" | "password", value: string) => {
    setLoginData({ ...loginData, [key]: value });
  };

  const onSubmit = async(e:any) => {
    e.preventDefault()
    const loginUser = await login(loginData)
    if (loginUser?.success) {
        navigate(ref)
        alert(loginUser?.message)
        // return <Alert severity="success">{loginUser?.message}</Alert>
    } else {
        alert(loginUser?.error)
    }
  };
  return (
      <form onSubmit={onSubmit}>
    <div className="flex w-full flex-col gap-2">
        <div>
          <FormControl className="w-full" required >
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              type="email"
              onChange={(e: any) => setData("email", e?.target?.value)}
            />
          </FormControl>
          <FormControl className="mt-8! w-full" required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              fullWidth
              id="password"
              onChange={(e: any) => setData("password", e?.target?.value)}
              required
            />
          </FormControl>
        </div>
        <Link to={"/auth/register"} className="mt-2 w-fit text-blue-500">
          Don't have an account?
        </Link>
        <FormControl>
          <Button type="submit" variant="contained" className="mt-4! -mb-6!">
            Login
          </Button>
        </FormControl>
    </div>
      </form>
  );
};

export default LoginForm;
