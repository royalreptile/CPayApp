import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import routes from './views';
import Page404 from './views/404.jsx';
import Store from './store.js';
import { Provider } from 'react-redux';

let home;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  home = '';
} else {
  // home = '/CPayApp'
  home= ''
}
console.log('home ', home);
function App() {
  return (
    <Provider store={Store}>
    <Routes>
         {
                    routes.map((data,idx) => (
                        <Route key={idx} path={home+data.path} element={data.element} exact />
                    ))
                }

                <Route path='*' element={<Page404 />} />
      </Routes>
      </Provider>
  );
}

export default App;
