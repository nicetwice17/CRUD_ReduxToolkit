export interface InputInterface {
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