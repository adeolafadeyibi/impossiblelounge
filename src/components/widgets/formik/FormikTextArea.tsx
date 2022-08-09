import { TextField } from "@mui/material";
import { FC } from "react";

interface PropTypes {
  isTouched: boolean;
  name: string;
  label: string;
  placeholder?: string;
  handleBlur: any;
  handleChange: any;
  value: string;
  error?: any;
  inputType?: string;
}

const FormikTextArea: FC<PropTypes> = ({
  label,
  name,
  placeholder,
  isTouched,
  handleBlur,
  handleChange,
  value,
  error,
}) => {
  return (
    <TextField
      fullWidth
      multiline
      label={label}
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      error={Boolean(isTouched && error)}
      helperText={isTouched && error}
      type="text"
    />
  );
};

export default FormikTextArea;
