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

// =======================image hover
const zoomImg = document.getElementById('mainImage');
zoomImg.addEventListener('mousemove', function(e) {
    const zoomer = e.currentTarget;
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;
    const width = zoomer.offsetWidth;
    const height = zoomer.offsetHeight;
    const xPercent = (offsetX / width) * 100;
    const yPercent = (offsetY / height) * 100;

    zoomer.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    zoomer.style.transform = "scale(3)";
});

zoomImg.addEventListener('mouseleave', function() {
    this.style.transform = "scale(1)";
});


// ===========================image pop up
const images = document.querySelectorAll(".zoom-img");
const popup = document.querySelector(".product-pop-up-img");
const close_button = document.querySelector(".cancle-button");

function initPcOnlyScript() {
    if (window.innerWidth > 1024) { 
        images.forEach((eachitem) => {
            eachitem.addEventListener("click", () => {
                popup.classList.add("pop-Up-active");
            });
        });

        close_button.addEventListener("click", () => {
            popup.classList.remove("pop-Up-active");
        });
    }
}

initPcOnlyScript();
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        initPcOnlyScript();
    } else {
        popup.classList.remove("pop-Up-active");
    }
});