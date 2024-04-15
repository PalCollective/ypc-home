// TextAreaField.tsx
import React from "react";

interface TextAreaFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string; 
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  required = false,
  className, 
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <textarea
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

export default TextAreaField;
