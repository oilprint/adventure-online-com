  document.addEventListener('DOMContentLoaded', () => {
    // // Находим в документе нужные элементы: кнопка открытия, модальное окно и кнопка закрытия

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll ('[data-modal]');

// Кнопки открытия модалки
modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector('#' + modalId);
    
    modal.classList.remove('hidden');

    // Делаем так, чтобы внутри модалки коик не передавался выше родителю: находим внутри открываемой модалки блок modal__window и запрещаем ему передавать клики наверх (его родителю)

    modal.querySelector('.modal__window').addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });
})

// Кнопки закрітия модалки
modalClosebuttons.forEach(function (item) {
  item.addEventListener('click', function () {
    
    const modal = this.closest('[data-modal]');
  
    modal.classList.add('hidden');
  })
})

// Закрытие по клику по всему экрану
allModals.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.add('hidden');
  })
})
});


  
      
  
 
