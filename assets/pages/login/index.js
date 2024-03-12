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

// **Authentication Logic (Replace with your implementation):**
  let isAuthenticated = false; // Placeholder for authentication state

  // Implement your authentication logic here, checking credentials
  // (e.g., using a login form, API call, or session storage).
  // Update `isAuthenticated` accordingly.

  nav(paths);
  footer(paths);


// **Login Button Functionality (if using a separate login page):**
  // If you have a separate login page (paths.login set), remove the following code.

  const loginButton = document.querySelector('.button__submit'); // Assuming login button class
  if (loginButton) {
    loginButton.addEventListener('click', () => {
      // Handle login button click (redirect to login page if needed)
      if (!isAuthenticated) {
        // Redirect to login page (if applicable)
        window.location.href = 'login.html'; // Replace with your login page URL
      } else {
        // User already authenticated, handle redirection (e.g., to admin menu)
        window.location.href = 'menu-administrador.html'; // Replace with admin menu URL
      }
    });
  }

  // **Administrator Menu Visibility (based on authentication):**

  const menuAdministrador = document.querySelector('.menu-administrador');
  if (menuAdministrador) {
    menuAdministrador.hidden = !isAuthenticated; // Show menu if authenticated
  }
};