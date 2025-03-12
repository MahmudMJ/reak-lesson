import ReactDom from 'react-dom/client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {App} from './app/app'



ReactDom.createRoot(document.getElementById("root")).render(
    <div>
        <App/>
    </div>
)