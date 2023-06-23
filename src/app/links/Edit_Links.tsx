'use client'
import { Database } from '@/app/types/supabase'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import styles from './links.module.css'
import { UserInfo, Network, TypeAlert, ConfigSnack, FormValue } from '@/app/types/types'
import { AddIcon, ArrowBackIcon, ArrowIcon, CloseIcon, ColorIcon, DeleteIcon, EditIcon, LoadingIcon, Logo, SaveIcon, SettingsIcon, UpdateIcon } from '../constants/svg'
import Link from 'next/link'
import LinkNetworkEdit from '../components/ComboBox/LinkNetworkEdit'
import SnackBar from '../components/SnackBar/SnackBar'
import { Loading } from '../components/Loading/Loading'
import { defaultSettings } from '../constants/constants'
import Avatar from '../account/avatar'

const emptyNetwork: Network = [{
    application: 0,
    url: "",
    username: ''
}]

const emptySettings: FormValue = {
    backgroundColor: null,
    fontColor: null,
    fontHighColor: null
}

//const newUser: UserInfo = {fullName: '', username: '', avatar_url: '', website: ''}
export default function EditLinks({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState<boolean>(true)
    const [viewModal, setViewModal] = useState({ view: false, mode: 0, index: 0 })
    const [open, setOpen] = useState<boolean>(false)
    const [viewColorPicker, setViewColorPicker] = useState<boolean>(false)
    const [configSnack, setConfigSnack] = useState<ConfigSnack>({ message: '', type: TypeAlert.Info, open: false })
    const [supabaseWrite, setSupabaseWrite] = useState<boolean>(false)
    const [datalink, setDataLink] = useState<Network[0]>({ application: 0, url: '', username: '' })
    const [userData, setUserData] = useState<UserInfo>({ id: '', fullName: '', username: '', avatar_url: '', website: '', links: emptyNetwork, settings: emptySettings })
    const user = session?.user

    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`full_name, username, website, avatar_url, links:  links, settings: settings`)
                .eq('id', user?.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUserData({ id: userData.id, fullName: data?.full_name, username: data?.username, avatar_url: data?.avatar_url, website: data?.website, links: data?.links, settings: data?.settings || defaultSettings })
            }
        } catch (error) {
            alert('Error descargando los datos!')
        } finally {
            setLoading(false)
        }
    }, [user, supabase])

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    const HandleAddLink = (view: boolean) => {
        setDataLink({ application: 0, url: '', username: '' })
        setViewModal({ view: view, mode: 0, index: 0 })
        if (!view) {
            setOpen(false)
        }
    }

    const AddLink = () => {
        setSupabaseWrite(true)
        const prevLinks: Network = [...userData?.links || emptyNetwork]
        const newLink: Network[0] = {
            application: datalink.application,
            url: datalink.url,
            username: datalink.username
        }
        prevLinks.push(newLink)
        const newUserInfo: UserInfo = {
            id: userData.id,
            fullName: userData.fullName,
            username: userData.username,
            avatar_url: userData.avatar_url,
            website: userData.website,
            links: prevLinks,
            settings: userData.settings
        }
        setUserData(newUserInfo)
    }

    const EditLink = () => {
        console.log(datalink.application)
        console.log(viewModal.index)
        setSupabaseWrite(true)
        const prevLinks: Network = [...userData.links]
        prevLinks[viewModal.index].application = datalink.application
        prevLinks[viewModal.index].url = datalink.url
        prevLinks[viewModal.index].username = datalink.username
        const newUserInfo: UserInfo = {
            id: userData.id,
            fullName: userData.fullName,
            username: userData.username,
            avatar_url: userData.avatar_url,
            website: userData.website,
            links: prevLinks,
            settings: userData.settings
        }
        setUserData(newUserInfo)
    }

    useEffect(() => {
        if (supabaseWrite) {
            UpdateLinks()
        }
    }, [userData.links])

    const UpdateLinks = async () => {
        const { error, data } = await supabase
            .from('profiles')
            .update(
                {
                    links: userData.links
                })
            .eq('id', user?.id)
            .select()
        console.log(error, data)
        if (error) {
            setConfigSnack({ message: error.message, type: TypeAlert.Error, open: true })
        } else {
            if (data.length > 0) {
                setConfigSnack({ message: viewModal.mode === 0 ? 'Link agregado correctamente' : 'Actualizado correctamente', type: TypeAlert.Success, open: true })
                setOpen(true)
            }
        }
        setSupabaseWrite(false)
        return error
    }

    const HandleDeleteLink = (index: number) => {
        setSupabaseWrite(true)
        const newLinks: Network = [...userData.links]
        const deleteLink = newLinks.filter(link => link.application !== newLinks[index].application)
        const newUserInfo: UserInfo = {
            id: userData.id,
            fullName: userData.fullName,
            username: userData.username,
            avatar_url: userData.avatar_url,
            website: userData.website,
            links: deleteLink as Network,
            settings: userData.settings
        }
        setUserData(newUserInfo)
    }

    const HandleEditLink = (index: number) => {
        setDataLink(userData.links[index])
        setViewModal({ view: true, mode: 1, index: index })
    }

    const HandleSaveLink = () => {
        if (datalink.application === 0) {
            setOpen(true)
            setConfigSnack({ message: 'Seleccione una aplicación de la lista', type: TypeAlert.Warning, open: true })
            return
        } else if (datalink.url === '') {
            setOpen(true)
            setConfigSnack({ message: 'El campo de URL está vacío', type: TypeAlert.Warning, open: true })
            return
        } else {
            //setOpen(true)
            if (viewModal.mode === 0) {
                AddLink()
                setOpen(true)
            } else {
                EditLink()
            }
        }
    }

    const HandleSaveColors = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const colorsData = new FormData(event.currentTarget)
        const colors: FormValue = {
            backgroundColor: colorsData.get('backgroundColor'),
            fontColor: colorsData.get('fontColor'),
            fontHighColor: colorsData.get('fontHighColor'),
        }
        console.log(colors)
        UpdateSettings(colors)
    }

    const UpdateSettings = async (dataSettings: FormValue) => {
        const { error, data } = await supabase
            .from('profiles')
            .update(
                {
                    settings: dataSettings
                })
            .eq('id', user?.id)
            .select()

        console.log(error, data)

        if (error) {
            setConfigSnack({ message: error.message, type: TypeAlert.Error, open: true })
        } else {
            if (data.length > 0) {
                setConfigSnack({ message: 'Configuración actualizada', type: TypeAlert.Success, open: true })
                setOpen(true)
                setUserData({ id: data[0]?.id, fullName: data[0]?.full_name, username: data[0]?.username, avatar_url: data[0].avatar_url, website: data[0]?.website, links: data[0]?.links, settings: data[0]?.settings })

            }
        }
        return error
    }


    return (
        <section className={styles.card}>
            {!loading && <>
                <nav className={styles.card__nav}>
                    <Link className={styles.card__backbutton} href='/account'>
                        <ArrowBackIcon className='' />
                    </Link>
                    <Logo className='' />
                    <div className={styles.card__container}>
                        <h2 className={styles.card__username}>{userData.username}</h2>
                        <Avatar size={40} uid={userData?.id} url={userData?.avatar_url} onUpload={() => null} settings={userData?.settings} isEdit={false} />

                    </div>
                </nav>
                <div className={styles.link__buttons}>
                    <button className={styles.link__add} onClick={() => HandleAddLink(true)}>
                        <AddIcon className='' />
                    </button>
                    <button className={`${styles.link__color} ${viewColorPicker && styles.link__colorActive}`} onClick={() => setViewColorPicker(prev => !prev)}>
                        <ColorIcon className={styles.link__colorIcon} />
                    </button>
                    {viewColorPicker &&
                        <form className={styles.link__settings} onSubmit={HandleSaveColors}>
                            <div className={styles.link__settingsOptions}>
                                <input className={styles.link__settingsColor} defaultValue={userData?.settings.backgroundColor?.toString()} name='backgroundColor' type='color' />
                                <span className={styles.link__settingsText}>Color Fondo</span>
                            </div>
                            <div className={styles.link__settingsOptions}>
                                <input className={styles.link__settingsColor} defaultValue={userData?.settings.fontColor?.toString()} name='fontColor' type='color' />
                                <span className={styles.link__settingsText}>Color Fuente</span>
                            </div>
                            <div className={styles.link__settingsOptions}>
                                <input className={styles.link__settingsColor} defaultValue={userData?.settings.fontHighColor?.toString()} name='fontHighColor' type='color' />
                                <span className={styles.link__settingsText}>Color de Realce</span>
                            </div>
                            <button className={styles.link__settingsSave} type='submit'>Guardar</button>
                        </form>}
                </div>
                {!userData.links &&
                    <div className={styles.emptyLink}>
                        <ArrowIcon className={styles.emptyLink__icon} />
                        <span className={styles.emptyLink__message}>Agrega enlaces de tus redes a tu perfil</span>
                    </div>}
                <div className={`${styles.card__link} ${styles.link}`}>

                    {userData?.links?.map((link, index) => (
                        <div key={crypto.randomUUID()} className={styles.link__network}>
                            <LinkNetworkEdit typeLink={link} disabled setDataLink={setDataLink} />
                            <button className={styles.link__editButton} onClick={() => HandleEditLink(index)} title='Editar'>
                                <EditIcon className={styles.link__deleteIcon} />
                            </button>
                            <button className={styles.link__deleteButton} onClick={() => HandleDeleteLink(index)} title='Eliminar'>
                                <DeleteIcon className={styles.link__deleteIcon} />
                            </button>
                        </div>
                    ))}
                </div>

                {viewModal.view &&
                    <section className={styles.modaladd}>
                        <h3 className={styles.modaladd__title}>{viewModal.mode === 0 ? 'Agregar Link' : 'Editar Link'}</h3>
                        <div className={styles.modaladd__link}>
                            <LinkNetworkEdit typeLink={datalink} disabled={false} setDataLink={setDataLink} />
                            <div className={styles.modaladd__buttons}>
                                <button className={styles.modaladd__button} onClick={() => HandleAddLink(false)} >
                                    Cancelar
                                </button>
                                <button className={styles.modaladd__button} onClick={() => HandleSaveLink()}>
                                    {viewModal.mode === 0 ? 'Agregar' : 'Guardar'}
                                </button>
                            </div>
                        </div>
                    </section>}
            </>}
            {<SnackBar message={configSnack?.message} type={configSnack.type} open={open} setOpen={setOpen} />}
            {loading && <Loading />}
        </section >
    )

}