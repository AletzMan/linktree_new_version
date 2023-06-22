import { SocialNetworks } from "@/app/constants/constants"
import { LinkIcon } from "@/app/constants/svg"
import { Network } from "@/app/types/types"
import Link from "next/link"
import styles from '../../profile.module.css'

const emptyLinks: Network = [
    {
        application: 0,
        url: ''
    }
]

export function LinkProfile({ link }: { link: Network[0] }) {
    return (
        <Link className={styles.link} href={link.url} target="_blank">
            <div className={styles.link__logo}>{SocialNetworks[link.application].logo}</div>
            <span className={styles.link__name}>{SocialNetworks[link.application].name}</span>
            <LinkIcon className={styles.link__icon} />
        </Link>
    )
}