/*===========================================
   Random Facts Script for Akash's Portfolio
===========================================*/

document.addEventListener('DOMContentLoaded', function() {
    // Get random fact elements
    const factText = document.getElementById('fact-text');
    const newFactBtn = document.getElementById('new-fact-btn');
    
    // Return if elements don't exist
    if (!factText || !newFactBtn) return;
    
    // Array of random facts about Akash
    const facts = [
        "From casual hobby coder to full-stack developer — my unexpected journey in tech.",
        "Finally conquered GTA V, my dream game, a whole 14 years after its release. Worth the wait!",
        "Mastered web development on a budget laptop before upgrading to my dream gaming/coding beast.",
        "Built an entire functional website from scratch using just my smartphone. Mobile development taken literally!",
        "Proud gaming enthusiast with 1000+ games conquered across multiple platforms. Sleep is optional.",
        "Logged over 500 hours in both GTA V and RDR II — that's a month of my life in Rockstar's universes!",
        "Commerce student by day, code wizard by night. Proving passion beats traditional pathways every time."
    ];
    
    // Show a random fact from the array
    function showRandomFact() {
        // Disable button during animation
        newFactBtn.disabled = true;
        
        // Fade out current fact
        factText.classList.add('fade-out');
        
        setTimeout(() => {
            // Get random fact that is different from current one
            let newFact;
            do {
                newFact = facts[Math.floor(Math.random() * facts.length)];
            } while (newFact === factText.textContent && facts.length > 1);
            
            // Update text
            factText.textContent = newFact;
            
            // Fade in new fact
            factText.classList.remove('fade-out');
            factText.classList.add('fade-in');
            
            // Remove animation classes after animation completes
            setTimeout(() => {
                factText.classList.remove('fade-in');
                // Enable button again
                newFactBtn.disabled = false;
            }, 500);
        }, 500);
    }
    
    // Add click event to the button
    newFactBtn.addEventListener('click', showRandomFact);
    
    // Add button hover effect
    newFactBtn.addEventListener('mouseover', () => {
        newFactBtn.classList.add('pulse');
    });
    
    newFactBtn.addEventListener('mouseout', () => {
        newFactBtn.classList.remove('pulse');
    });
}); 