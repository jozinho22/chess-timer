import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const app = <React.StrictMode>
                <App />
            </React.StrictMode>;

const domNode = document.getElementById('root');
if(domNode.hasChildNodes()) {
    hydrateRoot(domNode, app); 
} else {
    const root = createRoot(domNode);
    root.render(app);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
