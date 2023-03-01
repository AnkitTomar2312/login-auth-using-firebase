import { TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MuiLogIn = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  console.log(isSignIn);
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
              margin="normal"
              variant="outlined"
              type={"text"}
              placeholder="Name.."
            />
          )}
          <TextField
            margin="normal"
            variant="outlined"
            type={"email"}
            placeholder="Email.."
          />
          <TextField
            margin="normal"
            variant="outlined"
            type={"password"}
            placeholder="Password.."
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
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
