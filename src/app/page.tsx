
import Image from 'next/image'
import AuthForm from './components/auth-form'
import { Logo } from './constants/svg'
import styles from './page.module.css'
import ImageBack from '/src/assets/backimage.svg'



const PointsStar = ['Inicio de sesión', 'Agrega tus enlaces', 'Personaliza el diseño', 'Organiza los enlaces', 'Previsualiza y guarda', 'Comparte tu página de enlaces', 'Actualiza tus enlaces regularmente']

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
      <section className={styles.section}>
        <p className={styles.p}>
          {`¡Bienvenido/a a nuestra plataforma de enlaces personalizados!
          Crea tu propia página de enlaces en un solo lugar.
          Organiza tus perfiles en redes sociales, contenido destacado y proyectos
          en un único enlace que podrás compartir con tu audiencia.
          Personaliza el diseño y destaca tu identidad.
          Estamos aquí para ayudarte en cada paso.`}
        </p>
        <p className={styles.p}>¡Comienza a compartir tus enlaces de manera más sencilla y efectiva!</p>
        <p className={styles.p}>Rápido y fácil:</p>
        <ul className={styles.ul}>
          {PointsStar.map(point => (
            <li className={styles.li} key={crypto.randomUUID()}>{point}</li>
          ))}
        </ul>
        <span className={styles.start}>¡Empieza ya!</span>
        <div className={styles.containerLogin}>
          <AuthForm />
        </div>
        <Image className={styles.imageback} src={ImageBack} width={400} height={400} alt='image social media' />
      </section>
    </main>
  )
}
