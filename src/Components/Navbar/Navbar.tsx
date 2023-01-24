import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { auth, storage } from "../../helpers/firebaseConfig";
import { ref, getDownloadURL} from "firebase/storage";

interface NavbarProps {
  loggedIn: boolean;
}

const pages = ["Home", "Search"];

const Navbar = ({ loggedIn }: NavbarProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [profilePhoto, setProfilePhoto] = React.useState<string>("/");

  React.useEffect(() => {
    if (loggedIn && auth.currentUser) {
      const storageRef = ref(storage, `/users/${auth.currentUser.uid}/profile`);
      getDownloadURL(storageRef).then((url) => {
        setProfilePhoto(url);
      });
    }
  }, [loggedIn]);

  // const toggleAvatarClicked = () => {
  //   // if (avatarClicked) setAvatarClicked(false);
  //   // if (!avatarClicked) setAvatarClicked(true);

  //   // if (avatarClicked === false) {
  //   //   setAvatarClicked(true);
  //   // } else {
  //   //   setAvatarClicked(false);
  //   // }

  //   // arr.map((el, i, arr) => {})
  //   // arr.forEach(el => {})
  //   const updateAvatarStateUsingPreviousState = (
  //     previousAvatarState: boolean
  //   ) => {
  //     return !previousAvatarState;
  //   };
  //   // setCount(previousCount => previousCount + 1)
  //   // setCount(count + 1)

  //   setAvatarClicked(updateAvatarStateUsingPreviousState);
  // };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link
                to="/search"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Search</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Roboto",
              fontWeight: 100,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SDA News
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Link
              to={`${loggedIn ? "/user" : "/login"}`}
              style={{ textDecoration: "none" }}
            >
              {/* turnary operator, renderowanie warunkowe typ I */}
              {loggedIn ? (
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={profilePhoto} />
                </IconButton>
              ) : (
                <Button variant="contained">Log in</Button>
              )}
              {/* operator &&, renderowanie warunkowe typ II */}
              {/* {loggedIn && <span>Hello!</span>} */}
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default Navbar;

// Task 1 24.01.2023
// 1. Stwórz stan profilePhoto, otypuj na string, wartość początkowa: "/" (stan służący do przechowywania urla do obrazka)
// 2. Wywołanie useEffect. W listę dependencji wpisz loggedIn.
// W UE:
// - stworz ifa w ktrym sprawdzisz czy loggedIn jest równe true i czy auth.currentUser istnieje
// - w ifie stwórz refa przy pomocy funkcji ref (firebase/storage), ref będzie 1:1 taki sam jak 
//w profilePhotoForm. Wywołaj po tym funkcję getDownloadURL (firebase/storage) podając ref jako argument.
// Do getDownloadURL podepnij thena, ten then w parametrze dostanie urla. Tego urla (w thenie) wrzuć do stanu profilePhoto.
// 3. W komponencie Avatar (wyświetlenie w Navbarze na dole), zmień atrybut src na profilePhoto
//.then((url) => {})