import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, Typography, Button } from "@mui/material";


interface ProfilePhotoFormValues {
    profilePhoto: FileList;
}


const ProfilePhotoForm = () => {
    const { register, handleSubmit } = useForm<ProfilePhotoFormValues>();

    const uploadPhoto = (data: ProfilePhotoFormValues) => {};

  return (
    <form onSubmit={handleSubmit(uploadPhoto)}>
      <Card sx={{ p: "1rem" }}>
        <Typography 
        variant="h6"
        align="center"
        sx={{fontSize: "1rem",}}>
        Upload your profile picture
        </Typography>
        <Button 
        variant="contained"
        component="label"
        sx={{display: "block", mx: "auto", my: "1rem", alignContent: "center"}}>
        <Typography 
        variant="h6"
        align="center"
        sx={{fontSize: "1rem"}}>
        Select a file
        </Typography>
        <input hidden type="file"{...register("profilePhoto", {required: true})}>
        </input>
        </Button>
        <Button
        variant="contained"
        type="submit"
        sx={{display: "block", mx: "auto",}}>
        Upload
        </Button>
      </Card>
    </form>
  );
 }


export default ProfilePhotoForm


// Task 1 23.01.2023 ProfilePhotoForm

// 1. Stwórz komponent ProfilePhotoForm
// 2. Zaimportuj useForm, wywołaj go wyciągając funkcję register i handleSubmit.
// 3. Stwórz pustą funkcję uploadPhoto
// 4. JSX:
// - wszystko będzie obwinięte tagiem form (htmlowym), skonfiguruj onSubmit w odpowiedni sposób używając funkcji uploadPhoto
// - w formularzu wyświetl komponent Card (MUI), w sx'ach p 1rem
// - w Card wyświetl:
// a) Typography (MUI) variant h6, align center, sx: fontSize 1rem. Text: Upload your profile picture
// b) Button (MUI) variant contained, component label, sx: display block, mx auto, my 1rem, alignContent center.
// <Button component="label">
// <Typography></Typography><input hidden />
// </Button>
// w tym Buttonie wyświetl 2 elementy: Typography (variant h6, align center, 
//sx: fontSize 1rem. Text: Select a file) oraz input (htmlowy, type file, hidden, zarejestruj input w useForm pod nazwą profilePhoto)
// c) Button (MUI) variant contained, type submit, sx: display block, mx auto. Text: Upload
// 5. Interface do useForm'a:
// input type file zwraca typ FileList, otypuj profilePhoto jako FileList