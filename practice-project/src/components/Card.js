import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    return <div className='card'>
        {props.children}
    </div>
}

export default Card;