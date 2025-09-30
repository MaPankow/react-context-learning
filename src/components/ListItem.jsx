export const ListItem = ({ musician }) => {
    return (
        <div>
            <h3>{musician.name}</h3>
            {musician.genres.map((genre) => (
                <ul>
                    <li>{genre}</li>
                </ul>
            ))}
           
        </div>
    )
}