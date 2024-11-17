import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { Field } from "formik";

type InputProps = {
  name: string;
  label: string;
  type?: string;
  options?: any[];
};

export default function InputField({
  name,
  label,
  type = "text",
  options,
}: InputProps) {
  if (type === "select") {
    return (
      <Field name={name}>
        {({ field, meta }: any) => (
          <FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
            <InputLabel>{label}</InputLabel>
            <Select {...field} label={label}>
              {options?.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Field>
    );
  }

  if(type === "checkbox") {
    return <CheckboxField name={name} label={label} />
  }

  return (
    <Field name={name}>
      {({ field, meta }: any) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          type={type}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  );
}

type CheckboxProps = {
  name: string;
  label: string;
};

const CheckboxField = ({ name, label }: CheckboxProps) => {
  return (
    <Field name={name}>
      {({ field, meta }: any) => (
        <>
          <FormControlLabel
            control={<Checkbox {...field} />}
            label={label}
            // error={meta.touched && Boolean(meta.error)}
          />
          {meta.touched && Boolean(meta.error) && (
            <FormHelperText>{meta.error}</FormHelperText>
          )}
        </>
      )}
    </Field>
  );
};
