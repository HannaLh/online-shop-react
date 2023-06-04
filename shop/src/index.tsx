import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {App} from './App';
import {store} from './redux/store';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
);
