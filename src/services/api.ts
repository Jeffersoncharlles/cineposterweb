import axios from "axios";
//r-api/?api=filmes
//r-api/?api=filmes/123

//https://api.themoviedb.org/3
/**============================================
 *URL FILMES EM CARTAZ          TODO HEADER
 *https://api.themoviedb.org/3/movie/now_playing?api_key=API&language=pt-BR&page=1
 *=============================================**/

const key = '660709e57868ca59f65c23440f729164';
const posterPath = 'https://image.tmdb.org/t/p/original';
const posterPath2 = 'https://image.tmdb.org/t/p/w500';

export const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export const rest = {

    getAll: async () => {
        const response = await api.get('/r-api/?api=filmes')

        return response.data;
    }

}

