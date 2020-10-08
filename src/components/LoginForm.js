import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { login } from "../redux/login/login-action";

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
      border: "1px solid #4949F0",
      boxSizing: "border-box",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate(form);
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={classes.root}>
      <TextField
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
      <TextField
        value={form.password}
        name="password"
        onChange={(e) =>
          updateForm({ ...form, [e.target.name]: e.target.value })
        }
        label="password"
        variant="outlined"
        type="password"
        className={classes.input}
      />
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
