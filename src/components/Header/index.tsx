import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {

    return (
        <header>
            <Link to="/" className={styles.logo}>CinePoster</Link>
            <Link to="/favorites" className={styles.favorites}>Favoritos</Link>
        </header>
    );
}