import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import styles from './styles.module.css'

interface IMovie {
    id: number;
    nome: string;
    sinopse: string;
    foto: string;
}

export const Movie = () => {
    const { slug } = useParams();
    const [movie, setMovie] = useState<IMovie>({} as IMovie)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();


    const loadMovie = async (slug: number) => {
        const { data } = await api.get(`r-api/?api=filmes/${slug}`);
        // console.log(data);
        if (data.length === 0) {
            navigate('/')
            return;
        }
        setMovie(data);
        setIsLoading(false);
    }


    useEffect(() => {
        loadMovie(Number(slug));
        //desmontar o ciclo
        return () => {
        }

    }, [slug, navigate])

    if (isLoading) {
        return (
            <h2 className={styles.loading}>Loading your movie</h2>
        )
    }

    return (
        <div className={styles.movieInfo}>
            <h1>{movie.nome}</h1>
            <img src={movie.foto} alt={movie.nome} />

            <h3>Sinopse</h3>
            {movie.sinopse}

            <div className={styles.containerButton}>
                <button onClick={() => { }} className={styles.favorites}>Favoritos</button>
                <button>
                    <a
                        target="blank"
                        href={`https://www.youtube.com/results?search_query=${movie.nome} Trailer`}

                    >
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}