'use client'
import { Database } from '@/app/types/supabase'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import styles from './publicview.module.css'
import { UserInfo } from '@/app/types/types'
import { LoadingIcon } from '../constants/svg'

//const newUser: UserInfo = {fullName: '', username: '', avatar_url: '', website: ''}
export default function EditLinks({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState<UserInfo>({ fullName: '', username: '', avatar_url: '', website: '' })
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
                const imgURL = session?.user?.user_metadata !== null ? session?.user.user_metadata.avatar_url : data?.avatar_url
                setUserData({ fullName: data?.full_name, username: data?.username, avatar_url: imgURL, website: data?.website })
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

    return (
        <section className={styles.card}>
            {!loading && <><h2 className={styles.card__title}>TITLE</h2>
                <div className={styles.card__containerPhoto}>
                    <div className={styles.card__picture}>
                        <Image className={styles.fomr_photo} src={`${userData.avatar_url}`} width={120} height={120} alt={`avatar from ${userData.fullName}`} />
                    </div>
                </div>
                <div className={styles.card__container}>
                    <h2 className={styles.card__containerName}>{userData.fullName}</h2>
                </div>
                <div className={styles.card__container}>
                    <h3 className={styles.card__username}>{userData.username}</h3>
                </div>
                <div className={styles.card__container}>
                    <span className={styles.card__email}>{session?.user.email}</span>
                </div>


                <div className={styles.card__container}>
                    <p className={styles.card__description} >{userData.website || ''}</p>
                </div></>}
            {loading && <><LoadingIcon className={styles.iconLoading} /> <span className={styles.textLoading}>Loading...</span></>}
        </section>
    )

}