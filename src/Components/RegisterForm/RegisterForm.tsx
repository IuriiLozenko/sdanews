import React from 'react'
import { Typography, TextField, Button} from '@mui/material';
import { useForm } from 'react-hook-form';
import { auth } from "../../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface RegisterFormValues {
  email: string;
  password: string;
  password2: string;
}

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterFormValues>();

  const registerUserWithFormData = ({
    email,
    password,
    password2,
  }: RegisterFormValues) => {
    if (password === password2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Successfully registered new user");
        })
        .catch((err) => {
          console.log(`Failed to register new user, ${err.message}`);
        });
    } else {
      alert("Passwords are not equal!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(registerUserWithFormData)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
        Register new account
      </Typography>
      <TextField
        type="email"
        placeholder="email"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("email", { required: true })}
      />
      <TextField
        type="password"
        placeholder="password"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("password", { required: true })}
      />
      <TextField
        type="password"
        placeholder="repeat password"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("password2", { required: true })}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm

// Task 1 18.01.2023
// 1. Stwórz komponent LoginForm
// 2. Do komponentu LoginForm zaimportuj hook useForm i wywołaj go wyciągając funkcje 
//register i handleSubmit
// 3. Stwórz interface dla wartości z formularza, będą tylko 2: email i hasło, jedno i 
//drugie string. Sam interface dopisz do wywołania useForm
// 4. Stwórz funkcję logUserIn. Funkcja w parametrze będzie przyjmowała destrukturyzowany 
//obiekt z email i password (patrz komponent RegisterForm) dopisz do tego parametru interface 
//z pkt 3. W samej funkcji wywołaj funkcję signInWithEmailAndPassword, uprzednio ją importując. 
//Sama funkcja przyjmuje 3 argumenty, obiekt auth (firebaseConfig), email i password. Do wywołania funkcji przypnij thena i catcha.
// 5. JSX:
// - całość obwinięta w htmlowy <form>, onSubmit skonfiguruj z handleSubmit i funkcją logUserIn, 
//w atrybucie style ustaw display na flex i flexDirection na column
// - w form umieść TextField (MUI) variant outlined, type email, placeholder email, 
//w sxach display block, my .5rem, mx auto. Zarejestruj input pod nazwą email.
// - w form umieść TextField (MUI) variant outlined, type password, placeholder 
//password, w sxach display block, my .5rem, mx auto. Zarejestruj input pod nazwą password.
// - w form umieść Button (MUI) type submit, variant contained, w sxach display block, mb 1rem, 
//mx auto. Tekst w buttonie: Log in