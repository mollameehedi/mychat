import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import firebaseConfig from './config/FirebaseConfig.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
)
