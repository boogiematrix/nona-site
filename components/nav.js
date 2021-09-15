import utilStyles from '../styles/utils.module.css';
import styles from './nav.module.css';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className={styles.navBar}>
            <Link href='/'><a className={styles.navHead}>Nona Invie</a></Link>
            <Link href='/'><a>Home</a></Link>
            <Link href='/music'><a>Music Composition & Performance</a></Link>
            <Link href='/realestate'><a>Real Estate</a></Link>
            <Link href='/lessons'><a>Piano Lessons</a></Link>
            <Link href='/contact'><a>Contact</a></Link>
        </nav>
    )
}