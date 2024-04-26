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
      lista.style.transition = "0.5s";
      pag.style.transition = "0.5s";
      
    }}
    function sumir1(lista,pag,nav,list1) {
      if (list1.classList.contains("list1")) {
        list1.classList.remove("list1");
        list1.classList.add("oculto");
        pag.style.width = "100%";
        nav.style.width = "100%";
      } else {
        list1.classList.remove("oculto1");
        list1.classList.add("list1");
        pag.style.width = "85%";
        nav.style.width = "100%";
        list1.style.transition = "0.5s";
        pag.style.transition = "0.5s";
        
      }}