import css from './ReviewItem.module.css'
import PropTypes from 'prop-types'

const ReviewItem = ({name, rating, content, date}) => {
  
   return (
    <div className={css.container}>
        <h5 className={css.header}><span>{name}</span> <span> Rating: {rating}</span> </h5>
        <p className={css.content}>{content}</p>
        <p className={css.date}>{date.day}-{date.month}-{date.year}</p>
    </div>
   )
}

ReviewItem.propTypes = {
   name:PropTypes.string,
   rating:PropTypes.number, 
   content:PropTypes.string,
   date:PropTypes.object
}

export default ReviewItem