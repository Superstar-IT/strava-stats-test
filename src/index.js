/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import AdminLayout from "layouts/Admin.js";
import configureStore from "store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "./assets/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';

async function init() {
  const initialState = {
    activity: {
      activities: {},
      recentActivites: [],
    },
  };
  const store = configureStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <AdminLayout />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </Provider>,
    document.getElementById('root'),
  );
}

init();