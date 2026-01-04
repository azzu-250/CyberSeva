// Track complaint function
function trackComplaint() {
    const trackingId = document.getElementById('trackingId').value;

    if (!trackingId) {
        alert('Please enter your Complaint ID');
        return;
    }

    // Show tracking result (simulated)
    showModal(
        'Complaint Status',
        `Complaint ID: <strong>${trackingId}</strong><br>Status: <span class="status-badge status-investigation">Under Investigation</span><br><br>Your complaint is currently being investigated by our team.`
    );
}