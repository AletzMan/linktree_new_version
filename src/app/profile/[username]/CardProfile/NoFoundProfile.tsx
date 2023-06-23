import { Logo, NullIcon } from '@/app/constants/svg'
import styles from '../../profile.module.css'

export function NoFoundProfile({ username }: { username: string }) {
    return (
        <article className={styles.noFound}>
            <Logo className={styles.noFound__logo} />
            <p className={styles.noFound__message}>{`EL NOMBRE DE USUARIO`}
                <br /><span className={styles.noFound__username}>{` '${username}' `}</span>
                <br />{`NO EXISTE`}
            </p>
            <NullIcon className={styles.noFound__icon} />
        </article>
    )
}