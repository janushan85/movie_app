import React, {useEffect, useState} from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const {
        data: {
          data: {
            movies
          }
        }
      } = await axios.get(
          "https://yts-proxy.nomadcoders1.now.sh/list_movies.json");

      setMovies(movies);
      setLoading(false);
    }

    fetchMovies();
  }, []);

  return (
      <section className="container">
        {loading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
        ) : (
            <div className="movies">
              {movies.map(movie => (
                  <Movie
                      key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}/>
              ))}
            </div>
        )}
      </section>
  );
};

export default Home;
