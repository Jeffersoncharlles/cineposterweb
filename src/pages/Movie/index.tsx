import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    const [movie, setMovie] = useState<IMovie[]>([])

    const loadMovie = async (slug: number) => {
        const { data } = await api.get(`r-api/?api=filmes/${slug}`);
        console.log(data);
    }


    useEffect(() => {
        loadMovie(Number(slug));
    }, [])

    return (
        <h1>filmes detalhes - {slug}</h1>
    );
}