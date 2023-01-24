import React from 'react'
import { useForm } from 'react-hook-form';
import { TextField, Button } from "@mui/material";

const SearchForm = () => {

  const { register, handleSubmit } = useForm();
  
  const updateKeyword = () => {}
  return (
    <form onSubmit= {handleSubmit(updateKeyword)} style={{display: "flex", flexDirection:"column"}}>
      <TextField placeholder="keyword"
      sx={{my:".5rem", display:"block", mx:"auto"}}
      {...register("keyword", {required: true})}>
      </TextField>
      <Button 
      variant="contained" 
      type="submit"
      sx={{display:"block", mx: "auto",}}>
        Search
      </Button>
    </form>
  );
};

export default SearchForm;

// Task SearchForm 24.01.2023

// 1. Import i wywołanie useForm, wyciągnij register i handleSubmit
// 2. Stwórz pustą funkcję updateKeyword.
// 3. JSX:
// - wszystko będzie w tagu form (html) w atrybucie style: display flex i flexDirection column.
// Skonfiguruj onSubmit zgodnie z useFormem.
// - w środku formularza:
// - TextField (MUI) placeholder="keyword", sx: my .5rem, display block, mx auto. 
//Zarejestruj input pod nazwą keyword, input jest wymagany
// - Button (MUI) variant contained, type submit, sx: display block, mx auto. Text: Search