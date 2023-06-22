import { LoadingIcon } from "@/app/constants/svg";
import styles from './loading.module.css'

export function Loading() {
    return (
        <section className={styles.section}>
            <LoadingIcon className={styles.iconLoading} />
            <span className={styles.textLoading}>Loading...</span>
        </section>
    )
}