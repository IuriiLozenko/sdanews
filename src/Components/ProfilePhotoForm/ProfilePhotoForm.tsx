import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, Typography, Button } from "@mui/material";
import { auth, storage } from '../../helpers/firebaseConfig';
import { ref, uploadBytes } from "firebase/storage";

interface ProfilePhotoFormValues {
    profilePhoto: FileList;
}


const ProfilePhotoForm = () => {
    const { register, handleSubmit } = useForm<ProfilePhotoFormValues>();

    const uploadPhoto = (data: ProfilePhotoFormValues) => {
        const photo = data.profilePhoto[0];

        if (auth.currentUser) {
            const storageRef = ref(storage, `/users/${auth.currentUser.uid}/profile`);
            uploadBytes(storageRef, photo);
        }
    };
    

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

// Task 1 23.01.2023 c.d.
// 1. Z parametru data wyizoluj sam obiekt zdjęcia, console.log(data) i sprawdź co to jest.
// Do zmiennej zapisz sam pojedyńczy obiekt zdjęcia.
// 2. Stwórz ifa, w którym sprawdzisz czy auth.currentUser istnieje.
// 3. W tym ifie stwórz kod odpowiedzialny za wrzucanie zdjęcia do storage'u. 
//Ścieżka do pliku (ścieżka w refie): '/users/${auth.currentUser.uid}/profile'
// 4. Cały ProfilePhotoForm wyświetl w UserPage pomiędzy mailem a log outem.
