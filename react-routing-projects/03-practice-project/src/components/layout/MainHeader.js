import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css'

const MainHeader = () => {
    return <div className={classes.header}>
        <div className={classes.logo}>Great Quotes</div>
        <div className={classes.nav}>
            <NavLink to='/quotes' activeClassName={classes.active} >All Quotes</NavLink>
            <NavLink to='/new-quote' activeClassName={classes.active} >New Quote</NavLink>
        </div>
    </div>

}

export default MainHeader;