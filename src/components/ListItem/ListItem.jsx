import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./ListItem.module.css";

export const ListItem = ({ musician }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`theme-${theme} ${styles.card}`}>
            <h3>{musician.name} {theme === "dark" ? "👤👤👤(➕)" : "👤"}</h3>
            <ul>
                {musician.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    )
}