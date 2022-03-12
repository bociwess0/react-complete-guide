import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {OrderContextProvider} from './components/Context/orderContext';

ReactDOM.render(<OrderContextProvider>
    <App />
</OrderContextProvider>, document.getElementById('root'));
