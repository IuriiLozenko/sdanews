import React from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";
import { Button, TextField } from "@mui/material";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const logUserIn = ({ email, password }: LoginFormValues) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("sukces");
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
        sx={{ display: "block", my: ".5rem", mx: "auto" }}
        {...register("email", { required: true })}
      />
      <TextField
        variant="outlined"
        type="password"
        placeholder="password"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}
        {...register("password", { required: true })}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ display: "block", mb: "1rem", mx: "auto" }}
      >
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
