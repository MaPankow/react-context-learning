import { MusiciansList } from "./MusiciansList";

export const MusicSection = ( {musicians, sectionTitle} ) => {
    return (
        <div>
            <h2>{sectionTitle}</h2>
            <MusiciansList musicians={musicians}/>
        </div>
    );
}