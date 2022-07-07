function menu() {
   let menu = document.querySelector('.menuarea')
   if (menu.classList.contains('opened')=== true) {
      menu.classList.remove('opened')
      menu.classList.add('closed')      
   } else {
      menu.classList.remove('closed')
      menu.classList.add('opened')
   }
}