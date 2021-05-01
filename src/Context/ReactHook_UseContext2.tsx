import React, { createContext, useState } from 'react';
import ReactHook_UseContext_Child2 from './ReactHook_UseContext_Child2';

const initialState = {
  movie: {
    title: 'The Phantom Menace',
    series: 'Star War',
    episode: 'Episode I'
  },
};

export const StateContext = createContext(initialState);

function ReactHook_UseContext(props: any) {
  const [movie, setMovie] = useState(initialState);

  const editMovie = (newMovie: any) => {
    setMovie(newMovie);
  }

  return (
    <StateContext.Provider value={movie}>
      <button onClick={() => editMovie({
        movie: {
          title: 'Attack of the Clones',
          series: 'Star War',
          episode: 'Episode II'
        },
      })}>Edit Movie</button>
      <ReactHook_UseContext_Child2 />
    </StateContext.Provider>
  );
}

export default ReactHook_UseContext;

// -----------------------------------------------------------------------------------------

// import React, { createContext, useState } from 'react';
// import ReactHook_UseContext_Child1 from './ReactHook_UseContext_Child1';
// import ReactHook_UseContext_Child2 from './ReactHook_UseContext_Child2';

// type IMovie = {
//   original_title: string;
//   poster_path: string;
//   id: number;
// };

// type IMovieContext = [IMovie[], React.Dispatch<React.SetStateAction<IMovie[]>>];

// export const MovieContext = createContext<IMovieContext>([[], () => null]);

// function ReactHook_UseContext(props: any) {
//   const [movies, setMovies] = useState<IMovie[]>([
//     {
//         original_title: 'name of movie',
//         poster_path: 'path_to_poster',
//         id: 1,
//     },
//   ]);

//   return (
//     <MovieContext.Provider value={[movies, setMovies]}>
//       <ReactHook_UseContext_Child1 />
//       <ReactHook_UseContext_Child2 />
//     </MovieContext.Provider>
//   );
// }

// export default ReactHook_UseContext;