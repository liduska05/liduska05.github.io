let button = document.getElementById('btn');
let img = document.getElementById('evil');

button.addEventListener('click', function() {
    img.style.display = 'inline';
    button.disabled = true;
});

img.addEventListener('click', function() {
    img.style.display = 'none';
    button.disabled = false;
})
