import { Typography, Button } from '@mui/material';
import React from 'react';
import { auth } from "../../helpers/firebaseConfig";
import { signOut } from 'firebase/auth';
import ProfilePhotoForm from '../ProfilePhotoForm/ProfilePhotoForm';

interface UserPageProps {
  loggedIn: boolean
}

const UserPage = ({loggedIn}: UserPageProps) => {
  return (
    <>
    {loggedIn && auth.currentUser && ( <>
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontSize: "2rem",
          my: "1rem",
          borderBottom: "1px solid #1976d2",
          pb: "5rem",
        }}
      >
        Your Profile
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontSize: "1rem", my: "1rem", mx: "auto" }}>
        Your email: {auth.currentUser.email}
      </Typography>
      <ProfilePhotoForm />
      <Button 
      variant="outlined"
      sx={{display: "block", mx: "auto", my: "1rem" }}
      onClick={() => signOut(auth)}>
      Log out
      </Button>
      </>
      )}
    </>
  );
}

export default UserPage
// Task UserPage 19.01.2023(23.01.2023)

// 1. Stwórz komponent UserPage.
// 2. Komponent UserPage wyświetlaj jako Route w App.tsx, od razu przekaż do UserPage stan loggedIn, 
//nie zapomnij o interface w UserPage.
// 3. W UserPage wyświetlaj react fragment, w środku:
// - Typography variant h2, align center, w sxach: fontSize 2rem, my 1rem, 
//borderBottom 1px solid #1976d2, pb .5rem. Text: Your profile
// - Typography variant h5, align center, w sxach: fontSize 1rem, my 1rem, mx auto. 
//Text: Your email: *tutaj email użytkownika*. Email użytkownika jest dostępny na obiekcie auth (zaimportuj go z firebaseConfig), auth.currentUser.email
// - Button variant outlined, w sxach: display: block, mx auto, my 1rem. 
//Nadaj mu onClick w którym będziesz wylogowywać użytkownika. 
//Do tego posłuży ci funkcja signOut importowana z firebase/auth. 
//Sama funkcja signOut przyjmuje 1 arugment: obiekt auth (firebaseConfig). Text buttona: Log out