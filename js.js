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
//////////////////////////////////////////// inicio da area modal ////////////////////////////////////////

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closemodal")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//////////////////////////////////////////// fim da area modal ////////////////////////////////////////




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