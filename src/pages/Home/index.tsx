import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, key, rest, posterPath2, posterPath } from "../../services/api";
import MovieDTO from "../../services/DTOMovies";
import styles from './styles.module.css'

interface MoviesProps {
    id: number;
    nome: string;
    sinopse: string;
    foto: string;
}

interface IMovies {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    overview: string;
    backdrop_path: string;
    original_title: string;
}
// interface IMoviesInterface {
//     movie: MovieDTO[];
// }


export const Home = () => {
    const [movies, setMovies] = useState<IMovies[]>([])
    const [isLoading, setIsLoading] = useState(false)

    // document.title = 'Home - React Router com Helmet'

    const loadFilmes = async () => {
        setIsLoading(true);
        const { data } = await api.get(`popular?api_key=${key}&language=en-US&page=1`);
        if (data) {
            //console.log(data)
            setMovies(data.results)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        loadFilmes();

    }, [])

    return (
        <main className={styles.container}>
            <section className={styles.listMovies}>
                {movies.map((movie, index) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={posterPath + movie.backdrop_path} alt={movie.original_title} />
                            <Link to={`/filme/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </section>

        </main>
    );
}