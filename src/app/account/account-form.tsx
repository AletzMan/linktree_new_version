'use client'
import { useCallback, useEffect, useState } from 'react'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/app/types/supabase'
import styles from "./account.module.css"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { EditIcon, SaveIcon, SettingsIcon, SignOutIcon, UserIcon, ViewIcon } from '../constants/svg'
import Link from 'next/link'
import SnackBar from '../components/SnackBar/SnackBar'
import { ConfigSnack, FormValue, TypeAlert } from '../types/types'

const emptySettings: FormValue = {
    backgroundColor: null,
    fontColor: null,
    fontHighColor: null
}



export default function AccountForm({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [editProfile, setEditProfile] = useState(false)
    const [fullname, setFullname] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [website, setWebsite] = useState<string | null>(null)
    const [avatar_url, setAvatarUrl] = useState<string | null>(null)
    const [settings, setSettings] = useState<FormValue>(emptySettings)
    const [open, setOpen] = useState(false)
    const [configSnack, setConfigSnack] = useState<ConfigSnack>({ message: '', type: TypeAlert.Info, open: false })
    const router = useRouter()
    const user = session?.user


    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`full_name, username, website, avatar_url, settings: settings`)
                .eq('id', user?.id)
                .single()

            if (error && status !== 406) {
                throw error
            }
            console.log(data)
            if (data) {
                setFullname(data.full_name)
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
                setSettings(data.settings)
                if (session?.user?.user_metadata !== null) {
                    setAvatarUrl(session?.user.user_metadata.avatar_url)
                }
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

    async function updateProfile({
        username,
        website,
        avatar_url,
    }: {
        username: string | null
        fullname: string | null
        website: string | null
        avatar_url: string | null
    }) {
        if (editProfile) {
            try {
                setLoading(true)
                setEditProfile(false)
                let { error } = await supabase.from('profiles').upsert({
                    id: user?.id as string,
                    full_name: fullname,
                    username,
                    website,
                    avatar_url,
                    updated_at: new Date().toISOString(),
                })
                if (error) throw error
                setOpen(true)
                setConfigSnack({ message: 'Perfil actualizado', type: TypeAlert.Success, open: true })
                //alert('Perfil actualizado')
            } catch (error) {
                setOpen(true)
                setConfigSnack({ message: 'Error descargando los datos!', type: TypeAlert.Error, open: true })
                //alert('Error descargando los datos!')
            } finally {
                setLoading(false)
            }
        } else {
            setEditProfile(true)

        }
    }

    return (
        <div className={`form-widget `}>
            <div className={styles.form} style={{ backgroundColor: `${settings.backgroundColor}` }}>
                <Link className={styles.form__ViewButton} href={`/profile/[username]`}
                    as={`/profile/${username}`} >
                    <ViewIcon className={styles.form__ViewIcon} />
                </Link>
                <h1 className={styles.form__title} style={{ color: `${settings.fontColor}` }}>Perfil</h1>
                <div className={styles.form__containerPhoto} style={{ borderColor: `${settings.fontHighColor}` }}>
                    {editProfile && <button className={styles.form__EditIcon}>
                        <EditIcon className='' />
                    </button>}
                    <div className={styles.form__picture}>
                        {avatar_url && <Image className={styles.fomr_photo} src={`${avatar_url}`} width={120} height={120} alt={`avatar from ${fullname}`} />}
                    </div>
                </div>
                <div className={styles.form__container}>
                    {!editProfile && <h2 className={styles.form__containerName} style={{ color: `${settings.fontColor}` }}>{fullname}</h2>}
                    {editProfile && <input
                        className={styles.form__input}
                        id="fullName"
                        type="text"
                        value={fullname || ''}
                        onChange={(e) => setFullname(e.target.value)}
                    />}
                </div>
                <div className={styles.form__container}>
                    {!editProfile && <h3 className={styles.form__username} style={{ color: `${settings.fontHighColor}` }}>{username}</h3>}
                    {editProfile && <input
                        className={styles.form__input}
                        id="username"
                        type="text"
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                    />}
                </div>
                <div className={styles.form__container}>
                    <span className={styles.form__email} style={{ color: `${settings.fontColor}95` }}>{session?.user.email}</span>
                    {/*<input className={styles.form__input} id="email" type="text" value={session?.user.email} disabled />*/}
                </div>


                <div className={styles.form__container}>
                    {!editProfile && <p className={styles.form__description} style={{ color: `${settings.fontColor}BC` }}>{website || ''}</p>}
                    {editProfile && <textarea
                        className={styles.form__textarea}
                        id="website"
                        value={website || ''}
                        onChange={(e) => setWebsite(e.target.value)}
                    />}
                </div>
                <form action="/auth/signout" method="post">
                    <div className={`${styles.containerButton} ${editProfile && styles.containerButtonPressed}`} onClick={() => updateProfile({ fullname, username, website, avatar_url })}>
                        {!editProfile && <UserIcon className={styles.buttonIcon} />}
                        {editProfile && <SaveIcon className={styles.buttonIcon} />}
                        <span className={styles.buttonTitle}>{!editProfile ? 'Editar mi perfil' : 'Guardar'}</span>
                        <span className={styles.buttonSubtitle}>{!editProfile ? 'Actualiza tu información personal' : 'Guardar las modificaciones realizadas.'}</span>
                    </div>
                    <Link className={styles.containerButton} href={'/links'}>
                        <SettingsIcon className={styles.buttonIcon} />
                        <span className={styles.buttonTitle}>Configuración</span>
                        <span className={styles.buttonSubtitle}>Modifica, añade tus enlaces y personaliza la apariencia de tu tarjeta</span>
                    </Link>
                    <div className={styles.containerButton}>
                        <button className={styles.buttonForm} type="submit"> </button>
                        <SignOutIcon className={styles.buttonIcon} />
                        <span className={styles.buttonTitle}>Cerrar sesión</span>
                        <span className={styles.buttonSubtitle}>Salir de tu cuenta</span>
                    </div>
                </form>
            </div>
            {<SnackBar message={configSnack?.message} type={configSnack.type} open={open} setOpen={setOpen} />}
        </div>
    )
}