// Complaint form navigation
let currentStep = 1;

function nextStep(step) {
    // Validate current step
    if (step === 1) {
        const name = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (!name || !email || !phone) {
            alert('Please fill in all required personal details');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
    } else if (step === 2) {
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;

        if (!category || !date || !description) {
            alert('Please fill in all required incident details');
            return;
        }
    }

    // Update steps UI
    document.querySelector(`.step[data-step="${step}"]`).classList.remove('active');
    document.querySelector(`.step[data-step="${step}"]`).classList.add('completed');
    document.querySelector(`.step[data-step="${step + 1}"]`).classList.add('active');

    // Update form UI
    document.getElementById(`step-${step}`).classList.remove('active');
    document.getElementById(`step-${step + 1}`).classList.add('active');

    // Update review if we're on the last step
    if (step + 1 === 4) {
        updateReview();
    }

    currentStep = step + 1;
}

function prevStep(step) {
    // Update steps UI
    document.querySelector(`.step[data-step="${step}"]`).classList.remove('active');
    document.querySelector(`.step[data-step="${step - 1}"]`).classList.remove('completed');
    document.querySelector(`.step[data-step="${step - 1}"]`).classList.add('active');

    // Update form UI
    document.getElementById(`step-${step}`).classList.remove('active');
    document.getElementById(`step-${step - 1}`).classList.add('active');

    currentStep = step - 1;
}

function updateReview() {
    document.getElementById('review-name').textContent =
        document.getElementById('fullName').value;

    document.getElementById('review-email').textContent =
        document.getElementById('email').value;

    document.getElementById('review-phone').textContent =
        document.getElementById('phone').value;

    document.getElementById('review-category').textContent =
        document.getElementById('category').options[document.getElementById('category').selectedIndex].text;

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    document.getElementById('review-datetime').textContent = `${date} at ${time || 'Not specified'}`;

    document.getElementById('review-description').textContent =
        document.getElementById('description').value.substring(0, 100) + '...';

    const fileInput = document.getElementById('evidence');
    document.getElementById('review-files').textContent =
        `${fileInput.files.length} file(s) uploaded`;

    document.getElementById('review-links').textContent =
        document.getElementById('links').value || 'None provided';

    document.getElementById('review-anonymous').textContent =
        document.getElementById('anonymous').checked ? 'Yes' : 'No';
}

function submitComplaint() {
    if (!document.getElementById('agree-terms').checked) {
        alert('Please confirm that the information provided is accurate');
        return;
    }

    // Generate a random complaint ID with Sri Lanka prefix
    const complaintId = 'SLCC-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);

    // Show success popup
    showModal(
        'Complaint Submitted Successfully!',
        `Your complaint has been submitted successfully. Your Complaint ID is: <strong>${complaintId}</strong><br><br>Please save this ID for tracking your complaint status. You will receive a confirmation email shortly.`
    );

    // Reset form
    document.querySelectorAll('.form-control').forEach(input => {
        if (input.type !== 'file') input.value = '';
    });
    document.getElementById('anonymous').checked = false;
    document.getElementById('whatsapp-updates').checked = false;
    document.getElementById('agree-terms').checked = false;

    // Reset steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active', 'completed');
    });
    document.querySelector('.step[data-step="1"]').classList.add('active');

    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById('step-1').classList.add('active');
}