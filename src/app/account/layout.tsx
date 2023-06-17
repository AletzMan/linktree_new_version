import styles from "./account.module.css"



export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.container}>
           
            {children}
        </section>
    )
}
