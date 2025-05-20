import { ActionType } from "../action-types"

// export const FetchMovies = (movies) => {
//    return {
//       type : ActionType.FETCH_MOVIES,
//       payload : movies
//    }
// }

// export const SelectMovie = (movie) => {
//    return {
//       type : ActionType.SELECT_MOVIE,
//       payload : movie
//    }
// }

export const fetchMovies = (movies) => {
   // console.log(movies);
   return {
      type : ActionType.FETCH_MOVIES,
      payload : movies,
   }
}

export const selectMovie = (movie) => {
   return {
      type : ActionType.SELECT_MOVIE,
      payload : movie,
   }
}
export const removeSelectMovie = (movie) => {
   return {
      type : ActionType.REMOVE_SELECTED_MPVIE,
      payload : movie,
   }
}