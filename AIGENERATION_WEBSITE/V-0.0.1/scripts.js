
// Function for toggling dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Function for opening a modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
  }
}

// Function for closing a modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
  }
}

// Add your own functions here
