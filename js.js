function abrirmenu() {
   let menu = document.querySelector('.menuarea')
   if (menu.classList.contains('open')=== true) {
      menu.classList.remove('open')
      menu.classList.add('close')      
   } else {
      menu.classList.remove('close')
      menu.classList.add('open')
   }
}

function abrirsaibamais() {
   let text = document.querySelector('.cardtext')
   if (text.classList.contains('closetext')=== true) {
      text.classList.remove('closetext')
      text.classList.add('opentext')
   } else {
      text.classList.remove('opentext')
      text.classList.add('closetext')
   }
}



//////////////////////////////////// função do menu /////////////////////
function myFunction(x) {
   x.classList.toggle("change");
 }
//////////////////////////////////// função do scrooll top /////////////////////

function topodatela() {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',      
   });
}

function decidirbotão() {  
   if (window.scrollY <= 100) {
      document.querySelector('.buttontop').style.display = 'none';
   } else {
      document.querySelector('.buttontop').style.display = 'block';
   }
}


window.addEventListener('scroll', decidirbotão)