import React from "react"
import style from "./../components/Users.module.scss"
export const UserCreateUpdateModal = (props) => {

    const {
        createModal,
        onChange,
        onCancel,
        onSubmit,
        fields
    } = props

    const formType = createModal ? 'create' : 'update'

    return <div className={style.modal_overlay}>
        <div className={style.user_modal}>
            <h4 className={style.form_title}>
                {createModal ? 'Создание пользователя' : 'Редактирование пользователя'}
            </h4>
            <form onSubmit={(data) => onSubmit(formType, data)}>
            <span className={style.form_row}>
                <label className={style.form_label}>
                    First name:
                    <input
                        onChange={onChange}
                        required placeholder="Please enter first name"
                        className={style.form_input}
                        type="text"
                        name="first_name"
                        value={fields.first_name}
                    />
                </label>
                <label className={style.form_label}>
                    Last name:
                    <input
                        onChange={onChange}
                        required
                        placeholder="Please enter last name"
                        className={style.form_input}
                        type="text"
                        name="last_name"
                        value={fields.last_name}
                    />
                </label>
            </span>
                <span className={style.form_row}>
                <label className={style.form_label}>
                    Email:
                    <input
                        onChange={onChange}
                        required
                        placeholder="Please enter email"
                        className={style.form_input}
                        type="email"
                        name="email"
                        value={fields.email}
                    />
                </label>
                 <label className={style.form_label}>
                    Avatar:
                    <input
                        onChange={onChange}
                        placeholder="Please load file"
                        className={[style.form_input, style.form_input_file].join(' ')}
                        type="file" name="avatar"
                    />
                </label>
            </span>
               <div className={style.btn_wrapper}>
                   <button onClick={onCancel} className={style.action_btn}>Cancel</button>
                   <button className={style.action_btn} type="submit">Ok</button>
               </div>
            </form>
        </div>
    </div>
}