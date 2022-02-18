import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import styles from './styles.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IMovie {
    id: number;
    nome: string;
    sinopse: string;
    foto: string;
}

const configTost = {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'dark'
}

export const Movie = () => {
    const { slug } = useParams();
    const [movie, setMovie] = useState<IMovie>({} as IMovie)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        loadMovie(Number(slug));
        //desmontar o ciclo
        return () => {
        }

    }, [slug, navigate])
    //======================================================================//
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
    //======================================================================//
    const handleSave = () => {

        const myList = localStorage.getItem('movies');
        let moviesSaves = JSON.parse(String(myList)) || [];

        //se ja existe ignore
        const hasMovie = moviesSaves.some((compare: IMovie) => compare.id === movie.id) //true or false
        if (hasMovie) {
            toast.warning('Voce ja possui esse filme', configTost as any);
            return;
        }
        moviesSaves.push(movie)
        localStorage.setItem('movies', JSON.stringify(moviesSaves));
        toast.success('Salvo Com sucesso', configTost as any);
    }
    //======================================================================//
    if (isLoading) {
        return (
            <h2 className={styles.loading}>Loading your movie</h2>
        )
    }
    //======================================================================//
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                // rtl={false}
                pauseOnFocusLoss={false}
                // draggable
                pauseOnHover={false}
            />
            <div className={styles.movieInfo}>
                <h1>{movie.nome}</h1>
                <img src={movie.foto} alt={movie.nome} />

                <h3>Sinopse</h3>
                {movie.sinopse}

                <div className={styles.containerButton}>
                    <button onClick={handleSave} className={styles.favorites}>Favorito</button>
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
        </>
    );
}