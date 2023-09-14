
// SCROLL ABAJO
window.addEventListener("scroll", function () {

    const top = document.getElementById('btop');
    top.classList.toggle('top-sticky', window.scrollY > 0)

    const wts = document.getElementById('bwts');
    wts.classList.toggle('wts-sticky', window.scrollY > 0)
})
