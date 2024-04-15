import React from "react";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownFieldProps {
  label: string;
  id: string;
  name: string;
  options: DropdownOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  className?: string;
}

export const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  id,
  name,
  options,
  value,
  onChange,
  required = false,
  className,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={className}
      >
        <option value="" disabled hidden>
          Select
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

