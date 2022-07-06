let splash = document.querySelector('.splash');
let splashOpacity = document.querySelector('.splashOpacity');
let splashLogo = document.querySelector('.splashLogo');
let splashLogo1 = document.querySelector('.splashLogo1');
let version = document.querySelector('.version');
let welcome = document.querySelector('.welcome');
let spinnerContainer = document.querySelector('.spinnerContainer');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    splashOpacity.style.opacity = "1";
    splashLogo1.style.marginTop = "30vh";
    version.style.marginTop = "30vh";
  }, 1000)
  setTimeout(() => {
    splash.style.opacity = "0";
    splash.style.zIndex = "-200";
    splash.style.marginLeft = "-100vh";
  }, 6000)
})