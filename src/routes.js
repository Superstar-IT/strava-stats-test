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
import MonthlyStats from "views/MonthlyStats.js";
import Activities from "views/Activities.js";

const dashboardRoutes = [
  {
    path: "/activities",
    name: "Activities",
    icon: "nc-icon nc-notes",
    component: Activities,
    layout: "",
  },
  {
    path: "/monthlyStats",
    name: "Monthly Stats",
    icon: "nc-icon nc-chart-bar-32",
    component: MonthlyStats,
    layout: "",
  },
];

export default dashboardRoutes;
