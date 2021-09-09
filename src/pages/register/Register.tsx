import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import axios from "axios";
import React, { FormEvent, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100vw",
      height: "100vh",
      backgroundColor: theme.palette.secondary.dark,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    body: {
      width: "70%",
      height: "70%",
      display: "flex",
    },
    mainContentGroup: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    logo: {
      fontSize: theme.typography.fontSize * 3,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.primary.light,
      marginBottom: theme.spacing(1.25),
    },
    registerDesc: {},
    registerForm: {
      height: "400px",
      padding: theme.spacing(2.5),
      backgroundColor: theme.palette.secondary.main,
      borderRadius: theme.shape.borderRadius * 2.5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    forgotPassword: {
      textAlign: "center",
      cursor: "pointer",
      textDecoration: "none",
      color: theme.palette.primary.light,
    },
  })
);

const RegisterButton = withStyles((theme: Theme) => ({
  root: {
    height: "50px",
    width: "100%",
    alignSelf: "center",
    borderRadius: theme.shape.borderRadius * 2.5,
    fontSize: theme.typography.fontSize * 1.6,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  },
}))(Button);

const Register: React.FC = () => {
  const classes = useStyles();
  const email = useRef<HTMLInputElement>(null);
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (confirmPassword.current?.value !== password.current?.value) {
      return;
    } else {
      const user = {
        username: username.current?.value,
        email: email.current?.value,
        password: password.current?.value,
      };

      try {
        const res = await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        <Box className={classes.mainContentGroup}>
          <Typography variant="h3" className={classes.logo}>
            MySocial
          </Typography>
          <Typography component="span" className={classes.registerDesc}>
            Connect with your friends and the world
          </Typography>
        </Box>
        <Box className={classes.mainContentGroup}>
          <Box
            component="form"
            className={classes.registerForm}
            onSubmit={handleSubmit}
          >
            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="Email"
              variant="outlined"
              inputRef={email}
              required
            />
            <TextField
              id="username"
              label="Username"
              placeholder="Username"
              variant="outlined"
              inputRef={username}
              required
            />
            <TextField
              id="password"
              label="Password"
              placeholder="password"
              variant="outlined"
              type="password"
              inputRef={password}
              required
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              placeholder="Password"
              variant="outlined"
              type="password"
              inputRef={confirmPassword}
              required
            />
            <RegisterButton
              variant="contained"
              color="primary"
              type="submit"
              disableRipple
            >
              Sign Up
            </RegisterButton>

            <Typography component="span" className={classes.forgotPassword}>
              <Link
                to="/login"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                Already have an account? Log In.{" "}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
