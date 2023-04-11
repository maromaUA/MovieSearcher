import axios from "axios";
import css from './Cast.module.css'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CastActor from './CastActor/CastActor';
import { API_KEY } from "components/constants";
import { ProgressBar } from 'react-loader-spinner'

const Cast = () => {
  
    const [data, setData] = useState()
    const [status, setStatus] = useState('loading')

    const {movieId} = useParams()

    useEffect(()=>{
    async function fetchData(){
    await  axios.get(`https://api.themoviedb.org/3/movie/${Number(movieId)}/credits?api_key=${API_KEY}&language=en-US`).then((responce)=>{
    setData({...responce.data})
    setStatus('resolved')
    }).catch(error=>{
        console.log(error)
    })
    }
    fetchData()
    }, [])

if(status==="loading"){
    return (
        <main>
            <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#000000'
  barColor = '#000000'
/>
        </main>
    )
}

if(status==="resolved"){
    const {cast} = data
    const result = cast.filter((actor, index)=>index<10)
        .map((actor)=>{
        const {id, profile_path, name, character} = actor
        const imageFilm = `http://image.tmdb.org/t/p/w200/${profile_path}`
        return <CastActor key={id} image={imageFilm} name={name} character={character}></CastActor>
    })
     
    return (
        <ul className={css.actorsList}>
           {result}
        </ul>
    )
}

}

export default Cast