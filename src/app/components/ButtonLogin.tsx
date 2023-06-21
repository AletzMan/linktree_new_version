'use-client'
import { GoogleIcon } from '../constants/svg'
import styles from './components.module.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export function ButtonLogin() {
    const HandleLogin = () => {
    }
    return (
        <button className={`${styles.button} ${montserrat.className}`}><GoogleIcon />Inicio sesión con Google</button>
    )
}