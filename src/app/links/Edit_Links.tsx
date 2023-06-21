'use client'
import { Database } from '@/app/types/supabase'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import styles from './links.module.css'
import { UserInfo, Network, TypeAlert, ConfigSnack } from '@/app/types/types'
import { AddIcon, ArrowBackIcon, CloseIcon, DeleteIcon, EditIcon, LoadingIcon, Logo, SaveIcon, SettingsIcon, UpdateIcon } from '../constants/svg'
import Link from 'next/link'
import LinkNetworkEdit from '../components/ComboBox/LinkNetworkEdit'
import SnackBar from '../components/SnackBar/SnackBar'

const emptyNetwork: Network = [{
    application: 0,
    url: ""
}]

//const newUser: UserInfo = {fullName: '', username: '', avatar_url: '', website: ''}
export default function EditLinks({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [viewModal, setViewModal] = useState({ view: false, mode: 0, index: 0 })
    const [open, setOpen] = useState(false)
    const [configSnack, setConfigSnack] = useState<ConfigSnack>({ message: '', type: TypeAlert.Info, open: false })
    const [supabaseWrite, setSupabaseWrite] = useState<boolean>(false)
    const [datalink, setDataLink] = useState<Network[0]>({ application: 0, url: '' })
    const [userData, setUserData] = useState<UserInfo>({ fullName: '', username: '', avatar_url: '', website: '', links: emptyNetwork })
    const user = session?.user

    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`full_name, username, website, avatar_url, links:  links`)
                .eq('id', user?.id)
                .single()

            if (error && status !== 406) {
                throw error
            }
            if (data) {
                const imgURL = session?.user?.user_metadata !== null ? session?.user.user_metadata.avatar_url : data?.avatar_url
                setUserData({ fullName: data?.full_name, username: data?.username, avatar_url: imgURL, website: data?.website, links: data?.links })
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
        setDataLink({ application: 0, url: '' })
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
            url: datalink.url
        }
        prevLinks.push(newLink)
        const newUserInfo: UserInfo = {
            fullName: userData.fullName,
            username: userData.username,
            avatar_url: userData.avatar_url,
            website: userData.website,
            links: prevLinks
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
        const newUserInfo: UserInfo = {
            fullName: userData.fullName,
            username: userData.username,
            avatar_url: userData.avatar_url,
            website: userData.website,
            links: prevLinks
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
            fullName: userData.fullName,
            username: userData.username,
            avatar_url: userData.avatar_url,
            website: userData.website,
            links: deleteLink as Network
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


    return (
        <section className={styles.card}>
            {!loading && <>
                <nav className={styles.card__nav}>
                    <Link className={styles.card__backbutton} href='/account'>
                        <ArrowBackIcon className='' />
                    </Link>
                    <Logo />
                    <div className={styles.card__container}>
                        <h2 className={styles.card__username}>{userData.username}</h2>
                        <div className={styles.card__containerPhoto}>
                            <div className={styles.card__picture}>
                                <Image className={styles.card__photo} src={`${userData.avatar_url}`} width={35} height={35} alt={`avatar from ${userData.fullName}`} />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={styles.link__buttons}>
                    <button className={styles.link__add} onClick={() => HandleAddLink(true)}>
                        <AddIcon className='' />
                    </button>
                    <button className={styles.link__update}>
                        <SaveIcon className='' />
                    </button>
                </div>
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
            {loading && <><LoadingIcon className={styles.iconLoading} /> <span className={styles.textLoading}>Loading...</span></>}
        </section >
    )

}