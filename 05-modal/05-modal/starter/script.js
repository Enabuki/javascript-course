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
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  // Move focus to the modal
  modalEl.focus();
  // Store which button opened the modal
  lastFocusedButton = document.activeElement;
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));


let lastFocusedButton = null;


const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  // Restore focus to the button that opened the modal
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
  // Check if ESC key was pressed AND modal is visible
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');

btnCloseModalEl.setAttribute('aria-label', 'Close modal');


