import { ListItem } from "./ListItem";

export const MusiciansList = ({ musicians }) => {
    return musicians.map((musician) => (
        <ListItem {...musician} key={musician.name} />
    ));
}