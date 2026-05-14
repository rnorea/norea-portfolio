// ============================================= showcase: projects list
// 'name', description, github, tech, image, '...'
//  0       1             2      3      4
const projects_list = [
  [
    'Stockarrier', 
    'Stock management system for startup company', 
    '', 
    'Python',
    '../assets/images/aman.jpg'
  ],
  [
    'Stockarrier', 
    'Stock management system for startup company', 
    '', 
    'Python',
    '../assets/images/aman.jpg'
  ],
  [
    'Stockarrier', 
    'Stock management system for startup company', 
    '', 
    'Python',
    '../assets/images/aman.jpg'
  ],
  [
    'Stockarrier', 
    'Stock management system for startup company', 
    '', 
    'Python',
    '../assets/images/aman.jpg'
  ],
  
]
const projects_HTML = projects_list.map(e => 
    `
    <div class="project-card">
      <div class="p-img-wrapper">
        <img src="${e[4]}" alt="Project" />
      </div>
      <div class="p-info">
        <span class="p-tag">"${e[3]}"</span>
        <h3>"${e[1]}"</h3>
        <p>"${e[1]}"</p>
        <div class="p-actions">
          <a href="#" class="view-detail">View Details</a>
          <a href="${e[2]}" class="github-link">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>
    </div>`

).join('');
document.getElementById('item-grid').innerHTML = projects_HTML;



// ============================================= showcase: certificates
// name, image, source
const certs = [
  [
    'Meta Frontend Developer', 
    '../assets/images/certs/Coursera_meta_intro_to_backend_dev.pdf', 
    'https://coursera.org/share/45b60fa840de4160583131c383746b1a'],
  [
    'Meta Frontend Developer', 
    'cert-thumb.jpg', 
    'https://coursera.org/share/45b60fa840de4160583131c383746b1a'
  ],
  [
    'Meta Frontend Developer', 
    'cert-thumb.jpg', 
    ''
  ],
  [
    'Meta Frontend Developer', 
    'cert-thumb.jpg', 
    'https://coursera.org/share/45b60fa840de4160583131c383746b1a'
  ]
]

const certs_html = certs.map(c => 
  `
  <div href='${c[2]}' target="_blank" class="cert-item">
    <div class="c-img-wrapper">
      <img src="${c[1]}" alt="${c[0]} Certificate">
    </div>
    <h3>${c[0]}</h3>

    <a href="${c[2]}" target="_blank" class="view-cert-detail view-detail">View Details</a>

  </div>`
).join("")
document.getElementById('certs-grid').innerHTML = certs_html


// ====================================== showcase: tech stack
const tech = [
  ['Web Frontend & Mobile',
    [
      ['React JS', '../assets/icons/email_black.svg'], 
      ['Tailwind CSS', '../assets/icons/email_black.svg'],
      ['Bootstrap', '../assets/icons/email_black.svg'],
      ['Flutter', '../assets/icons/email_black.svg'],
    ]
  ],
  ['Tools',
    [
      ['VS Code', '../assets/icons/email_black.svg'],
      ['Git', '../assets/icons/email_black.svg'], 
      ['GitHub', '../assets/icons/email_black.svg'], 
      ['Figma', '../assets/icons/email_black.svg'],
    ]
  ],
  ['Data, Analysis & Visualization',
    [
      ['MySQL', '../assets/icons/email_black.svg'], 
      ['SQLite', '../assets/icons/email_black.svg'],
      ['Microsoft Excel', '../assets/icons/email_black.svg'], 
      ['Pandas (Python)', '../assets/icons/email_black.svg'],
      ['Matplotlib (Python)', '../assets/icons/email_black.svg'],
    ]
  ],

]

const html = tech.map(t => {
  const title = t[0]
  const elements_html = t[1].map(e => {
    return `<div class="tech-card"><img src="${e[1]}"> <span>${e[0]}</span></div>`
  }).join("")


  return `
    <div class="tech-category">
      <h4 class="tech-label">${title}</h4>
      <div class="tech-grid">
        ${elements_html}
      </div>
    </div>
    `
}).join("")

document.getElementById('tech').innerHTML = html
