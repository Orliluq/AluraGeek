import { nav, footer } from '../../../js/nav_header/index.js';


window.onload = function () {
  const paths = {
    logotipo: "../../img/alurageek.svg",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    url: "../product/index.html",
    login: "",
    inputShow: false
  }

  nav(paths);
  footer(paths);

};