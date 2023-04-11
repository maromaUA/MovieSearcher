import { useState, useEffect } from 'react'
import css from './MoviesPage.module.css'
import axios from 'axios'
import {Link, useLocation, useSearchParams} from 'react-router-dom'
import { ProgressBar } from 'react-loader-spinner'
import MovieLi from './MovieLi/MovieLi'
import { API_KEY } from 'components/constants'

const MoviePage = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [status, setStatus] = useState('idle')
    const [moreBtn, setMoreBtn] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const query = searchParams.get('query') || ''
    
   
useEffect(()=>{
    if(!query){
        return
    }
    async function fetchData(){
    await  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false&page=${page}`).then((responce)=>{
    const {page, results, total_pages} = responce.data
    setData([...results])
    setPage(page)
    if(total_pages>page){
        setMoreBtn(true)
    }
    setStatus("resolved")
    }).catch(error=>{
        console.log(error)
        setStatus("error")
    })
    }
    fetchData()

}, [query, page])

const handleOnSubmit = (event) => {
    event.preventDefault()
    const inputQuery = event.currentTarget.elements.search.value
    if(!inputQuery){
    setSearchParams({})
    return
    }
    setSearchParams({query:inputQuery})
}

const handleLoadMore = () => {
    setPage(prevPage=>prevPage+1)
}

const result = [...data].sort((a, b)=>b.vote_average-a.vote_average).map(movie=>{
    const {backdrop_path, original_title, vote_average, id} = movie
    const image = `http://image.tmdb.org/t/p/w300/${backdrop_path}`
    return <Link className={css.film} key={id} to={`${id}`} state={{from:location}}><MovieLi image={image} title={original_title} rating={vote_average}></MovieLi></Link>
})
    return (
        <div className={css.container}>
            <h2>Find movie</h2>
            <form className={css.searchForm} onSubmit={handleOnSubmit}>
                <input type="text" defaultValue={query} name="search"></input>
                <button type="submit" className={css.searchBtn}>Search</button>
            </form>
             {status==="resolved"&&<ul className={css.listFilms}>{result}</ul>}
             {status==="error"&&<p>There is no movies for your query, try another one</p>}
             {moreBtn&&<button type="button" className={css.moreBtn} onClick={handleLoadMore}>Load More</button>}
        </div>
        
    )

}

export default MoviePage