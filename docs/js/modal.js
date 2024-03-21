document.addEventListener('DOMContentLoaded', () => {
  
  const modalButton = document.querySelector('[data-modal-button]');
  const modalClosebutton = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');
  const wrapper = document.querySelector('.wrapper');
  

  modalButton.addEventListener('click', () => {  
    console.log('open');
    modal.classList.remove('hidden');
    wrapper.classList.add('lock');
  });

  // close 
  
  modalClosebutton.addEventListener('click', function () {
    console.log('close');
    const modal = this.closest('[data-modal]');
    modal.classList.add('hidden');
    wrapper.classList.remove('lock');
  })
  // Закрытие по клику по всему экрану
  modal.addEventListener('click', function () {
    this.classList.add('hidden');
    wrapper.classList.remove('lock');
  })
  
});