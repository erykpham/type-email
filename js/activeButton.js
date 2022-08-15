const libraryBtns = document.querySelectorAll('.library-btn');
for (let btn of libraryBtns) {
   btn.onclick = (e) => {
      for (let btn of libraryBtns) {
         btn.classList.remove('active');
      }
      e.currentTarget.classList.add('active');
   };
}
