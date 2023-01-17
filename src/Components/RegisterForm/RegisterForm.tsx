import React from 'react'
import { Typography, TextField, Button} from '@mui/material'

// Task RegsterForm 17.01.2023
// 1. Elementem który obwija wszystko inne jest zwykły htmlowy <form>, ma on mieć 
//atrybut style gdzie trzeba ustawić display na flex i flexDirection na column.
// 2. W środku <form> wyświetl komponent <Typography> (MUI) z propsami align center, 
//variant h2, w sx'ach fontSize na 1.5rem. TextContent elementu to Register new account
// 3. Wyświetl obok komponent TextField (MUI) z propsami type 
//email, placeholder email, w sx'ach display block, my .5rem, mx auto
// 4. Wyświetl obok komponent TextField (MUI) z propsami type 
//password, placeholder password, w sx'ach display block, my .5rem, mx auto
// 5. Wyświetl obok komponent TextField (MUI) z propsami type password, placeholder 
//repeat password, w sx'ach display block, my .5rem, mx auto
// 6. Wyświetl obok Button z MUI, variant contained, type submit, w sx'ach display 
//block, mx auto. Tekst buttona to Register

const RegisterForm = () => {
  return (
    <form style={{ display:"flex", flexDirection:"column"}}>
      <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
        Register new Account
      </Typography>
      <TextField
        type="email"
        placeholder="email"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}/>
      <TextField
        type="password"
        placeholder="password"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}/>
      <TextField
        type="password"
        placeholder="repeat password"
        sx={{ display: "block", my: ".5rem", mx: "auto" }}/>
      <Button
        variant="contained" 
        type="submit" 
        sx={{ display: "block", mx: "auto" }}>
        Register</Button>
    </form>
  );
}

export default RegisterForm