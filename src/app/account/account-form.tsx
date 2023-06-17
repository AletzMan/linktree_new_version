'use client'
import { useCallback, useEffect, useState } from 'react'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/app/types/supabase'
import styles from "./account.module.css"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { EditIcon, SaveIcon, SettingsIcon, SignOutIcon, UserIcon } from '../constants/constants'
import Link from 'next/link'

export default function AccountForm({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [editProfile, setEditProfile] = useState(false)
    const [fullname, setFullname] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [website, setWebsite] = useState<string | null>(null)
    const [avatar_url, setAvatarUrl] = useState<string | null>(null)
    const router = useRouter()
    const user = session?.user


    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`full_name, username, website, avatar_url`)
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
        try {
            setLoading(true)

            let { error } = await supabase.from('profiles').upsert({
                id: user?.id as string,
                full_name: fullname,
                username,
                website,
                avatar_url,
                updated_at: new Date().toISOString(),
            })
            if (error) throw error
            alert('Perfil actualizado')
        } catch (error) {
            alert('Error descargando los datos!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={`form-widget `}>
            <div className={styles.form}>
                <h1 className={styles.form__title}>Perfil</h1>
                <div className={styles.form__containerPhoto}>
                    {editProfile && <button className={styles.form__EditIcon}>
                        <EditIcon className=''/>
                    </button>}
                    <div className={styles.form__picture}>
                        {avatar_url && <Image className={styles.fomr_photo} src={`${avatar_url}`} width={120} height={120} alt={`avatar from ${fullname}`} />}
                    </div>
                </div>
                <div className={styles.form__container}>
                    {!editProfile && <h2 className={styles.form__containerName}>{fullname}</h2>}
                    {editProfile && <input
                        className={styles.form__input}                        
                        id="fullName"
                        type="text"
                        value={fullname || ''}
                        onChange={(e) => setFullname(e.target.value)}
                    />}
                </div>
                <div className={styles.form__container}>
                    {!editProfile && <h3 className={styles.form__username}>{username}</h3>}
                    {editProfile && <input
                        className={styles.form__input}
                        id="username"
                        type="text"
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                    />}
                </div>
                <div className={styles.form__container}>
                    <span className={styles.form__email}>{session?.user.email}</span>
                    {/*<input className={styles.form__input} id="email" type="text" value={session?.user.email} disabled />*/}
                </div>


                <div className={styles.form__container}>
                    {!editProfile && <p className={styles.form__description} >{website || ''}</p>}
                    {editProfile && <textarea
                        className={styles.form__textarea}
                        id="website"
                        value={website || ''}
                        onChange={(e) => setWebsite(e.target.value)}
                    />}
                </div>
                <form action="/auth/signout" method="post">
                <div className={`${styles.containerButton} ${editProfile && styles.containerButtonPressed}`} onClick={() => setEditProfile(prev => !prev)}>
                    {!editProfile && <UserIcon className={styles.buttonIcon} />}
                    {editProfile && <SaveIcon className={styles.buttonIcon} />}
                    <span className={styles.buttonTitle}>{!editProfile ? 'Editar mi perfil' : 'Guardar' }</span>
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
  

                <div className={styles.form__buttons}>
                    <button
                        className={styles.form__buttonTwo}
                        onClick={() => updateProfile({ fullname, username, website, avatar_url })}
                        disabled={loading}
                    >
                        {loading ? 'Cargando ...' : 'Actualizar'}
                    </button>


                   
                </div>
            </div>
        </div>
    )
}