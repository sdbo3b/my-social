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
import React from "react";

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
    loginDesc: {},
    loginBox: {
      height: "300px",
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
      color: theme.palette.primary.light,
    },
    loginButton: {
      height: "50px",
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.light,
      fontSize: theme.typography.fontSize * 1.6,
      fontWeight: theme.typography.fontWeightMedium,
      borderRadius: theme.shape.borderRadius * 2.5,
    },
  })
);

const RegisterButton = withStyles((theme: Theme) => ({
  root: {
    height: "50px",
    width: "60%",
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

const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.body}>
        <Box className={classes.mainContentGroup}>
          <Typography variant="h3" className={classes.logo}>
            MySocial
          </Typography>
          <Typography component="span" className={classes.loginDesc}>
            Connect with your friends and the world
          </Typography>
        </Box>
        <Box className={classes.mainContentGroup}>
          <Box className={classes.loginBox}>
            <TextField
              id="email"
              label="Email"
              placeholder="email"
              variant="outlined"
            />
            <TextField
              id="password"
              label="Password"
              placeholder="password"
              variant="outlined"
            />
            <Button
              className={classes.loginButton}
              variant="contained"
              color="primary"
              disableRipple
            >
              Log In
            </Button>
            <Typography component="span" className={classes.forgotPassword}>
              Forgot Password?
            </Typography>
            <RegisterButton variant="contained" disableRipple>
              Create a new account
            </RegisterButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
