/*===========================================
   Minimal Custom Cursor for Akash's Portfolio
===========================================*/

document.addEventListener('DOMContentLoaded', function() {
    // Get cursor elements
    const cursor = document.querySelector('.custom-cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    // Check if cursor elements exist (might not on some pages)
    if (!cursor || !cursorFollower) return;
    
    // Variables for smooth animation
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    // Update cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        // Update mouse position
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Move the cursor dot immediately
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
    
    // Animate follower with smooth delay
    function animateFollower() {
        // Calculate follower position with easing
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        // Apply the position with transform
        cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
        
        // Continue the animation loop
        requestAnimationFrame(animateFollower);
    }
    
    // Start the animation
    animateFollower();
    
    // Add hover effect for clickable elements (simplified)
    const hoverElements = document.querySelectorAll('a, button, .project-card');
    
    hoverElements.forEach(element => {
        // Mouse enter - subtle change
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorFollower.classList.add('follower-hover');
        });
        
        // Mouse leave - return to normal size
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorFollower.classList.remove('follower-hover');
        });
    });
    
    // Simple click effect
    document.addEventListener('mousedown', () => {
        cursorFollower.classList.add('follower-click');
    });
    
    document.addEventListener('mouseup', () => {
        cursorFollower.classList.remove('follower-click');
    });
    
    // Hide cursor when mouse leaves the document
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });
    
    // Show cursor when mouse enters the document
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });
    
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        cursorFollower.style.display = 'none';
        document.body.classList.add('touch-device');
    }
}); 