import React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file';
  description?: string;
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  description,
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className='label'>{label}</FormLabel>
        <FormControl>
          <Input
            className='input'
            placeholder={placeholder}
            type={type}
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;

// import React from 'react';
// import { Controller, FieldValues, Path } from 'react-hook-form';
// import { FormItem } from './ui/form';
// interface FormFieldProps<T extends FieldValues> {

//   control: control<T>;
//   name: Path<T>;
//   label: string;
//   placeholder? string;
//   type?: 'text' | 'email' | 'password' | 'file'

// }

// const FormField = ({control, name, label, placeholder, type = "text"}:
//    FormFieldProps<T>) => (

//   <Controller
//    name={name}
//     control={control}
//     render={({ field })
// => (

//   <FormItem>
//     <FormItem>
//       <FormLabel className="label">Username</FormLabel>
//       <FormControl>
//         <Input placeholder='shadcn' {...field} />
//       </FormControl>
//       <FormDescription>
//         This is your public display name.
//       </FormDescription>
//       <FormMessage />
//     </FormItem>
// )}

// export default FormField;
