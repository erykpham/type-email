const sections = document.getElementsByClassName('link-to');
const links = document.querySelectorAll('.link');

const space = window.innerHeight / 2;
window.onscroll = (e) => {
   const centerPosition = window.scrollY + space;
   for (let s of sections) {
      if (centerPosition >= s.offsetTop) {
         const current = s.getAttribute('id');
         links.forEach((l) => {
            l.classList.remove('active');
            if (l.href.includes(current)) {
               l.classList.add('active');
            }
         });
      }
   }
};
