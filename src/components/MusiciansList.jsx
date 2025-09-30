import { ListItem } from "./ListItem/ListItem";

export const MusiciansList = ({ musicians }) => {
    return musicians.map((musician) => (
        <ListItem {...musician} musician={musician} />
    ));
}