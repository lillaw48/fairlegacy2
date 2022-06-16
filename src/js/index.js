//hide loading screen after iframe load
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('swede-view').onload = (e) => {
        document.getElementById('overlay').remove();
    };
});