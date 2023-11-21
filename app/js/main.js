const swiper = new Swiper('.swiper', {
  speed: 1500,
  loop: true,
  grabCursor: true,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  // mousewheel: true,
  autoplay: {
        delay: 1200,
        pauseOnMouseEnter: true,
      },
  spaceBetween: 18,
  parallax:true, 
  keyboard: {
        enabled: true,
      },
});


function removeClasses(elements, className) {
  for (el of elements) {
    el.classList.remove(className);
  };
};

//tabs
const tabsNav = document.querySelector('.tabs__nav'),
      tabsContent = document.querySelector('.tabs__content');

function clickOnTabHandler(target) {
  removeClasses(tabsNav.children, 'active');
  removeClasses(tabsContent.children, 'active');
  target.classList.add('active');
  const contentItem = tabsContent.querySelector(`[data-content="${target.dataset.id}"]`);
  contentItem.classList.add('active');
};

tabsNav.addEventListener('click', (e) => {
  if (e.target.classList.contains('tabs__nav-item')) {
    clickOnTabHandler(e.target);
  }
});


//accordion
const accordion = document.querySelector('.faq__accordion');
console.log(accordion);

accordion.addEventListener('click', (e) => {
  if (e.target.classList.contains('accordion__head')) {
    console.log('hhhhh');
      toggleAccordionHandler(e.target);
  }
})

function toggleAccordionHandler(target) {
  const accordionItem = target.closest('.accordion__item');
  if (accordionItem.classList.contains('open')) {
    accordionItem.classList.remove('open');
  } else {
    console.log(accordion.children);
    removeClasses(accordion.children, 'open');
    accordionItem.classList.add('open');
  }

}