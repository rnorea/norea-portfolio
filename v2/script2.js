
//set default indicator at home
document.getElementById('home').classList.add('active')

nav_list = document.querySelectorAll(".menu-list")
nav_list.forEach(link=> { 
  link.addEventListener('click', (e)=>{
    nav_list.forEach(l => {
      l.classList.remove('active')
     })
    link.classList.add('active')    
  })
});



burger_btn = document.getElementById('burger-btn')
nav_bar_list = document.getElementById('nav-bar-list')
nav_con = document.getElementById('nav-container')

burger_btn.addEventListener('click', ()=>{
  burger_btn.classList.toggle('active')
  nav_bar_list.classList.toggle('active')
  nav_con.classList.toggle('active')
})

header = document.getElementById("main-header")
let lastScrolly = window.scrollY
window.addEventListener("scroll", ()=>{
  const cur = window.scrollY

  if(cur>lastScrolly){
    header.classList.add('hidden')
  }else{
    header.classList.remove('hidden')
  }

  lastScrolly = cur
})
