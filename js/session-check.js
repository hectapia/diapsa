// Create this as session-check.js
function checkLoginSession() {
    if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = '../index.html'; // Redirect to login page if not logged in
        return false;
    }
    return true;
}

// Immediately check when script loads
if (!checkLoginSession()) {
    throw new Error('Unauthorized access');
}