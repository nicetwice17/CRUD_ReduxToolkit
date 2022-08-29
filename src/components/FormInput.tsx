import React from "react";

interface InputInterface {
    onChange: (event: any) => void,
    placeholder: string,
    required: boolean,
    labelClass: string,
    inputClass: string,
    fields: any,
    fieldName: string,
    type: string,
    valueName: string

}

export const FormInput = (props: InputInterface) => {

    const {
        onChange,
        placeholder,
        required,
        labelClass,
        inputClass,
        fields,
        fieldName,
        type,
        valueName,
    } = props

    return  (
        <label className={labelClass}>
            {fieldName[0].toUpperCase() + fieldName.slice(1)}
            <input
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className={inputClass}
                type={type}
                name={valueName}
                value={fields[valueName]}
            />
        </label>
    )
}