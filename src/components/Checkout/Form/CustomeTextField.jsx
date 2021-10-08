import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required , type ,defaultValue  }) {
  const { control } = useFormContext();
  const isError = false;
 
  return (
    <Grid item xs={12} sm={6} lg={12}>
      <Controller
        render = {({field: { onChange, onBlur, value, name}}) => (
          <TextField type={type} style={{width: "100%"}} onKeyDown={(event) => {if (type == "number" && event.keyCode == 69) event.preventDefault()}} onChange={onChange} 
          required={required} id="standard-required" label={label.charAt(0).toUpperCase() + label.slice(1)} defaultValue={defaultValue ? defaultValue : ""}/>
        )}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
        
      />
    </Grid>
  );
}

export default FormInput;