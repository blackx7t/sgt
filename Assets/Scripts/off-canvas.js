 // Toggle off-canvas menu
 document.getElementById('menuToggle').addEventListener('click', function () {
    const offCanvasMenu = document.getElementById('offCanvasMenu');
    offCanvasMenu.classList.add('open');
    document.body.classList.add('no-scroll'); // Prevent body scroll when menu is open
});

// Close off-canvas menu
document.getElementById('closeMenu').addEventListener('click', function () {
    const offCanvasMenu = document.getElementById('offCanvasMenu');
    offCanvasMenu.classList.remove('open');
    document.body.classList.remove('no-scroll'); // Restore body scroll when menu is closed
});