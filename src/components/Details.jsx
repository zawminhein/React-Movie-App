import { Card, Spinner } from "flowbite-react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import { api, api_key } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectMovie, selectMovie } from "../redux/action/movies";

const Detail = () => {
  const { id } = useParams();
  // console.log(id);

  const dispath = useDispatch();

  const fetchMovie = async () => {
    const res = await api.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
    );
    // console.log(res.data);
    dispath(selectMovie(res.data));
  };

  useEffect(() => {
    if(id) {
      fetchMovie();
    }

    return () => dispath(removeSelectMovie({}))
  }, []);

  const movie = useSelector((state) => state.movies.movie);

  return (
    <div className="container max-w-2xl mx-auto">
      <div className="mx-auto">
        <Link to="/">
          <span>
            <i className="fa-solid fa-arrow-left"></i>
            Back
          </span>
        </Link>
      </div>

      {JSON.stringify(movie) === '{}' ? (
        <div className="text-center">
          <Spinner aria-label="Default status example" />
        </div>
      ) : (
        <div className="mx-auto">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
            <div>
              <span className="bg-black text-white p-2 rounded-xl text-sm">
                <i className="fas fa-star me-1 mb-2"></i>
                {movie.vote_average}
              </span>
              <span className="ms-4 bg-black text-white p-2 rounded-xl text-sm">
                <i className="fas fa-calendar-days me-1 mb-2"></i>
                {movie.release_date}
              </span>
              <span className="ms-4 bg-black text-white p-2 rounded-xl text-sm">
                <i className="fas fa-users me-1 mb-2"></i>
                {movie.vote_count}
              </span>
              <span className="ms-4 bg-black text-white p-2 rounded-xl text-sm">
                <i className="fas fa-building me-1 mb-2"></i>
                {movie.production_companies[0].name}
              </span>
              <span className="ms-4 bg-black text-white p-2 rounded-xl text-sm">
                <i className="fas fa-earth-americas me-1 mb-2"></i>
                {movie.production_countries[0].name}
              </span>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Detail;
