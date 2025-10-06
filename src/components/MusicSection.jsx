import { MusiciansList } from "./MusiciansList";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";

export const MusicSection = ( {musicians, sectionTitle} ) => {
    return (
        <div>
            <h2>{sectionTitle}</h2>
            <ThemeSwitcher />
            <MusiciansList musicians={musicians}/>
        </div>
    );
}