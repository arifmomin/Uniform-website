// ===================menu bar fixed
let navbar = document.querySelector('.navbar')
window.addEventListener('scroll', function () {
    let scrolling = this.scrollY
    if (scrolling > 100) {
        navbar.classList.add('menu_fixed')
    } else {
        navbar.classList.remove('menu_fixed')
    }
})
// ======================product checkbox
const customCheckboxes = document.getElementsByClassName('custom-checkbox');

for (let i = 0; i < customCheckboxes.length; i++) {
    customCheckboxes[i].addEventListener('click', function () {
        this.classList.toggle('checkbox-active');
    });
}
// ======================= product slider
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.Thumbnail-img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        mainImage.src = this.src;
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        this.classList.add('active');
    });
});