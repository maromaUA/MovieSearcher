import css from './Actor.module.css'
import PropTypes from 'prop-types'

const CastActor = ({image, name, character}) => {
  
    return (
       <div className={css.container}>
        <img className={css.image} src={image} alt={name}></img>
        <div className={css.description}>
           <p><span className={css.bold}>Name: </span>{name}</p>
           <p><span className={css.bold}>Character: </span>{character}</p>
        </div>
       </div>
    )
}

CastActor.propTypes = {
    image:PropTypes.string,
    name:PropTypes.string,
    character:PropTypes.string
}

export default CastActor