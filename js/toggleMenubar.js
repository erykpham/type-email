const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.navbar__main.mobile')
console.log(mobileMenu)
hamburger.onclick = () => {
   hamburger.classList.toggle('closeIcon')
   mobileMenu.classList.toggle('hide')
}