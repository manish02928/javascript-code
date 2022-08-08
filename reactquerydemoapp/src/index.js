import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ContactUS from './routes/contactus';
import About from './routes/about';
import {QueryClient,QueryClientProvider} from 'react-query'
import Header from './Header';
import Home from './routes/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
  <BrowserRouter>
  <div>
      <Header></Header>
   </div>
  <Routes>
    <Route path='/' element={<App></App>} />
    <Route path='contactus' element={<ContactUS />}></Route>
    <Route path='about' element={<About />}></Route>
    <Route path='home' element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
