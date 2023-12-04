const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
  bar.addEventListener('click', () =>  {
    nav.classList.add('active');
  })
}


const close = document.getElementById('close');

if(close){
  close.addEventListener('click', () =>  {
    nav.classList.remove('active');
  })
}





// ------------start s-product------------------------

var mainImg = document.getElementById('main-img')
var samllImg = document.getElementsByClassName('sml-img')

samllImg[0].onclick = function(){
  mainImg.src = samllImg[0].src;
}

samllImg[1].onclick = function(){
  mainImg.src = samllImg[1].src;
}

samllImg[2].onclick = function(){
  mainImg.src = samllImg[2].src;
}

samllImg[3].onclick = function(){
  mainImg.src = samllImg[3].src;
}

// ------------Eng s-product------------------------




