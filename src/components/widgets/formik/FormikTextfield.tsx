import { styled } from "@mui/material/styles";
import { Box, InputBase, Typography } from "@mui/material";
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

const Input = styled(InputBase)(({ theme }) => ({
  height: "40px",
  width: "100%",
  padding: "10px",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: "600",
  border: "1px solid #1f2022",
  color: "#1f2022",
  borderRadius: "6px",

  "::placeholder": {
    color: "grayText",
  },
}));

const FormikTextfield: FC<PropTypes> = ({
  label,
  name,
  placeholder,
  isTouched,
  handleBlur,
  handleChange,
  value,
  error,
  inputType,
}) => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "600" }}
        color="#1f2022"
      >
        {label}
      </Typography>
      <Input
        fullWidth
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        error={Boolean(isTouched && error)}
        type={inputType || "text"}
      />
      {Boolean(isTouched && error) && (
        <Typography variant="caption" color="red">
          {isTouched && error}
        </Typography>
      )}
    </Box>
  );
};

export default FormikTextfield;
