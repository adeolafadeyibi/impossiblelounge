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
  width: "100%",
  fontFamily: "poppins !important",
  fontSize: "16px",
  background: "#2A2A2A",
  lineHeight: "25px",
  fontWeight: "500",
  padding: "16px",
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
    <Box className="flex flex-col flex-1">
      <Typography
        variant="inherit"
        className="text-[14px] leading-[21px] text-grey_text !mb-[9px]"
      >
        {label}
      </Typography>
      <Input
        className={`h-14 ${
          Boolean(isTouched && error)
            ? "border border-red-500"
            : "border border-[#2A2A2A] focus-within:border-secondary focus-within:outline-1 focus-within:outline-secondary"
        } `}
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