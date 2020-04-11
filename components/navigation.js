import Link from 'next/link'
import styles from './nav.module.css'

function Navigation() {
    return <nav>

        <Link href="/">
            <a className={styles.link} >Anasayfa</a>
        </Link>

        <Link href="/about">
            <a className={styles.link}>Hakkımda</a>
        </Link>

        <Link href="/contactus">
            <a className={styles.link}>İletişim</a>
        </Link>

    </nav>

}

export default Navigation