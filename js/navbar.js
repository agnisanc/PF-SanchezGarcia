const navbar = document.getElementById('navbar');
const title = document.createElement('h1');
title.textContent = 'JOYAS AUREOM';
title.addEventListener('click', function() {
    window.location.href = 'index.html';
});
navbar.appendChild(title);
