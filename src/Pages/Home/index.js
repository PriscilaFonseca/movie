import api from '../../Services/api';
import './home.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function loadMovies() {
            const response = await api.get('r-api/?api=filmes')
            setMovies(response.data);
        }

        loadMovies();
    }, []);

    return (
        <div className="Container">
            <div className="list-movies">
                {movies.map((movies) => {
                    return (
                        <article key={movies.id}>
                            <strong>{movies.nome}</strong>
                            <img src={movies.foto} alt={movies.nome}></img>
                            <Link to="/"> Acessar </Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}