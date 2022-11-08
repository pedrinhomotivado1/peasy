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

//////////////////////////////////////////// modal box 1 ////////////////////////////////////////
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

//////////////////////////////////////////// modal box 2 ////////////////////////////////////////

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
//////////////////////////////////////////// modal box 3 ////////////////////////////////////////

// Get the modal
var modal2 = document.getElementById("myModal2");
// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("closemodal")[2];
// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
//////////////////////////////////////////// modal box 4 ////////////////////////////////////////
// Get the modal
var modal3 = document.getElementById("myModal3");
// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");
// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("closemodal")[3];
// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

//////////////////////////////////////////// modal box 5 ////////////////////////////////////////
// Get the modal
var modal4 = document.getElementById("myModal4");
// Get the button that opens the modal
var btn4 = document.getElementById("myBtn4");
// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("closemodal")[4];
// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
//////////////////////////////////////////// modal box 6 ////////////////////////////////////////
// Get the modal
var modal5 = document.getElementById("myModal5");
// Get the button that opens the modal
var btn5 = document.getElementById("myBtn5");
// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("closemodal")[5];
// When the user clicks on the button, open the modal
btn5.onclick = function() {
  modal5.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
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