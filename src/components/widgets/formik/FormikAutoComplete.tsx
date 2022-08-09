import { Autocomplete, TextField } from "@mui/material";
import { find } from "lodash";
import { FC } from "react";

type Option = {
  label: string;
  value: string;
};

interface PropTypes {
  isTouched: boolean;
  name: string;
  label: string;
  handleBlur: any;
  setFieldValue: any;
  value: any;
  error?: any;
  options: Option[];
}

const FormikAutoComplete: FC<PropTypes> = ({
  label,
  name,
  isTouched,
  handleBlur,
  setFieldValue,
  value,
  error,
  options,
}) => {
  return (
    <Autocomplete
      getOptionLabel={(option: Option) => option.label}
      options={options}
      onBlur={handleBlur}
      onChange={(ev, val) => setFieldValue(name, val?.value || "")}
      value={find(options, { value }) ?? null}
      renderInput={(params): JSX.Element => (
        <TextField
          {...params}
          error={Boolean(isTouched && error)}
          helperText={isTouched && error}
          fullWidth
          name={name}
          label={label}
        />
      )}
    />
  );
};

export default FormikAutoComplete;
