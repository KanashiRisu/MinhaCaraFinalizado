let tema = document.getElementById('tema')
let body = document.querySelector('body')

tema.addEventListener('click', ()=>{
    tema.classList.toggle('light')
    body.classList.toggle('light')
})


window.onscroll = function(){
    scroll();
}

function scroll(){
    var btn = document.getElementById("btnTop");
    if(document.documentElement.scrollTop > 400){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
}

function backToTop(){
    document.getElement.scrollTop = 0;
}