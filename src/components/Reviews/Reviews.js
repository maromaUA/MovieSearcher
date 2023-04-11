import { useState } from 'react'
import css from './Reviews.module.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReviewItem from './ReviewItem/ReviewItem'
import { API_KEY } from 'components/constants'
import { ProgressBar } from 'react-loader-spinner'

const Reviews = () => {

const [data, setData] = useState()
const [status, setStatus] = useState('loading')
const {movieId} = useParams()

useEffect(()=>{
async function fetchData(){
await  axios.get(`https://api.themoviedb.org/3/movie/${Number(movieId)}/reviews?api_key=${API_KEY}&language=en-US`).then((responce)=>{
if(responce.data.results.length===0){
    setStatus("error")
    return
}

setData([...responce.data.results])
setStatus('resolved')
}).catch(error=>{
    console.log(error)
})
}
fetchData()
}, [])

if(status==="loading"){
    return  <ProgressBar
    height="80"
    width="80"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass="progress-bar-wrapper"
    borderColor = '#000000'
    barColor = '#000000'
  />
}

if(status==="error"){
    return <p className={css.errorMessage}>There is no reviews for this film</p>
}


if(status==='resolved'){
    const result = data.filter((review, index)=>index<10).map(review=>{
        const {id, author_details, content, updated_at} = review
        const {username, rating} = author_details
        const date = {
            year:new Date(updated_at).getFullYear(),
            month: new Date(updated_at).getMonth()+1,
            day:new Date(updated_at).getDate()
        }
        return <ReviewItem key={id} name={username} rating={rating} content={content} date={date}></ReviewItem>
    })


    return <ul className={css.listReviews}>
         {result}
    </ul>
}

}

export default Reviews