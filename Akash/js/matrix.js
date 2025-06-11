/*===========================================
   Matrix Rain Effect for Akash's Portfolio
===========================================*/

document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas element
    const canvas = document.getElementById('matrix-canvas');
    
    // Return if canvas doesn't exist
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to full screen
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // Call resizeCanvas initially and on window resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix character set - using a mix of characters for a digital look
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Split the character set into an array
    const charArray = chars.split('');
    
    // Configure matrix
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    
    // Array to store the y position of each drop
    const drops = [];
    
    // Initialize all drops at random positions above the screen
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -canvas.height / fontSize);
    }
    
    // Array to store the color of each drop
    const colors = [];
    const primaryColors = ['#6a00f4', '#00c3ff', '#00ff9c'];
    
    // Initialize colors array with random primary colors
    for (let i = 0; i < columns; i++) {
        colors[i] = primaryColors[Math.floor(Math.random() * primaryColors.length)];
    }
    
    // Draw the matrix rain effect
    function drawMatrix() {
        // Set semi-transparent background to create trail effect
        ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // For each column
        for (let i = 0; i < drops.length; i++) {
            // Pick a random character
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            
            // Set the font style
            ctx.font = `${fontSize}px Orbitron`;
            
            // Set the color with a gradient for the first character
            if (drops[i] * fontSize >= 0 && drops[i] * fontSize < canvas.height) {
                // Create gradient for leading character
                const gradient = ctx.createLinearGradient(
                    i * fontSize, drops[i] * fontSize, 
                    i * fontSize, drops[i] * fontSize + fontSize
                );
                gradient.addColorStop(0, 'white');
                gradient.addColorStop(1, colors[i]);
                ctx.fillStyle = gradient;
                
                // Draw the leading character
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                // Draw trailing characters with primary color
                ctx.fillStyle = colors[i];
                
                // Draw some trailing characters with dimming opacity
                for (let j = 1; j < 5; j++) {
                    const trailY = drops[i] * fontSize - j * fontSize;
                    if (trailY >= 0) {
                        ctx.globalAlpha = (5 - j) / 10; // Decreasing opacity
                        ctx.fillText(
                            charArray[Math.floor(Math.random() * charArray.length)],
                            i * fontSize,
                            trailY
                        );
                    }
                }
                
                // Reset alpha
                ctx.globalAlpha = 1;
            }
            
            // Increment y position for the column
            drops[i]++;
            
            // If the drop is below the canvas, reset it to a random position above
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
                drops[i] = Math.floor(Math.random() * -20);
                // Randomize color when resetting
                colors[i] = primaryColors[Math.floor(Math.random() * primaryColors.length)];
            }
        }
    }
    
    // Set initial opacity to very low - Matrix is an easter egg
    canvas.style.opacity = '0.03';
    
    // Start the animation loop
    function animate() {
        drawMatrix();
        requestAnimationFrame(animate);
    }
    
    animate();
}); 