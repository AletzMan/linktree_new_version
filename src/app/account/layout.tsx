import styles from "./account.module.css"


const Links = [
    {
        name: 'Perfil',
        link: '/account'
    },
    {
        name: 'Enlaces',
        link: '/links'
    },
    {
        name: 'Cerrar sessión',
        link: '/auth/signout'
    }
]

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <nav>
                    <ul>
                        {Links.map(link => (
                            <li key={crypto.randomUUID()}>{link.name}</li>
                        ))}
                    </ul>
                </nav>
            </header>
            {children}
        </section>
    )
}
