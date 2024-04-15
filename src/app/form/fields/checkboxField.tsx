import React from "react";

interface CheckboxFieldProps {
  label: string;
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  id,
  name,
  checked,
  onChange,
  required = false,
  className,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
        className={className}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxField;
