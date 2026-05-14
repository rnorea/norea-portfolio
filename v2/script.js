const cardContainer = document.getElementById('card-container');

cardContainer.addEventListener('click', () => cardContainer.classList.toggle('active'));
setInterval(() => cardContainer.classList.toggle('active'), 30000);


/* ============================================================
   CONTACT ICON HOVER EXPAND
   ============================================================ */
const contactLinks = document.querySelectorAll('.contact-link');
let hoverTimer;

contactLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    contactLinks.forEach(l => l.classList.remove('enter'));
    clearTimeout(hoverTimer);
    link.classList.add('enter');
  });

  link.addEventListener('mouseleave', () => {
    hoverTimer = setTimeout(() => link.classList.remove('enter'), 10000);
  });
});


/* ============================================================
   ABOUT TABS
   ============================================================ */
document.querySelectorAll('.about-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.about-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});


/* ============================================================
   NAV DARK MODE (intersection with dark sections)
   ============================================================ */
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


/* ============================================================
   CONTACT SECTION SCROLL REVEAL
   ============================================================ */
const contactSection = document.querySelector('.contact-section');

if (contactSection) {
  const revealObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      contactSection.classList.add('visible');
      revealObserver.disconnect();
    }
  }, { threshold: 0.1 });

  revealObserver.observe(contactSection);
}


/* ============================================================
   CONTACT FORM SUBMIT
   ============================================================ */
// function handleContactSubmit(e) {
//   e.preventDefault();
//   const toast = document.getElementById('cf-toast');
//   toast.classList.add('show');
//   e.target.reset();
//   setTimeout(() => toast.classList.remove('show'), 3500);
// }


/* ============================================================
   SHOWCASE CATEGORY FILTER
   ============================================================ */
// toggle button
const category_controls = document.querySelectorAll('.control-btm')
  category_controls.forEach(btn => {
  btn.addEventListener('click', ()=>{
    category_controls.classList.remove('active')
    btn.classList.add('active')
  })
})
//handle category to display
function showCategory(categoryId) {
  document.querySelectorAll('.category-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(categoryId).classList.add('active');
}
