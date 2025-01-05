document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('new-password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Change the icon for user feedback
    this.textContent = type === 'password' ? '\uD83D\uDC41' : '\uD83D\uDD12'; // Eye or Lock
});
