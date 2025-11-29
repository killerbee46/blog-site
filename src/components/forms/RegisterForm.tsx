import { FormControl, InputLabel, Input, Button } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../api/AuthApi';

const RegisterForm = () => {
    const navigate = useNavigate()
  const [registerData, setRegisterData] = useState({
    fullName:null,
    email: null,
    password: null,
  });

  const {mutate:userRegister} = useMutation({
    mutationFn:register,
    onSuccess() {
        alert("Registered Successfully ! Please Login !")
        navigate("/auth/login")
    },
}) 

  const setData = (key: "email" | "password" | "fullName", value: string) => {
    setRegisterData({ ...registerData, [key]: value });
  };

  const onSubmit = (e:any) => {
    e.preventDefault()
    userRegister(registerData)
  };
  return (
      <form onSubmit={onSubmit}>
    <div className="flex w-full flex-col gap-2">
        <div>
          <FormControl className="w-full" required >
            <InputLabel htmlFor="fullName">Full Name</InputLabel>
            <Input
              id="fullName"
              onChange={(e: any) => setData("fullName", e?.target?.value)}
            />
          </FormControl>
          <FormControl className="mt-8! w-full" required >
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
        <Link to={"/auth/login"} className="mt-2 w-fit text-blue-500">
          Already Registered?
        </Link>
        <FormControl>
          <Button type="submit" variant="contained" className="mt-4! -mb-6!">
            Register
          </Button>
        </FormControl>
    </div>
      </form>
  );
};

export default RegisterForm