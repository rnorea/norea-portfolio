
// dynamic changing navbar to dark on dark section
const nav = document.getElementById('navbar');
const visibleDarkSections = new Set();

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) visibleDarkSections.add(entry.target);
    else visibleDarkSections.delete(entry.target);
  });
  nav.classList.toggle('nav--dark', visibleDarkSections.size > 0);
}, {
  threshold: 0,
  rootMargin: '-60px 0px -90% 0px'
});
document.querySelectorAll('.stack').forEach(s => navObserver.observe(s));




// nav on scroll hide, for mobile only max-width: 540px
const isMobile = window.matchMedia('(max-width: 540px)');
if (isMobile.matches){  

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 50) {
      nav.classList.add('nav-hidden'); 
    } else {
      nav.classList.remove('nav-hidden');
    }
    
    lastScroll = currentScroll;
  });

}



// ============================= oberver
function observeElement(arr, threshold=0.5, func=null, cl=['show']){
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible', ...cl);
        revealObserver.unobserve(entry.target);
        if(typeof func === 'function') func()
          
      }
    })
  }, { threshold: threshold });

  arr.forEach(e => {
    if (e) revealObserver.observe(e); 
  });
}


// on scroll reveal
const animate = [
  document.querySelector('.about-title-wrap'),
  document.querySelector('.about-profile'),
  document.querySelector('.about-left'),
  document.querySelector('.about-right'),
  document.querySelector('.about-stats'),
  
  document.querySelector('.showcase-header'),
  document.querySelector('.showcase-controls'),

  document.querySelector('.contact-heading'),
  document.querySelector('.contact-eyebrow'),
  document.querySelector('.contact-sub'),
  document.querySelector('.contact-info-list'),
  document.querySelector('.contact-form'),
  document.querySelector('.contact-form-heading'),

  document.querySelector('.credit-section')
];

observeElement(animate)
observeElement(
  [document.querySelector('.showcase-container')],
  0.25,
  ()=> setTimeout(() => {
    document.querySelector('.showcase-container').classList.remove('visible')
  }, 1500),
  ['show']
)




// ========================== show case filter
// 1st, this approach is a bit laggy, because each panel uses display: none->block??
// const category_controls = document.querySelectorAll('.control-btn')
// const category_items = document.querySelectorAll('.category-panel')
//   category_controls.forEach(btn => {
//   btn.addEventListener('click', (e)=>{
//     const cate = e.target.dataset.role
// 
//     category_items.forEach(p => p.classList.remove('active'));
//     document.getElementById(cate).classList.add('active');
// 
//     category_controls.forEach(c => c.classList.remove('active'))
//     btn.classList.add('active')
//   })
// })

// 2nd, faster
const category_controls = document.querySelectorAll('.control-btn');
const category_items = document.querySelectorAll('.category-panel');
const showcase = document.getElementById('showcase-section')

const panelMap = {};
category_items.forEach(p => panelMap[p.id] = p);

let activeBtn = document.querySelector('.control-btn.active');
let activePanel = document.querySelector('.category-panel.active');

category_controls.forEach(btn => {
  btn.addEventListener('click', (e) => {
    showcase.scrollIntoView({ behavior: 'smooth' });

    const cate = btn.dataset.role;
    const targetPanel = panelMap[cate];

    if (activeBtn) activeBtn.classList.remove('active');
    if (activePanel) activePanel.classList.remove('active');

    btn.classList.add('active');
    if (targetPanel) targetPanel.classList.add('active');

    activeBtn = btn;
    activePanel = targetPanel;
  });
});