import Movie from "./Movie";

const MovieList = ({allMovies}) => {
    const movieNodes = allMovies.map((movie) => {
        return <Movie key={movie.id} movieObj={movie} />
    });

    return (
        <>
            <ul>
                {movieNodes}
            </ul>
        </>
    )
}

export default MovieList;