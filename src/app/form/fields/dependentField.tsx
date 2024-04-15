import { InputField, TextAreaField, DropdownField, CheckboxField } from "../fields";
interface DependentFieldProps {
  fieldType: "text" | "textarea" | "dropdown"; 
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  className?: string;
  options?: { value: string; label: string }[]; 
}

const DependentField: React.FC<DependentFieldProps> = ({
  fieldType,
  label,
  id,
  name,
  value,
  onChange,
  required = false,
  className,
  options = [],
}) => {
  switch (fieldType) {
    case "text":
      return (
        <InputField
          label={label}
          id={id}
          name={name}
          type="text"
          value={value}
          onChange={onChange}
          required={required}
          className={className}
        />
      );
    case "textarea":
      return (
        <TextAreaField
          label={label}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={className}
        />
      );
    case "dropdown":
      return (
        <DropdownField
          label={label}
          id={id}
          name={name}
          options={options}
          value={value}
          onChange={onChange}
          required={required}
          className={className}
        />
      );
    default:
      throw new Error(`Unsupported field type: ${fieldType}`);
  }
};

export default DependentField;
