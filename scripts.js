document.querySelectorAll('.bundle-box').forEach(box => {
    box.addEventListener('click', () => {
      // Close all other boxes before toggling the clicked one
      document.querySelectorAll('.bundle-box').forEach(otherBox => {
        if (otherBox !== box) {
          otherBox.classList.remove('active');
        }
      });
      // Toggle the clicked box
      box.classList.toggle('active');
      
    });
  });

// If you have specific dropdown options inside the .bundle-box, add this to those options as well:
document.querySelectorAll('.size-color-wrapper').forEach(option => {
    option.addEventListener('click', (e) => {
        // Prevent the click event from propagating to the parent .bundle-box
        e.stopPropagation();
    });
});

  