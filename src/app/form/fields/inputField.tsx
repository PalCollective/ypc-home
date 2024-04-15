import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string; 
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  required = false,
  className, 
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={className} 
      />
    </div>
  );
};

export default InputField;
