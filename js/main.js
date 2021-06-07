const navbar_toggle = document.getElementById('navbar__toggle');
const navbar_list = document.getElementById('navbar__list');
const navbar_links = document.querySelectorAll('a.navbar__link');
const modal = document.getElementById('modal');
const views = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');
const close = document.querySelectorAll('.close');

//  Menu toggle 
navbar_toggle.addEventListener('click', () => {
  navbar_list.classList.toggle('show');
});

// Menu disappears when each link is clicked
navbar_links.forEach(link => {
  link.addEventListener('click', () => {
    navbar_list.classList.remove('show');
  });
});

// Open modal window
views.forEach(view => {
  // Get 'data- *' attributes using your dataset
  const v = document.querySelector(view.dataset.target);
  console.log(v);
  view.addEventListener('click', () => {
    modal.classList.add('modal-show');
    v.classList.add('active');
  })

  // Close modal window
  close.forEach(cls => {
    cls.addEventListener('click', () => {
      modal.classList.remove('modal-show');
      v.classList.remove('active');
    })
  });
});

