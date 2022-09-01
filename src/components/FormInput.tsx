import React from "react";
import {InputInterface} from "./interfaces/interfaces"

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