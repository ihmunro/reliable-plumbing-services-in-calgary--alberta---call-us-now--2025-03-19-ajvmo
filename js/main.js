// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(this)) {
                // Handle form submission
                submitForm(this);
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});

// Form validation function
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    return isValid;
}

// Form submission function
async function submitForm(form) {
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    try {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        
        // Replace with your actual form submission endpoint
        const response = await fetch('/api/submit-form', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            showNotification('Form submitted successfully!', 'success');
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        showNotification('Error submitting form. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Service booking system
class ServiceBooking {
    constructor() {
        this.selectedService = null;
        this.selectedDate = null;
        this.selectedTime = null;
    }

    setService(service) {
        this.selectedService = service;
        this.updateBookingSummary();
    }

    setDate(date) {
        this.selectedDate = date;
        this.updateBookingSummary();
    }

    setTime(time) {
        this.selectedTime = time;
        this.updateBookingSummary();
    }

    updateBookingSummary() {
        const summary = document.querySelector('.booking-summary');
        if (summary) {
            summary.innerHTML = `
                <h3>Booking Summary</h3>
                ${this.selectedService ? `<p>Service: ${this.selectedService}</p>` : ''}
                ${this.selectedDate ? `<p>Date: ${this.selectedDate}</p>` : ''}
                ${this.selectedTime ? `<p>Time: ${this.selectedTime}</p>` : ''}
            `;
        }
    }
}

// Initialize service booking if on booking page
if (document.querySelector('.service-booking')) {
    const booking = new ServiceBooking();
    window.booking = booking;
} 