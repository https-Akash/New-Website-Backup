/*===========================================
   Firebase Configuration for Akash's Portfolio
===========================================*/

document.addEventListener('DOMContentLoaded', function() {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "akash-portfolio.firebaseapp.com",
        projectId: "akash-portfolio",
        storageBucket: "akash-portfolio.appspot.com",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };
    
    // Initialize Firebase
    try {
        firebase.initializeApp(firebaseConfig);
        console.log("Firebase initialized successfully");
    } catch (error) {
        console.error("Firebase initialization error:", error);
    }
    
    // Reference to Firestore
    const db = firebase.firestore();
    
    // Get contact form
    const contactForm = document.getElementById('contact-form');
    
    // If contact form exists on this page
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Handle form submission
    async function handleFormSubmit(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const timestamp = new Date();
        
        // Validate form
        if (!name || !email || !message) {
            showMessage('error', 'Please fill in all fields.');
            return;
        }
        
        // Validate email format
        if (!isValidEmail(email)) {
            showMessage('error', 'Please enter a valid email address.');
            return;
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="loader"></span> Sending...';
        
        try {
            // Add message to Firestore
            await db.collection('messages').add({
                name,
                email,
                message,
                timestamp,
                read: false
            });
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            showMessage('success', 'Your message has been sent successfully!');
            
            // Trigger success animation
            triggerSuccessAnimation();
            
        } catch (error) {
            console.error("Error sending message:", error);
            
            // Show error message
            showMessage('error', 'There was an error sending your message. Please try again.');
            
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    }
    
    // Validate email format using regex
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show message function
    function showMessage(type, text) {
        // Check if message container exists, create if not
        let messageContainer = document.querySelector('.message-container');
        
        if (!messageContainer) {
            messageContainer = document.createElement('div');
            messageContainer.className = 'message-container';
            contactForm.parentNode.insertBefore(messageContainer, contactForm.nextSibling);
        }
        
        // Create message element
        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = text;
        
        // Add close button
        const closeBtn = document.createElement('span');
        closeBtn.className = 'message-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = function() {
            message.classList.add('fade-out');
            setTimeout(() => message.remove(), 500);
        };
        
        message.appendChild(closeBtn);
        messageContainer.appendChild(message);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (message) {
                message.classList.add('fade-out');
                setTimeout(() => message.remove(), 500);
            }
        }, 5000);
    }
    
    // Trigger success animation with confetti
    function triggerSuccessAnimation() {
        // Create confetti container if it doesn't exist
        let confettiContainer = document.getElementById('confetti-container');
        
        if (!confettiContainer) {
            confettiContainer = document.createElement('div');
            confettiContainer.id = 'confetti-container';
            document.body.appendChild(confettiContainer);
        }
        
        // Create confetti pieces
        const colors = ['#6a00f4', '#00c3ff', '#00ff9c'];
        
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.opacity = Math.random();
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            
            confettiContainer.appendChild(confetti);
        }
        
        // Remove confetti after animation
        setTimeout(() => {
            confettiContainer.classList.add('fade-out');
            setTimeout(() => {
                confettiContainer.remove();
            }, 1000);
        }, 4000);
    }
}); 