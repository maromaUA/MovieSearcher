import { useParams, Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef, Suspense } from 'react'
import axios from 'axios'
import css from './FilmDetails.module.css'
import { ProgressBar } from 'react-loader-spinner'
import { API_KEY } from 'components/constants'


const FilmDetails = () => {

const [data, setData] = useState({})
const [status, setStatus] = useState('loading')

const {movieId} = useParams()
const location = useLocation()
const backLinkRef = useRef((location.state&&location.state.from) ?? '/movies')

useEffect (()=>{
    async function fetchData(){
    await  axios.get(`https://api.themoviedb.org/3/movie/${Number(movieId)}?api_key=${API_KEY}&language=en-US`).then((responce)=>{
    setData({...responce.data})
    setStatus('resolved')
    }).catch(error=>{
        console.log(error)
    })
    }
    fetchData()
}, [])

const {original_title, overview, vote_average, genres, release_date, poster_path, backdrop_path} = data

const yearRelease = new Date(release_date).getFullYear()
const imageFilm = `http://image.tmdb.org/t/p/w300/${poster_path}`
const genresString = genres? genres.map(genre=>genre.name).join(' ') : ''

if(status==='loading') {
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

if (status==='resolved'){
    return (
        <main>
            {location.state&&<Link className={css.backBtn} to={backLinkRef.current}>Back</Link>}
        <h3>{original_title} ({yearRelease})</h3>
        <div className={css.container}>
        <img className={css.imageFilm} src={imageFilm}></img>
        <div className={css.description}  data-aos="flip-left">
        <p className={css.popularity}>Vote average {vote_average}</p>
        <h4>Overview</h4>    
        <p className={css.overview}>{overview}</p>
        <h4>Genres</h4>
        <p className={css.genres}>{genresString}</p>
        </div>
    </div>
    <ul className={css.addInfo}>
        <Link key={1}to="cast" className={css.addInfoItem}><span>Cast</span></Link>
        <Link key={2}to="reviews" className={css.addInfoItem}><span>Reviews</span></Link>
        </ul>
        <Suspense fallback={<ProgressBar></ProgressBar>}>
        <Outlet></Outlet>
        </Suspense>
       
    </main>
)
}

}



export default FilmDetails