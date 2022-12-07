var conteinerplan = document.querySelectorAll('.areaplangeral')[0]
var buttonsaibamaisplan = document.querySelectorAll('.buttonsaibamaisplan')[0]
var titlesection = document.querySelectorAll('.titlesection')[0]
function abrirplan() {
    if (conteinerplan.classList.contains('closeplan')) {
        conteinerplan.classList.remove('closeplan')  
    } else {
        conteinerplan.classList.add('closeplan')
    }
}
