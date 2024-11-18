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

type CheckboxProps = {
  name: string;
  label: string;
  size?: "small" | "medium";
};

type InputProps = {
  name: string;
  label: string;
  type?: string;
  options?: any[];
  size?: "small" | "medium";
};

export default function InputField({
  name,
  label,
  type = "text",
  options,
  size = "small",
}: InputProps) {


  
  if (type === "select") {
    return (
      <Field name={name}>
        {({ field, meta }: any) => (
          <FormControl
            size={size}
            fullWidth
            error={meta.touched && Boolean(meta.error)}
          >
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

  if (type === "checkbox") {
    return <CheckboxField size={size} name={name} label={label} />;
  }

  return (
    <Field name={name}>
      {({ field, meta }: any) => (
        <TextField
          {...field}
          label={label}
          size={size}
          fullWidth
          type={type}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  );
}

const CheckboxField = ({ name, label, size = "small" }: CheckboxProps) => {
  return (
    <Field name={name}>
      {({ field, meta }: any) => (
        <>
          <FormControlLabel
            control={<Checkbox size={size} {...field} />}
            label={label}

            // error={meta.touched && Boolean(meta.error)}
          />
          {meta.touched && Boolean(meta.error) && (
            <FormHelperText sx={{ color: (theme) => theme.palette.error.main }}>
              {meta.error}
            </FormHelperText>
          )}
        </>
      )}
    </Field>
  );
};
