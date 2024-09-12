document.addEventListener('DOMContentLoaded', () => {
  // burger
  const openBtn = document.querySelector('[data-burger-open]');
  const closeBtn = document.querySelector('[data-burger-close]');
  const menu = document.querySelector('.header__nav');
  const wrapper = document.querySelector('.wrapper');

  openBtn.addEventListener('click', () => {
    console.log("click");
    openBtn.classList.add('hide');
    closeBtn.classList.remove('hide');
    menu.classList.add('open');
    wrapper.classList.add('lock');
    document.querySelector('html').classList.add('lock');
  });

  closeBtn.addEventListener('click', () => {
    openBtn.classList.remove('hide');
    closeBtn.classList.add('hide');
    menu.classList.remove('open');
    document.querySelector('html').classList.remove('lock');
    wrapper.classList.remove('lock');
  });


  //modal
  const modalButton = document.querySelector('[data-modal-button]');
  const modalClosebutton = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');
  
  modalButton.addEventListener('click', () => {  
    console.log('open');
    modal.classList.remove('hidden');
    wrapper.classList.add('lock');
    document.querySelector('html').classList.add('lock');
  });

  // close 
  
  modalClosebutton.addEventListener('click', function () {
    console.log('close');
    const modal = this.closest('[data-modal]');
    modal.classList.add('hidden');
    wrapper.classList.remove('lock');
    document.querySelector('html').classList.remove('lock');
  })
  // Закрытие по клику по всему экрану
  modal.addEventListener('click', function () {
    this.classList.add('hidden');
    wrapper.classList.remove('lock');
    document.querySelector('html').classList.remove('lock');
  })


  //end modal


  //swiper

  const swiper1 = new Swiper('.swiper-1', {
    speed: 1500,
    loop: true,
    grabCursor: true,
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    
    spaceBetween: 18,
    parallax:true, 
    keyboard: {
          enabled: true,
        },

    autoplay: {
    enabled: false,
    },
    breakpoints: {
      768: {
        autoplay: {
          enabled: true,
          delay: 3000,
          pauseOnMouseEnter: true,
        }
      }
    },     
  });

  const swiper2 = new Swiper('.swiper-2', {
     slidesPerView: 1,
    spaceBetween: 200,
    loop: true,
     autoplay: {
      delay: 5000,
    },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }, 

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
  });


  //swiper-3

  const swiper3 = new Swiper('.swiper-3', {
    speed: 1500,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
    },
    slideToClickedSlide: true,

    pagination: {
    el: '.swiper-pagination',
  },
    
  
    spaceBetween: 18,
  });

  //logo footer
  const logoFooter = document.querySelector('.footer__logo')
  
  logoFooter.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  accordion.addEventListener('click', (e) => {
    console.log("vjenvjvjer");
    
    if (e.target.classList.contains('accordion__head')) {
        toggleAccordionHandler(e.target);
    }
  })

  function toggleAccordionHandler(target) {
    const accordionItem = target.closest('.accordion__item');
    console.log(accordionItem);
    if (accordionItem.classList.contains('open')) {

      console.log('yes');
      
      accordionItem.classList.remove('open');
    } else {
      removeClasses(accordion.children, 'open');
      accordionItem.classList.add('open');
    }
  }
}); 