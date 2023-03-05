import { TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const MuiLogIn = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log("State changes");
  }, [isSignIn]);

  var name, value;

  const getUserData = (event) => {
    event.preventDefault();
    name = event.target.name;
    value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const postdata = async (event) => {
    const { name, email, password } = user;

    if (email && password) {
      const response = await fetch(
        "https://login-auth-d8181-default-rtdb.firebaseio.com/userInfoForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      if (response) {
        setUser({
          name: "",
          email: "",
          password: "",
        });
        alert("Data Stored Successfully");
      }
    } else {
      alert("Some Error Occured");
    }
  };
  return (
    <>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign={"center"}>
            {isSignIn ? "Signup" : "Login"}
          </Typography>
          {isSignIn && (
            <TextField
              name="name"
              margin="normal"
              variant="outlined"
              type={"text"}
              placeholder="Name.."
              onChange={getUserData}
              value={user.name}
            />
          )}
          <TextField
            name="email"
            margin="normal"
            variant="outlined"
            type={"email"}
            placeholder="Email.."
            onChange={getUserData}
            value={user.email}
          />
          <TextField
            name="password"
            margin="normal"
            variant="outlined"
            type={"password"}
            placeholder="Password.."
            onChange={getUserData}
            value={user.password}
          />
          <Button
            onClick={postdata}
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
            onChange={getUserData}
          >
            {isSignIn ? "Signup" : "Login"}
          </Button>
          <Button
            onClick={() => {
              setIsSignIn(!isSignIn);
            }}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Change to {isSignIn ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default MuiLogIn;
