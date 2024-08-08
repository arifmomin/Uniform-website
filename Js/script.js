const customCheckboxes = document.getElementsByClassName('custom-checkbox');

for (let i = 0; i < customCheckboxes.length; i++) {
    customCheckboxes[i].addEventListener('click', function() {
        this.classList.toggle('checkbox-active');
    });
}