import React from "react"
import style from "../Users.module.scss"
import {deleteUser} from "../../../../features/users/usersSlice";
import {UserItemInterfaceUser} from "../../interfaces/interfaces";

export const UserItem = (props: UserItemInterfaceUser) => {
    const { avatar, email, first_name, last_name, id } = props.user
    const { dispatch, onOpenEditModal, entityId } = props

    return <div key={id} className={style.user_item_wrapper}>
        <span className={style.user_avatar}>
            <img src={avatar} alt="#"/>
        </span>
        <span className={style.user_name}>{first_name} {last_name}</span>
        <span className={style.user_email}>{email}</span>
        <div className={style.btn_wrapper}>
            <button className={style.action_btn} onClick={() => onOpenEditModal('update', id)}>Edit</button>
            <button className={style.action_btn} onClick={() => dispatch(deleteUser(entityId))}>Delete</button>
        </div>
    </div>
}