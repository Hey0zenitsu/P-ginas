var lista = document.getElementById('lista');
var pag = document.getElementById('page');
var nav = document.getElementById('nav');
var list1 = document.getElementById('list1');
var btn = document.getElementById('btn_menu');
function sumir(lista,pag,nav,btn) {
    if (lista.classList.contains("lista")) {
      lista.classList.remove("lista");
      lista.classList.add("oculto");
      pag.style.width = "100%";
      nav.style.width = "100%";
      btn.style.transition = "0.5s"
      btn.style.transform = "rotateZ(360deg)";
    } else {
      lista.classList.remove("oculto");
      lista.classList.add("lista");
      pag.style.width = "85%";
      nav.style.width = "100%";
      lista.style.transition = "0.3s";
      pag.style.transition = "0.3s";
      btn.style.transition = "0.5s"
      btn.style.transform = "rotateZ(180deg)";
    }}
   