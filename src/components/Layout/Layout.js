import { Outlet, Link } from "react-router-dom"
import css from './Layout.module.css'
import { Suspense } from "react"
import { ProgressBar } from 'react-loader-spinner'

const Layout = () =>{
  
    return (
        <div>
         <nav className={css.menu}>
    <Link to="/" className={css.menuItem}>Home</Link>
    <Link to="movies" className={css.menuItem}>Movies</Link>
    </nav>
    <Suspense fallback={<ProgressBar></ProgressBar>}>
        <Outlet />
      </Suspense>
    
        </div>
     
    )
}

export default Layout