var lista = document.getElementById('lista');
var pag = document.getElementById('page');
var nav = document.getAnimations('nav');
function sumir(lista,pag,nav) {
    if (lista.classList.contains("lista")) {
      lista.classList.remove("lista");
      lista.classList.add("oculto");
      pag.style.width = "100%";
      nav.style.width = "100%";
    } else {
      lista.classList.remove("oculto");
      lista.classList.add("lista");
    }}