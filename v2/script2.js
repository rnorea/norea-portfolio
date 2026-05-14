// 
// //set default indicator at home
// document.getElementById('home').classList.add('active')
// 
// nav_list = document.querySelectorAll(".menu-list")
// nav_list.forEach(link=> { 
//   link.addEventListener('click', (e)=>{
//     nav_list.forEach(l => {
//       l.classList.remove('active')
//      })
//     link.classList.add('active')    
//   })
// });
// 
// 
// 
// burger_btn = document.getElementById('burger-btn')
// nav_bar_list = document.getElementById('nav-bar-list')
// nav_con = document.getElementById('nav-container')
// 
// burger_btn.addEventListener('click', ()=>{
//   burger_btn.classList.toggle('active')
//   nav_bar_list.classList.toggle('active')
//   nav_con.classList.toggle('active')
// })
// 
// header = document.getElementById("main-header")
// let lastScrolly = window.scrollY
// window.addEventListener("scroll", ()=>{
//   const cur = window.scrollY
// 
//   if(cur>lastScrolly){
//     header.classList.add('hidden')
//   }else{
//     header.classList.remove('hidden')
//   }
// 
//   lastScrolly = cur
// })


card_container = document.getElementById('card-container')
const interval = setInterval(() => {
  card_container.classList.toggle('active')
}, 30000);
card_container.addEventListener('click', ()=>{
  card_container.classList.toggle('active')
})


contact_links = document.querySelectorAll(".contact-link")
let timer

contact_links.forEach(link => {
  link.addEventListener('mouseenter', ()=>{
    contact_links.forEach(l => l.classList.remove('enter'))
    clearTimeout(timer)
    link.classList.add("enter")
  })
  link.addEventListener("mouseleave", ()=>{
    timer = setTimeout(()=>{
      link.classList.remove('enter')
    }, 10000)
  })
});

(function(){
  document.querySelectorAll('.about-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.about-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
  });
    })();



const nav = document.getElementById('navbar');
const darkSections = document.querySelectorAll('.stack');

// Keep track of which dark sections are currently "active"
const visibleDarkSections = new Set();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add this section to our set of visible dark areas
      visibleDarkSections.add(entry.target);
    } else {
      // Remove it when it leaves
      visibleDarkSections.delete(entry.target);
    }
  });

  // If the set has anything in it, we are over a dark section
  if (visibleDarkSections.size > 0) {
    nav.classList.add('nav--dark');
  } else {
    nav.classList.remove('nav--dark');
  }
}, { 
  threshold: 0, 
  // Adjust rootMargin so the "trigger" line matches your navbar height
  rootMargin: '-60px 0px -90% 0px' 
});

darkSections.forEach(s => observer.observe(s));




// =================== contact section ========================
/* ── scroll reveal ── */
const contactSection = document.querySelector('.contact');
if (contactSection) {
  const revealObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      contactSection.classList.add('visible');
      revealObserver.disconnect();
    }
  }, { threshold: 0.1 });
  revealObserver.observe(contactSection);
}
 
/* ── form submit (replace with your backend/formspree) ── */
function handleContactSubmit(e) {
  e.preventDefault();
  const toast = document.getElementById('cf-toast');
  toast.classList.add('show');
  e.target.reset();
  setTimeout(() => toast.classList.remove('show'), 3500);
}














function showCategory(categoryId) {
  // Hide all panels
  const panels = document.querySelectorAll('.category-panel');
  panels.forEach(p => p.classList.remove('active'));

  // Deactivate all buttons
  const buttons = document.querySelectorAll('.control-btn');
  buttons.forEach(b => b.classList.remove('active'));

  // Show selected panel and activate button
  document.getElementById(categoryId).classList.add('active');
  event.currentTarget.classList.add('active');
  
  // // Optional: Scroll to top of section on mobile
  // if(window.innerWidth < 860) {
  //     document.querySelector('.portfolio-content').scrollIntoView({ behavior: 'smooth' });
  // }
}

