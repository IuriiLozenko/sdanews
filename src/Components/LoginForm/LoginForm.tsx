import React from 'react';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { auth } from "../../helpers/firebaseConfig";
import { signInWithEmailAndPassword } from 'firebase/auth';

interface LoginFormValues {
    email: string;
    password: string;
}

const LoginForm = () => {
    const { register, handleSubmit } = useForm<LoginFormValues>();

    const logUserIn = ({ email, password }: LoginFormValues) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("success");
        })
        .catch((err) => console.error(err.message));
        };
  return (
    <form
      onSubmit={handleSubmit(logUserIn)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        variant="outlined"
        type="email"
        placeholder="email"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("email", { required: true })}
      />
      <TextField
        variant="outlined"
        type="password"
        placeholder="password"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("password", { required: true })}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mb: "1rem", mx: "auto" }}
      >
        Log in
      </Button>
    </form>
  );
}

export default LoginForm