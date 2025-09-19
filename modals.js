// open modal
document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.dataset.target;               // get the modal linked to this card
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');                 // remove 'hidden' to show modal
  });
});

// close modal
document.querySelectorAll('.modal').forEach(modal => {
  const btn = modal.querySelector('.close_button');

  modal.addEventListener('click', (e) => {
    const content = modal.querySelector('.modal_content');

    // click on button OR within a small buffer around button
    const buffer = 10; // pixels
    const rect = btn.getBoundingClientRect();

    if (
      e.target === btn ||
      (
        e.clientX >= rect.left - buffer &&
        e.clientX <= rect.right + buffer &&
        e.clientY >= rect.top - buffer &&
        e.clientY <= rect.bottom + buffer
      )
    ) {
      modal.classList.add('hidden');
    }
  });
});

function resizeModal() {
  const modal = document.getElementById('modal_one'); // target only modal_one
  if (!modal) return; // if modal_one doesn't exist, do nothing

  const maxWidth = window.innerWidth * 0.9;
  const maxHeight = window.innerHeight * 0.9;

  const pageWidth = 800;
  const pageHeight = 1131;
  const aspectRatio = pageHeight / pageWidth;

  let width = maxWidth;
  let height = width * aspectRatio;

  if (height > maxHeight) {
    height = maxHeight;
    width = height / aspectRatio;
  }

  modal.style.width = width + "px";
  modal.style.height = height + "px";
}

window.addEventListener('resize', resizeModal);
resizeModal();

