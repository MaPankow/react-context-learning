import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ListItem = ({ musician }) => {
    const theme = useContext(ThemeContext);
    return (
        <div className={`theme-${theme}`}>
            <h3>{musician.name} {theme === "dark" ? "👤👤👤(➕)" : "👤"}</h3>
            {musician.genres.map((genre) => (
                <ul>
                    <li>{genre}</li>
                </ul>
            ))}
        </div>
    )
}