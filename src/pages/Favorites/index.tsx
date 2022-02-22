import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
interface IMyMovie {
    id: number;
    original_title: string;
    poster_path: string;
    overview: string;
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

export const Favorites = () => {
    const [moviesFavorite, setMoviesFavorite] = useState<IMyMovie[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const myList = localStorage.getItem('movies')
        setMoviesFavorite(JSON.parse(myList as string) || [])




    }, [])



    const handleRemove = (id: number) => {

        let filterMovies = moviesFavorite.filter((item) => {
            return (item.id !== id)
        })

        setMoviesFavorite(filterMovies);
        localStorage.setItem('movies', JSON.stringify(filterMovies))
        toast.error('Removido Com Sucesso', configTost as any);

        // if (moviesFavorite.length === 0) {
        //     navigate('/')
        //     return;
        // }

    }

    return (
        <div className={styles.container}>
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
            <h1>Favoritos</h1>

            <ul>
                {moviesFavorite.map((movies, index) => {
                    return (
                        <li key={movies.id}>
                            <span>{movies.original_title}</span>

                            <div className={styles.containerButton}>
                                <Link to={`/filme/${movies.id}`}>Ver Detalhes</Link>
                                <button onClick={() => handleRemove(movies.id)}> Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}