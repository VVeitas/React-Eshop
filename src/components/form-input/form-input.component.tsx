import React from 'react';

import './form-input.styles.scss';

interface FormInputProps {
  label?: string;
  value: string;
  name: string;
  type: string;
  required: boolean;
  handleChange: (event: { target: { value: string; name: string } }) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length
            ? 'form-input-label shrink'
            : 'form-input-label'
        }`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
