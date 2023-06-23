'use client'
import { Database } from "@/app/types/supabase"
import { FormValue, Network } from "@/app/types/types"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"
import styles from '../../profile.module.css'

const emptyLinks: Network = [
    {
        application: 0,
        url: '',
        username: ''

    }
]


import { UserInfo } from "@/app/types/types"
import { LinkProfile } from "./LinkProfile"
import { Loading } from "@/app/components/Loading/Loading"
import { NoFoundProfile } from "./NoFoundProfile"
import { Logo } from "@/app/constants/svg"
import Avatar from "@/app/account/avatar"
import { defaultSettings } from "@/app/constants/constants"

export function CardProfile({ username }: { username: string }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState<UserInfo>({ id: '', fullName: '', username: '', avatar_url: '', website: '', links: emptyLinks, settings: defaultSettings })

    useEffect(() => {
        const getProfile = async () => {
            try {
                setLoading(true)

                let { data, error, status } = await supabase
                    .from('profiles')
                    .select(`id, full_name, username, website, avatar_url, links, settings`)
                    .eq('username', username)
                    .single()

                if (error && status !== 406) {
                    throw error
                }
                if (data) {
                    setUserData({ id: data?.id, fullName: data?.full_name, username: data?.username, avatar_url: data?.avatar_url, website: data?.website, links: data?.links, settings: data?.settings })
                }
            } catch (error) {
                alert('Error descargando los datos!')
            } finally {
                setLoading(false)
            }
        }
        getProfile()
    }, [])

    console.log(userData)
    return (
        <section className={styles.section} style={{ backgroundColor: `${userData?.settings.backgroundColorSecondary}`, borderRadius: `${parseInt(userData?.settings.radiusLink?.toString() as string) / 60}em` }}>
            {!loading && userData.fullName !== '' &&
                <div className={styles.card} style={{ backgroundColor: `${userData?.settings.backgroundColor}`, borderRadius: `${parseInt(userData?.settings.radiusLink?.toString() as string) / 60}em` }}>
                    <h1 className={styles.card__title} style={{ color: `${userData?.settings.fontColor}` }}>PERFIL</h1>
                    <Avatar uid={userData?.id} url={userData?.avatar_url} size={120}
                        onUpload={() => null}
                        settings={userData?.settings} isEdit={false} />
                    <h2 className={styles.card__fullname} style={{ color: `${userData?.settings.fontColor}` }}>{userData?.fullName}</h2>
                    <span className={styles.card__username} style={{ color: `${userData?.settings.fontHighColor}` }}>{userData?.username}</span>
                    <p className={styles.card__description} style={{ color: `${userData?.settings.fontColor}AA` }}>{userData?.website}</p>
                    {userData?.links?.map(link => (
                        <LinkProfile key={crypto.randomUUID()} link={link} settings={userData?.settings} />
                    ))}
                    <Logo className={styles.logo} />
                </div>}
            {!loading && userData.fullName === '' &&
                <NoFoundProfile username={username} />
            }
            {loading && <Loading />}
        </section>
    )
}