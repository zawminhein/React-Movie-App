import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";


const Movies = () => {

  let movies = [];

  movies = useSelector( (state) => state.movies.movies); // get data from stor(state)
  // console.log(movies);
  
  return (
    <div className="container mx-auto mt-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">

        {
          movies.length > 0 ? movies.map( movie => <MovieCard key={movie.id} movie={movie}/> ) : <h1>NO Movies</h1>
        }
        
      </div>
    </div>
  );
};

export default Movies;
