import React, { useState, useContext } from "react";

const initialState = {
  title: 'The Phantom Menace',
  series: 'Star War',
  episode: 'Episode I'
};

const initialAction = {
  editMovie: (newMovie: any) => { }
}

const MovieContext = React.createContext(initialState);
const MovieUpdateContext = React.createContext(initialAction.editMovie);

export function useMovie() {
  return useContext(MovieContext)
}

export function useMovieUpdate() {
  return useContext(MovieUpdateContext)
}

export const MovieProvider = ({ children }: any) => {
  const [movie, setMovie] = useState(initialState);

  const editMovie = (newMovie: any) => {
    setMovie({
      title: 'Attack of the Clones',
      series: 'Star War',
      episode: 'Episode II'
    })
  }

  return (
    <MovieContext.Provider value={movie}>
      <MovieUpdateContext.Provider value={editMovie}>
        {children}
      </MovieUpdateContext.Provider>
    </MovieContext.Provider>
  )
} 