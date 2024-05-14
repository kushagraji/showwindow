'use strict';

//console.log(showModel);
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlays = document.querySelector('.overlay');
const showModel = document.querySelectorAll('.show-modal');
for (let i = 0; i < showModel.length; i++) {
  showModel[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlays.classList.remove('hidden');
  });
}

const modalClose = function () {
  modal.classList.add('hidden');
  overlays.classList.add('hidden');
};

closeModal.addEventListener('click', modalClose);
overlays.addEventListener('click', modalClose);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClose();
  }
});
