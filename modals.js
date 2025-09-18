document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.dataset.target;               // get the modal linked to this card
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');                 // remove 'hidden' to show modal
  });
});
// Close modal when clicking outside content
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });
});