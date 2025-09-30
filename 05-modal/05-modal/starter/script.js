'use strict';

// model elements
const modalEl = document.querySelector('.modal');

// overlay modal
const overlayEl = document.querySelector('.overlay');

// close modal
const btnCloseModalEl = document.querySelector('.close-modal');

// open modal
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModalEl.length);


const openModal = function () {
  // Remove the hidden class from modal 
  modalEl.classList.remove('hidden');

  // Remove the hidden class from overlay 
  overlayEl.classList.remove('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));


const closeModal = function () {
  modalEl.classList.add('hidden');

  overlayEl.classList.add('hidden');
};

btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);






