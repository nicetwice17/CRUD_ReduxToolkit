import React from "react"
import style from "./Users.module.scss"
import {UserItem} from "./UserItem/UserItem";
export const UsersList = (props) => {

    const { users, dispatch, onOpenModal } = props

    return <div className={style.user_render_container}>
        {users.ids.map(user => <UserItem onOpenEditModal={onOpenModal} key={user} dispatch={dispatch} user={users.entities[user]} entityId={user} />)}
    </div>

}