import PropTypes from 'prop-types'
import css from './MovieLi.module.css'
import {ReactComponent as Star} from '../../../star.svg'

const MovieLi = ({image, title, rating}) => {

return(
    <>
    <img src={image} alt={title} className={css.imageHomepage}></img>
    <span className={css.listContainer}>
        <span className={css.title}>{title}</span>
        <span className={css.starContainer}>
        <Star className={css.star}></Star>
        <span className={css.container}>{rating.toFixed(1)}</span>
        </span>
    </span>
    </>
)

}

MovieLi.propTypes = {
    image:PropTypes.string,
    title:PropTypes.string,
    rating:PropTypes.number
}


export default MovieLi