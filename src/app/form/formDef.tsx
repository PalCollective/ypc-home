interface FieldConfig {
  type: string;
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  options?: { value: string; label: string }[]; 
  dependency?: {
      field: string;
      value: string;
      type: string;
  };
}

interface FormFields {
  [key: string]: string | boolean | object;
}

const jsonConfig: { fields: FieldConfig[] } = require('./sampleData/formConfig.json');

const formFields: FormFields = {};
jsonConfig.fields.forEach(field => {
  formFields[field.name] = field.type === 'checkbox' ? false : '';
});


const emptyForm: FormFields = { ...formFields };

export { emptyForm };
