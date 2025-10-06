import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button className={styles.button} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Current theme: {theme}
        </button>
    )
}