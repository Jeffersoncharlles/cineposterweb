import { BrowserRouter, Link, useRoutes } from 'react-router-dom'
import { Movie } from '../pages/Movie'
import { Home } from '../pages/Home'
import { Favorites } from '../pages/Favorites'
import { ErrorPage } from '../components/ErrorPage'

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/filme/:slug', element: <Movie /> },
        { path: '/favorites', element: <Favorites /> },
        { path: "*", element: <ErrorPage /> }

    ])
}

