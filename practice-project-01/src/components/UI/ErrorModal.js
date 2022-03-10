import Card from "./Card";
import './ErrorModal.css';

function ErrorModal(props) {
    return <div className="backdrop" onClick={props.closeError}>
        <div className="modal">
        <header className="header">
            <h2>{props.title}</h2>
        </header>
        <div className="message">
            <p>{props.message}</p>
        </div>
        <footer className="footer">
        <button type="button" className="btn btn-primary" onClick={props.closeError}>Okay</button>
        </footer>

    </div></div>
}

export default ErrorModal;