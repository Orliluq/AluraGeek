const logo = (paths) => {
  const logoLink = `
  <a href="${paths.home}">
    <img src="${paths.logotipo}" alt="logo AluraGeek">
  </a>
  `
  return logoLink;
}

export function nav(paths) {

  const nav_header = document.querySelector('[data-nav]');
  const logoLink = logo(paths)
  const html = `
  <div class="nav_header__left">
    <div class="logo">
      ${logoLink}
    </div>
    <div class="nav_header__search">
      <input type="text" class="nav_header__search--input" placeholder="¿Qué deseas buscar?"/>
      <img src="${paths.lupa}" alt="imagen lupa" class="nav_header__search--img">
    </div>
  </div>
  ${paths.login && (`<div class="nav_header__login"><a href="${paths.login}" class="button__login">Login</a><img class="lupa__hidden" src="${paths.lupa}" alt="imagen lupa" data-input/></div><input type="text" class="lupa__hidden--input" placeholder="¿Qué deseas buscar?"/>`)}
  `;

  nav_header.innerHTML = html;

  if(paths.inputShow){
    inputShow();
  }

}

export function inputShow(){
  const img = document.querySelector('[data-input]')
  img.addEventListener('click',()=>{
    document.querySelector('.lupa__hidden--input').classList.toggle('show');
    document.querySelector('.lupa__hidden--input').focus();
  })
  
  document.querySelector('.lupa__hidden--input').addEventListener('blur',()=>{
    document.querySelector('.lupa__hidden--input').classList.toggle('show');
  })  
}


export function footer(paths) {

  const footer = document.querySelector('[data-footer]');
  const logoLink = logo(paths)
  const html = `
  <section class="footer">
    <div class="container">
      <div class="logo">
        ${logoLink}
      </div>
      <div class="footer__text">
        <a href="#">Quienes somos</a>
        <a href="#">Política de privacidad</a>
        <a href="#">Programa de fidelidad</a>
        <a href="#">Nuestras tiendas</a>
        <a href="#">Quiero ser franquiciado</a>
        <a href="#">Anuncie aquí</a>
      </div>
    </div>
    <form class="footer__forms">
      <p>Hable con nosotros</p>
      <input type="text" placeholder="Nombre" required maxlength="40" />
      <span class="error-nombre"></span>  <textarea placeholder="Escribe tu mensaje" required maxlength="120"></textarea>
      <span class="error-mensaje"></span>  <input type="submit" value="Enviar mensaje" class="button__submit" data-submit />
    </form>
  </section>
  <div class="footer__desarrollador">
    <section class="text-icon">
      <a href="https://www.linkedin.com/in/orlibetdungonzalez/" target="_blank" rel="noopener">
        <i class="fab fa-linkedin-in" style="--color-icon: #de500e; --font: 1.7rem"></i>
      </a>
      <a href="https://github.com/Orliluq/" target="_blank" rel="noopener">
        <i class="bx bxl-github" style="--color-icon: #de500e; --font: 1.7rem"></i>
      </a>
    </section>
    <div class="flex">
      <p>&copy; Desarrollado por Orlibet Dun, Grupo 6. ONE Oracle - Alura Latam 2024</p>
      </div>
  `;

  footer.innerHTML = html;




}