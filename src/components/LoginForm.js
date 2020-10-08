import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { login } from "../redux/login/login-action";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    submit: {
      backgroundColor: "#EDBD00",
      width: "100%",
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    input: {
      borderRadius: "4px",
      marginBottom: theme.spacing(2),
      width: "100%",

      [theme.breakpoints.down("xl")]: { fontSize: "16px" },
      [theme.breakpoints.down("lg")]: { fontSize: "12px" },
    },
  };
});

const LoginForm = ({ authenticate }) => {
  const classes = useStyles();
  const [form, updateForm] = useState({ username: "", password: "" });
  const [showPassword, toogleVisibility] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate(form);
  };
  const handleClickShowPassword = () => {
    toogleVisibility(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={classes.root}>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          value={form.username}
          name="username"
          onChange={(e) =>
            updateForm({ ...form, [e.target.name]: e.target.value })
          }
          label="Username"
          variant="outlined"
          type="email"
          className={classes.input}
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <OutlinedInput
          variant="outlined"
          id="standard-adornment-password"
          value={form.password}
          name="password"
          onChange={(e) =>
            updateForm({ ...form, [e.target.name]: e.target.value })
          }
          type={showPassword ? "text" : "password"}
          className={classes.input}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button
        className={classes.submit}
        variant="contained"
        color="primary"
        disableElevation
        type="submit"
        size="large"
      >
        Login
      </Button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  authenticate: (state) => dispatch(login(state)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
