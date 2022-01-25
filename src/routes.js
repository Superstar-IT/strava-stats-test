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

import Posts from "views/Posts";
import Users from "views/Users";

const dashboardRoutes = [
  {
    path: "/posts",
    name: "Posts",
    icon: "nc-icon nc-notes",
    component: Posts,
    layout: "",
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-chart-bar-32",
    component: Users,
    layout: "",
  },
];

export default dashboardRoutes;
