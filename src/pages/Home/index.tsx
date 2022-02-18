import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, rest } from "../../services/api";
import MovieDTO from "../../services/DTOMovies";
import styles from './styles.module.css'

interface MoviesProps {
    id: number;
    nome: string;
    sinopse: string;
    foto: string;
}

// interface IMovies {
//     title: string;
//     poster_path: string;
//     release_date: string;
//     vote_average: number;
//     vote_count: number;
//     overview: string;
// }
// interface IMoviesInterface {
//     movie: MovieDTO[];
// }


export const Home = () => {
    const [movies, setMovies] = useState<MoviesProps[]>([])
    const [isLoading, setIsLoading] = useState(false)

    // document.title = 'Home - React Router com Helmet'

    const loadFilmes = async () => {
        setIsLoading(true);
        const { data } = await api.get('r-api/?api=filmes')
        if (data) {

            console.log(data)
            setMovies(data)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        loadFilmes();
        //rest.getAll();

    }, [])

    return (
        <main className={styles.container}>
            <section className={styles.listMovies}>
                {movies.map((movie, index) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.nome}</strong>
                            <img src={movie.foto} alt={movie.nome} />
                            <Link to={`/filme/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </section>

        </main>
    );
}