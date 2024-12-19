window.addEventListener('scroll',()=>{
  let navbar=document.getElementById('menu-bar')
  if(window.scrollY>=400){
     navbar.classList.add('sticky')
  }else{
    navbar.classList.remove('sticky')
  }
})