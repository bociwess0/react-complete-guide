import classes from './Notification.module.css';
import { useSelector } from 'react-redux';



const Notification = () => {
    let additionalClass = '';
    const notification = useSelector(state => state.ui.notification);

    if(notification.status == 'success') {
        additionalClass = classes.error;
    }
    if(notification.status == 'error') {
        additionalClass = classes.success;
    }   
    const cssClasses = `${classes.notification} ${additionalClass}`;

    return <div className={cssClasses}>
        <p>{notification.message}</p>
    </div>
}

export default Notification;