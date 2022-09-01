import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux";
import {UsersList} from "./components/UsersList";
import {createUser, fetchUsers, updateUser} from "../../features/users/usersSlice";
import {UserCreateUpdateModal} from "./modals/UserCreateUpdateModal";
import style from "../Users/components/Users.module.scss"
import {RootState, useAppDispatch} from "../../app/store";



const initialFormData = Object.freeze({
    first_name: "",
    last_name: "",
    email: "",
    avatar: ""
});

export const UsersContainer = () => {

    const [createUserModal, setCreateUserModal]: any = useState(false);
    const [updateUserModal, setUpdateUserModal]: any = useState(null);
    const [formData, setChangesFormData] = useState(initialFormData);

    const users: any = useSelector((state: RootState) => state.users)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const onCancel = () => {
        setCreateUserModal(null)
        setUpdateUserModal(null)
        setChangesFormData(initialFormData)
    }

    const onOpenCreateUpdateUserModal = (type: string, value = '') => {
        if(type === 'create') {
            setCreateUserModal(true)
        } else if (type === 'update') {
            const currentUser = users.entities[value]
            setUpdateUserModal(currentUser)
            setChangesFormData({...formData, ...currentUser})
        }
    }

    const handleFormDataChange = (event: any) => {
            setChangesFormData({
                ...formData,
                [event.target.name]: event.target.value.trim()
            })
    }

    const onSubmitUserModal = (type: string, value: any) => {
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