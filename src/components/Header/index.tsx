import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {

    return (
        <header>
            <Link to="/" className={styles.logo}>CinePoster</Link>
            <Link to="/" className={styles.favorites}>Salvos</Link>
        </header>
    );
}