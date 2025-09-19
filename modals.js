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

const iframe = document.getElementById("project_one_file");

// Example for 8.5x11 inch page (A4 ~ 1:1.414 aspect ratio)
const pageWidth = 800;  // width in px
const pageHeight = 1131; // height in px
const aspectRatio = pageHeight / pageWidth;

function resizeModal() {
  const maxWidth = window.innerWidth * 0.9;
  const maxHeight = window.innerHeight * 0.9;

  let width = maxWidth;
  let height = width * aspectRatio;

  if (height > maxHeight) {
    height = maxHeight;
    width = height / aspectRatio;
  }

  document.querySelector('.modal').style.width = width + "px";
  document.querySelector('.modal').style.height = height + "px";
}

window.addEventListener('resize', resizeModal);
resizeModal();

