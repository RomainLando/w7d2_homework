const Movie = ({movieObj}) => {
    return <li><a href={movieObj.url}>{movieObj.name}</a></li>
}

export default Movie;