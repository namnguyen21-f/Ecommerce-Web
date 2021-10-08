import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import "./style.css";
import PasswordStrengthBar from 'react-password-strength-bar';
const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  password,
  type,
  pwMask,
  onPwChange
}) => {
  return (
    <div className="signupBox">
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      <form onSubmit={onSubmit}>
        <div className="d-flex">
            <TextField
                name="fName"
                label="Firstname"
                value={user.fName}
                onChange={onChange}
                style={{marginRight: ".5rem"}}
            />
            <TextField
                name="lName"
                label="Lastname"
                value={user.lName}
                onChange={onChange}
            />
        </div>
        <TextField
          name="username"
          label="Username"
          value={user.username}
          onChange={onChange}
          
          helperText={errors.username}
        />
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
          onChange={onPwChange}
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

        {password && <PasswordStrengthBar password={password} />}
        <TextField
          type={type}
          name="pwconfirm"
          label="ConfirmPassword"
          value={user.pwconfirm}
          onChange={onChange}
          helperText={errors.pwconfirm}
          error = {errors.pwconfirm}
        />
        <TextField
          name="phone"
          label="Phone Number"
          value={user.phone}
          onChange={onChange}
          helperText={errors.phone}
        />
        <br />
        <Button className="signUpSubmit" variant="contained" color="primary" type="submit">
            SignUp
        </Button>
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
