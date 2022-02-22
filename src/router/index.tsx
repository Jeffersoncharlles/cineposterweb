import { BrowserRouter, Link, useRoutes } from 'react-router-dom'
import { Movie } from '../pages/Movie'
import { Home } from '../pages/Home'
import { Favorites } from '../pages/Favorites'

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/filme/:slug', element: <Movie /> },
        { path: '/favorites', element: <Favorites /> },
        { path: "*", element: <NoMatch /> }

    ])
}

function NoMatch() {
    return (
        <div>
            <h2>Not Found 404...</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}