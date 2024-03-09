import { lista } from '../../../js/geekAPI/index.js';
import { containerCards, updateList } from '../../../js/index.js';
import { nav, footer } from '../../../js/nav_header/index.js';

window.onload = function () {
  
  updateList();
  const productURL = '../product/index.html';
  const path = '../../img/slider.png';
  const seta = '../../img/flecha.png';

  const paths = {
    logotipo: "../../img/alurageek.svg",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    imgArrow: "../../img/flecha.png",
    imgSlider: "../../img/slider.png",
    allProducts: "../allProducts/index.html",
    productList: lista,
    productAmount: lista.length,
    listIndex: '',
    url: "../product/index.html",
    login: "../login/index.html",
    inputShow: true
  } 

  nav(paths);
  containerCards(paths);
  footer(paths);  

  const titulos = document.querySelectorAll('.content__title');

  titulos.forEach((item,index)=>{
    if(index != 0){
      item.remove();
    }
  })
  titulos[0].innerHTML = `
  <h2 data-title>Todos los productos</h2>
  <a href="../addProduct/index.html" class="button__submit" id="button__color">Agregar producto</a>
  `
}