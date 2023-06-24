import { SocialNetworks } from "@/app/constants/constants"
import { LinkIcon } from "@/app/constants/svg"
import { FormValue, Network } from "@/app/types/types"
import Link from "next/link"
import styles from '../../profile.module.css'


export function LinkProfile({ link, settings }: { link: Network[0], settings: FormValue }) {
    return (
        <Link className={styles.link} href={link.url} target="_blank"
            style={{
                backgroundColor: `${SocialNetworks[link.application].color1}`,
                borderRadius: `${parseInt(settings?.radiusLink?.toString() as string) / 60}em`,
                boxShadow: `0 0 ${settings.bubbleEffect === 'on' ? '10px 1px' : '0 0'} ${SocialNetworks[link.application].color2} inset`,
                border: `1px solid ${settings.backgroundColorSecondary}`
            }}>
            <div className={styles.link__logo} style={{ backgroundColor: `${SocialNetworks[link.application].color3}35` }}>{SocialNetworks[link.application].logo}</div>
            <span className={styles.link__name} style={{ color: `${SocialNetworks[link.application].color3}` }}>{SocialNetworks[link.application].name}</span>
            <span className={styles.link__username} style={{ color: `${SocialNetworks[link.application].color2}`, backgroundColor: `${SocialNetworks[link.application].color3}45` }}>{link.username}</span>
            <LinkIcon className={styles.link__icon} />
        </Link>
    )
}