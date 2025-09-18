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

    if (!content.contains(e.target)) modal.classList.add('hidden');
  });
});