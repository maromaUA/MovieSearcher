import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import css from './HomePage.module.css'
import HomePageListItem from "./HomePageListItem/HomePageListItem"
import { API_KEY } from "components/constants"


const Homepage = () => {

const [data, setData] = useState([])


useEffect(()=>{
    async function fetchData(){
    await  axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then((responce)=>{
    setData([...responce.data.results])
    }).catch(error=>{
        console.log(error)
    })
    }
    fetchData()
}, [])


const result = [...data].sort((a, b)=>b.vote_average-a.vote_average).map(film=>{
    const {original_title, vote_average, backdrop_path} = film
    const image = `http://image.tmdb.org/t/p/w300/${backdrop_path}`
    return <Link key={film.id} className={css.film} to={`movies/${film.id}`}><HomePageListItem title={original_title} image={image} rating={vote_average}></HomePageListItem></Link> 
})

return (

    <div className={css.container}>
     <h1>Trending today</h1>
    <ul className={css.listFilm}>
    {result}
    </ul>
    </div>
    
   
)


}
export default Homepage