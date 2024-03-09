import { lista } from '../../../js/geekAPI/index.js'
import { containerCards, updateList } from '../../../js/index.js'
import { nav, footer } from '../../../js/nav_header/index.js'

const producData = (produto)=>{
  const producData = document.querySelector('[data-product]')
  
  const html = `
  <div class="product__img" id="teste" style="background-image: url('${produto.img}');background-size: contain ;"></div>
  <div class="product__data">
    <h1>${produto.nombre}</h1>
    <p>R$ ${produto.precio}</p>
    <p>${produto.descripcion}</p>
  </div>
  `
  producData.innerHTML = html;
}


window.onload = function () {

  const url = new URL(window.location)
  const listIndex = url.searchParams.get('listIndex')
  const id = url.searchParams.get('id')
  
  updateList();
  
  const paths = {
  logotipo: "../../img/alurageek.svg",
  lupa: "../../img/lupa.png",
  home: "../../../index.html",
  imgArrow: "../../img/flecha.png",
  imgSlider: "../../img/slider.png",
  allProducts: "../allProducts/index.html",
  productList: lista[listIndex],
  productAmount: '',
  listIndex: listIndex,
  url: "",
  login: "../login/index.html",
  inputShow: true,
  } 
  
  const productURL = ''
  containerCards(paths);
  const title = document.querySelector('[data-title]')
  title.innerHTML = "Productos similares"

  nav(paths);
  producData(lista[listIndex].produtos[id-1].data)
  footer(paths);

}