import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {UsersList} from "./components/UsersList";
import {createUser, fetchUsers, updateUser} from "../../features/users/usersSlice";
import {UserCreateUpdateModal} from "./modals/UserCreateUpdateModal";
import style from "../Users/components/Users.module.scss"
const initialFormData = Object.freeze({
    first_name: "",
    last_name: "",
    email: "",
    avatar: ""
});

export const UsersContainer = () => {

    const [createUserModal, setCreateUserModal] = useState(false);
    const [updateUserModal, setUpdateUserModal] = useState(null);
    const [formData, setChangesFormData] = useState(initialFormData);

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const onCancel = () => {
        setCreateUserModal(null)
        setUpdateUserModal(null)
    }

    const onOpenCreateUpdateUserModal = (type, value = '') => {
        if(type === 'create') {
            setCreateUserModal(true)
        } else if (type === 'update') {
            const currentUser = users.entities[value]
            setUpdateUserModal(currentUser)
            setChangesFormData({...formData, ...currentUser})
        }
    }

    const handleFormDataChange = (event) => {
            setChangesFormData({
                ...formData,
                [event.target.name]: event.target.value.trim()
            })
    }

    const onSubmitUserModal = (type, value) => {
        value.preventDefault()
        if(type === 'create') {
            dispatch(createUser(formData))
        } else if (type === 'update') {
            dispatch(updateUser({id: updateUserModal.id, data: formData}))
        }
        onCancel()
    }

    return <div className={style.container_wrapper}>

            <button
                className={style.action_btn}
                onClick={() => onOpenCreateUpdateUserModal('create')}>
                Create new user
            </button>

            {(createUserModal || updateUserModal) &&
                <UserCreateUpdateModal
                    createModal={createUserModal}
                    onChange={handleFormDataChange}
                    onCancel={onCancel}
                    onSubmit={onSubmitUserModal}
                    fields={formData}
                />
            }
            <UsersList
                onOpenModal={onOpenCreateUpdateUserModal}
                dispatch={dispatch}
                users={users}
            />
    </div>
}