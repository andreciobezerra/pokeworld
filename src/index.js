/** 
 * @brief Point of entry 
 * @author Andrécio Costa
 * @date 15/04/2020
*/  

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
 
const rootElement = document.querySelector('#root')
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, rootElement)