

let mouseCursor = document.querySelector (".cursor")
let navLinks = document.querySelectorAll (".navbar, .footer")
let hero = document.querySelectorAll (".brand-text-2")



window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';

}

navLinks.forEach(link =>{
    link.addEventListener ('mouseleave', () => {
        mouseCursor.classList.remove ('link-grow-dark')
    });
    link.addEventListener ('mouseover', () => {
        mouseCursor.classList.add ('link-grow-dark')
    });
});


hero.forEach(link =>{
    link.addEventListener ('mouseleave', () => {
        mouseCursor.classList.remove ('link-grow')
    });
    link.addEventListener ('mouseover', () => {
        mouseCursor.classList.add ('link-grow')
    });
});



let highlightElements = document.querySelectorAll('.highlight');
let highlightElementsYellow = document.querySelectorAll('.highlight-yellow');
let highlightElementsDark = document.querySelectorAll('.highlight-dark');



highlightElements.forEach(highlightElement => {
    highlightElement.addEventListener('mouseover',() => {
      mouseCursor.style.opacity = 0;
    });
    highlightElement.addEventListener('mouseleave',() => {
      mouseCursor.style.opacity = 1;
    });
  });

  highlightElementsYellow.forEach(highlightElementYellow => {
    highlightElementYellow.addEventListener('mouseover',() => {
      mouseCursor.style.opacity = 0;
    });
    highlightElementYellow.addEventListener('mouseleave',() => {
      mouseCursor.style.opacity = 1;
    });
  });

  highlightElementsDark.forEach(highlightElementDark => {
    highlightElementDark.addEventListener('mouseover',() => {
      mouseCursor.style.opacity = 0;
    });
    highlightElementDark.addEventListener('mouseleave',() => {
      mouseCursor.style.opacity = 1;
    });
  });
