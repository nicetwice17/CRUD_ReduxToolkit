import React from "react"
import style from "./../components/Users.module.scss"
import {FormInput} from "../../../components/FormInput";
import {UserModalInterface} from "../interfaces/interfaces"

export const UserCreateUpdateModal = (props: UserModalInterface) => {
    const {
        createModal,
        onChange,
        onCancel,
        onSubmit,
        fields
    } = props

    const formType: any = !createModal ? 'update' : 'create'

    const inputsData = [
        {
            placeholder: "Please enter first name",
            type: "text",
            fieldName: "first name",
            valueName: "first_name",
            required: true
        },
        {
            placeholder: "Please enter last name",
            type: "text",
            fieldName: "last name",
            valueName: "last_name",
            required: true
        },
        {
            placeholder: "Please enter email",
            type: "email",
            fieldName: "email",
            valueName: "email",
            required: true
        },
        {
            placeholder: "",
            type: "file",
            fieldName: "avatar",
            valueName: null,
            required: false
        }
    ]

    return <div className={style.modal_overlay}>
        <div className={style.user_modal}>
            <h4 className={style.form_title}>
                {!createModal ? 'Редактирование пользователя' : 'Создание пользователя'}
            </h4>
            <form onSubmit={(data) => onSubmit(formType, data)}>
            <span className={style.form_row}>
                {inputsData.map((item: any, index: number): any  => (<FormInput
                            onChange={onChange}
                            required={item.type !== "file" && true}
                            placeholder={item.placeholder}
                            labelClass={style.form_label}
                            inputClass={
                                item.type !== 'file' ?
                                    style.form_input :
                                    [style.form_input, style.form_input_file].join(' ')
                            }
                            type={item.type}
                            fieldName={item.fieldName}
                            valueName={item.valueName}
                            fields={fields}
                            key={index}
                        />
                ))}
            </span>
               <div className={style.btn_wrapper}>
                   <button onClick={onCancel} className={style.action_btn}>Cancel</button>
                   <button className={style.action_btn} type="submit">Ok</button>
               </div>
            </form>
        </div>
    </div>
}