export type UserInfo = {
    id: string,
    fullName: string,
    username: string,
    avatar_url: string,
    website: string,
    links: Network
    settings: FormValue
}

export type Network = [{
    application: number,
    url: string,
    username: string
}]


export enum TypeAlert {
    Error = 'error',
    Warning = 'warning',
    Info = 'info',
    Success = 'success'
}

export type ConfigSnack = {
    message: string,
    open: boolean,
    type: TypeAlert
}


export type LinkNetworkEditProps = {
    typeLink: Network[0],
    disabled: boolean,
    setDataLink: React.Dispatch<React.SetStateAction<Network[0]>>,
};

export type SnackBarStatus = {
    message: string,
    type: TypeAlert,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export type AlertDialogStatus = {
    setResponseDialog: React.Dispatch<React.SetStateAction<string>>,
    openDialog: OpenDialog,
    setOpenDialog: React.Dispatch<React.SetStateAction<OpenDialog>>,
}

export type FormValue = {
    backgroundColor: FormDataEntryValue | null,
    backgroundColorSecondary: FormDataEntryValue | null,
    fontColor: FormDataEntryValue | null,
    fontHighColor: FormDataEntryValue | null,
    radiusLink: FormDataEntryValue | null,
    bubbleEffect: FormDataEntryValue | null,
}

export type ResponseDialog = {
    response: string,
    linkSelected: number
}

export type OpenDialog = {
    open: boolean,
    linkSelected: number,
    application: number
}