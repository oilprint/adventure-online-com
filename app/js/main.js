document.addEventListener('DOMContentLoaded', () => {
  // burger
  const openBtn = document.querySelector('[data-burger-open]');
  const closeBtn = document.querySelector('[data-burger-close]');
  const menu = document.querySelector('.header__nav');
  const wrapper = document.querySelector('.wrapper');
  console.log(closeBtn);

  openBtn.addEventListener('click', () => {
    console.log("click");
    openBtn.classList.add('hide');
    closeBtn.classList.remove('hide');
    menu.classList.add('open');
    wrapper.classList.add('lock');
  });

  closeBtn.addEventListener('click', () => {
    openBtn.classList.remove('hide');
    closeBtn.classList.add('hide');
    menu.classList.remove('open');
    wrapper.classList.remove('lock');
  });


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


  //distination cards blur

  const cards = document.querySelectorAll('.destinations-card');
    const blurOtherCards = (card) => {
      
      cards.forEach(item => {
          if (item !== card) {
              item.classList.add('blur')
          }
      });
  };

  cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          blurOtherCards(card);
      });
      card.addEventListener('mouseleave', () => {
          cards.forEach(item => {
              item.classList.remove('blur');
          });
      });
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

  tabsNav?.addEventListener('click', (e) => {
    if (e.target.classList.contains('tabs__nav-item')) {
      clickOnTabHandler(e.target);
    }
  });

  //accordion
  const accordion = document.querySelector('.faq__accordion');
  console.log(accordion);

  accordion?.addEventListener('click', (e) => {
    if (e.target.classList.contains('accordion__head')) {
        toggleAccordionHandler(e.target);
    }
  })

  function toggleAccordionHandler(target) {
    const accordionItem = target.closest('.accordion__item');
    if (accordionItem.classList.contains('open')) {
      accordionItem.classList.remove('open');
    } else {
      removeClasses(accordion.children, 'open');
      accordionItem.classList.add('open');
    }
  }
}); 