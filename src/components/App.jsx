import { Routes, Route} from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";
import css from "./App.module.css"


const Homepage = lazy(()=>import("./Homepage/Homepage"))
const FilmDetails = lazy(()=>import("./FilmDetails/FilmDetails"))
const Cast = lazy(()=>import("./Cast/Cast"))
const Reviews = lazy(()=>import("./Reviews/Reviews"))
const MoviePage = lazy(()=>import("./MoviesPage/MoviesPage"))

export const App = () => {
  return (
    <div className={css.app}
    >
     <Routes>

    
      <Route path="/" element={<Layout></Layout>}>
      <Route index element={<Homepage></Homepage>}></Route>
      <Route path="movies" element={<MoviePage></MoviePage>}></Route>
      <Route path="movies/:movieId" element={<FilmDetails></FilmDetails>}>
      <Route path="cast" element={<Cast></Cast>}></Route>
      <Route path="reviews" element={<Reviews></Reviews>}></Route>
      </Route>
      
      
      </Route>
      


      </Routes>
    </div>
  );
};
