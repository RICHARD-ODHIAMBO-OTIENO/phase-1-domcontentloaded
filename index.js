// create up a DOMContentLoaded event listener to detect when the HTML page has loaded 
document.addEventListener('DOMContentLoaded', function() {
    let textElement = document.getElementById('text');
    textElement.textContent = 'This is really cool!';
});
