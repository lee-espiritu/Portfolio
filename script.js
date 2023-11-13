// script.js
//===================Mouse Click Ping=============================================
document.addEventListener('click', function(e) {
    // Create a ping element
    var ping = document.createElement('div');
    ping.classList.add('click-ping');
    
    // The size of the ping effect
    var size = 100; // Size in pixels
    
    // Position it at the center of where the click occurred
    // Subtract half the size from the click position to center it
    ping.style.left = `${e.clientX - size / 2}px`;
    ping.style.top = `${e.clientY - size / 2}px`;
    ping.style.width = `${size}px`;
    ping.style.height = `${size}px`;
  
    // Append to body and remove after animation is complete
    document.body.appendChild(ping);
    setTimeout(() => ping.remove(), 600); // 600ms is the animation duration
  });
  //=============================================================================
  
// Set initial z-index values
const pages = document.querySelectorAll('.book-page');
pages.forEach((page, index) => {
  // Assuming the profile page is the first one
  if (index === 0) { // if it's the profile page
    page.style.zIndex = pages.length;
  } else {
    page.style.zIndex = pages.length - index; // Set z-index in descending order for other pages
  }
});

//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

// Ensure this code is below your existing event listener for page turns
window.onload = () => {
  // Code to show profile page and reset other pages
  pages.forEach((page, index) => {
    if (index !== 0) { // if it's not the profile page
      page.classList.remove('turn'); // Remove 'turn' class if it's not the profile page
    }
  });
};

