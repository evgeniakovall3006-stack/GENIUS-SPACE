const modal = document.querySelector('.backdrop');
const modalOpenBtn = document.querySelector('.modal-btn-open');
const modalCloseBtn = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden'); 

modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);