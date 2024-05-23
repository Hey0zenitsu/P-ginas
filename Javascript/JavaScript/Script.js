var lista = document.getElementById('lista');
var pag = document.getElementById('page');
var nav = document.getElementById('nav');
var list1 = document.getElementById('list1');
function sumir(lista,pag,nav) {
    if (lista.classList.contains("lista")) {
      lista.classList.remove("lista");
      lista.classList.add("oculto");
      pag.style.width = "100%";
      nav.style.width = "100%";
    } else {
      lista.classList.remove("oculto");
      lista.classList.add("lista");
      pag.style.width = "85%";
      nav.style.width = "100%";
      lista.style.transition = "0.3s";
      pag.style.transition = "0.3s";
    }}

    
   