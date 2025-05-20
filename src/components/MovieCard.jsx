import React from 'react';
import { Link } from "react-router";
import { Card } from "flowbite-react";

const MovieCard = ({movie}) => {
  // console.log(movie);
  
  return (
    <div>
      <Link to={`/movies/details/${movie.id}`}>
          <div>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {movie.overview.slice(0, 150)}
              </p>
              <div>
                <span className='bg-black text-white p-2 rounded-xl text-sm'>
                  <i className='fas fa-star me-1 mb-2'></i>
                  {movie.vote_average}
                </span>
                <span className='ms-4 bg-black text-white p-2 rounded-xl text-sm'>
                  <i className='fas fa-calendar-days me-1 mb-2'></i>
                  {movie.release_date}
                </span>
              </div>
            </Card>
          </div>
        </Link>
    </div>
  )
}

export default MovieCard