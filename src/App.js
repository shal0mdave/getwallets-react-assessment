import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/App.scss';

function App() {
  return (
      <Fragment>
        <ToastContainer />
        <Outlet />
      </Fragment>
  );
}

export default App;
