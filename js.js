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
var modal0 = document.getElementById("myModal0");
// Get the button that opens the modal
var btn0 = document.getElementById("myBtn0");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closemodal")[0];
// When the user clicks on the button, open the modal
btn0.onclick = function() {
  modal0.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal0.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal0) {
    modal0.style.display = "none";
  }
}

// Get the modal
var modal1 = document.getElementById("myModal1");
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("closemodal")[1];
// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
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