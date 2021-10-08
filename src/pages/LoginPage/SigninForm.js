import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import "./style.css";

const SignInForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  type,
  pwMask,
  onPwChange
}) => {
  return (
    <div className="signupBox">
      <h1>Sign In</h1>
      
      <form onSubmit={onSubmit}>
        <TextField
          name="email"
          label="Email"
          value={user.email}
          onChange={onChange}
          helperText={errors.email}
          error = {errors.email}
        />

        <TextField
          type={type}
          name="password"
          label="Password"
          value={user.password}
          onChange={onChange}
          helperText={errors.password}
          error = {errors.password}
          InputProps={{
            endAdornment : (
                <InputAdornment position="end" style={{width: "fit-content"}}>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={pwMask}
                  >
                    {type == "password" ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
            )
          }}
        />
        <br />
        <Button className="signUpSubmit" variant="contained" color="primary" type="submit">
            SignIn
        </Button>
      </form>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      <p>
        Do not have an account? <br />
        <a href="/signup">Signup Here</a>
      </p>
    </div>
  );
};

export default SignInForm;
