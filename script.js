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