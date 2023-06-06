// const hero = document.querySelector('#hero');
// const nav = document.querySelector('nav');

// // Fade in hero section on page load
// window.addEventListener('load', () => {
//   hero.style.opacity = 1;
// });

// // Fix header to top of page on scroll
// window.addEventListener('scroll', () => {
//   if (window.pageYOffset > nav.offsetTop) {
//     nav.classList.add('fixed');
//   } else {
//     nav.classList.remove('fixed');
//   }
// });

// // Smooth scrolling to anchor links
// const links = document.querySelectorAll('nav a');

// links.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();

//     const href = link.getAttribute('href');
//     const target = document.querySelector(href);
//     const targetTop = target.offsetTop;

//     window.scrollTo({
//       top: targetTop,
//       behavior: 'smooth'
//     });
//   });
// });