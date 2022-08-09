import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import { FC } from "react";

interface PropTypes {
  isTouched: boolean;
  name: string;
  label: string;
  placeholder?: string;
  handleBlur: any;
  setFieldValue: any;
  value: string;
  error?: any;
  maxDate?: Date;
  minDate?: Date;
}

const FormikDateTextfield: FC<PropTypes> = ({
  label,
  name,
  placeholder,
  isTouched,
  handleBlur,
  setFieldValue,
  value,
  error,
  maxDate,
  minDate,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label={label}
        onChange={(val: any) =>
          setFieldValue(name, new Date(val).toISOString())
        }
        minDate={minDate}
        maxDate={maxDate}
        value={value}
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            onBlur={handleBlur}
            placeholder={placeholder}
            fullWidth
            error={Boolean(isTouched && error)}
            helperText={isTouched && error}
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default FormikDateTextfield;
