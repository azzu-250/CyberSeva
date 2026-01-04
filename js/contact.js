// Contact form submission
function sendMessage() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Show success popup
    showModal(
        'Message Sent Successfully!',
        'Thank you for your message. We have received it and will get back to you as soon as possible.'
    );

    // Reset form
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactSubject').value = '';
    document.getElementById('contactMessage').value = '';
}