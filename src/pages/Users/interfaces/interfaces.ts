//User modal intefaces
import {AppDispatch} from "../../../store/store";

interface PropFieldsInteface {
    first_name: string,
    last_name: string,
    email: string,
    avatar: string
}


export interface UserModalInterface {
    createModal: (type: string, value: string) => string | object ,
    onChange: (event: any) => void,
    onCancel: () => void,
    onSubmit: (type: string, data: object) => void,
    fields: PropFieldsInteface
}

//User list interfaces
export interface UserListInterface {
    users: {
        ids: [],
        entities: []
    },
    dispatch: AppDispatch,
    onOpenModal: (type: string) => void
}

//User item interface

export interface UserItemInterfaceUser {
    user: {
        avatar: string,
        email: string,
        first_name: string,
        last_name: string,
        id: number
    },
    dispatch: AppDispatch,
    onOpenEditModal: (type: string, value: number) => void,
    entityId: number
}

