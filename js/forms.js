export function initForms() {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Add your form submission logic here
    console.log('Contact form submitted:', Object.fromEntries(formData));
    e.target.reset();
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Add your newsletter subscription logic here
    console.log('Newsletter form submitted:', Object.fromEntries(formData));
    e.target.reset();
}