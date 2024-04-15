import React, { useState, useEffect } from "react";
import formStyles from "./form.module.css";
import { InputField, TextAreaField, DropdownField, CheckboxField, DependentField } from "./fields";
// import { getAccessToken, retrieveData } from "./mongoDBservice";
import formConfig from "./sampleData/formConfig.json";

interface FormData {
    [key: string]: string | boolean | object;
}

interface FieldConfig {
    type: "input" | "textarea" | "checkbox" | "dropdown" | "dependent";
    label: string;
    id: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    options?: { value: string; label: string }[];
    dependency?: { field: string; value: string };
}

const FormContainer: React.FC<{
    user: string;
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}> = ({ user, formData, handleChange, handleSubmit }) => {

//Mongo Db Handling
//     const [formConfig, setFormConfig] = useState<FieldConfig[]>([]);

//     useEffect(() => {
//         const fetchDataAndAccessDocument = async () => {
//             try {
//                 const accessToken: string = await getAccessToken();
//                 const form: any = await retrieveData("forms","formConfig",user,accessToken);
//                 const formConfigData = form.document;
//                 setFormConfig(formConfigData.fields);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchDataAndAccessDocument();
//     }, []);
//End Mongo Db Handling

    return (
        <div className={formStyles.formContainer}>
            <form onSubmit={handleSubmit} className={formStyles.formSection}>
                {formConfig.fields.map((field: FieldConfig | any, index: number) => {
                    switch (field.type) {
                        case "input":
                            return (
                                <InputField
                                    key={field.id}
                                    label={field.label}
                                    id={field.id}
                                    name={field.name}
                                    type={field.type}
                                    value={formData[field.name] as string}
                                    onChange={handleChange}
                                    required={field.required}
                                    className={formStyles[field.className || ""]}
                                />
                            );
                        case "textarea":
                            return (
                                <TextAreaField
                                    key={field.id}
                                    label={field.label}
                                    id={field.id}
                                    name={field.name}
                                    value={formData[field.name] as string}
                                    onChange={handleChange}
                                    required={field.required}
                                    className={formStyles[field.className || ""]}
                                />
                            );
                        case "checkbox":
                            return (
                                <CheckboxField
                                    key={field.id}
                                    label={field.label}
                                    id={field.id}
                                    name={field.name}
                                    checked={formData[field.name] as boolean}
                                    onChange={handleChange}
                                    required={field.required}
                                    className={formStyles[field.className || ""]}
                                />
                            );
                        case "dropdown":
                            return (
                                <DropdownField
                                    key={field.id}
                                    label={field.label}
                                    id={field.id}
                                    name={field.name}
                                    options={field.options || []}
                                    value={formData[field.name] as string}
                                    onChange={handleChange}
                                    required={field.required}
                                    className={formStyles[field.className || ""]}
                                />
                            );
                        case "dependent":
                            if (formData[field.dependency!.field] === field.dependency!.value) {
                                return (
                                    <DependentField
                                        key={field.id}
                                        fieldType={field.dependency.type}
                                        label={field.label}
                                        id={field.id}
                                        name={field.name}
                                        options={field.options || []}
                                        value={formData[field.name] as string}
                                        onChange={handleChange}
                                        required={field.required}
                                        className={formStyles[field.className || ""]}
                                    />
                                );
                            }
                        default:
                            return null;
                    }
                })}
                <input type="hidden" name="location" value={JSON.stringify(formData.location)} />
                <button type="submit" className={formStyles.formButton}>Submit</button>
            </form>
        </div>
    );
};

export default FormContainer;
