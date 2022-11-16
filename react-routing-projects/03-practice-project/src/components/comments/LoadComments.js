import { Link, useParams } from 'react-router-dom';
import classes from './LoadComments.module.css';

const LoadComments = (props) => {

    const loadCommentsHandler = () => {
        // props.onLoadComments();
    }

    return <div className={classes.btnComments}>
        <Link className='btn' to={'/quotes'}  onClick={loadCommentsHandler} >Load Comments</Link>
    </div>
}

export default LoadComments;