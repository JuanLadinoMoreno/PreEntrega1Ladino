
// SCROLL ABAJO
window.addEventListener("scroll", function () {

    const top = document.getElementById('btop');
    top.classList.toggle('top-sticky', window.scrollY > 0)

    const wts = document.getElementById('bwts');
    wts.classList.toggle('wts-sticky', window.scrollY > 0)
})


//LIGHT BOX GALLERY
const imgList = document.querySelectorAll(`.imgP`)
const lightBox = document.querySelector(`.lightbox`)
const imGran = document.querySelector(`.imgGra`)
const btnClose = document.querySelector(`.btnClos`)

imgList.forEach((element, i) => {
    imgList[i].addEventListener(`pointerdown`, () => {
        lightBox.classList.add(`isActive`)
        imGran.src = imgList[i].src
    })
})

btnClose.addEventListener(`pointerdown`,() => {
    lightBox.classList.remove(`isActive`)
})





//LIGHT BOX SERVICES
const lightBoxEv = document.querySelector(`.lightboxEv`)
const caro1 = document.querySelector(`.caro1`)
const btnCloseEv = document.querySelector(`.btnClosEv`)
const btnMosCaro = document.querySelector(`.btnMosCaro`)

btnMosCaro.addEventListener(`click`,() => {
    lightBoxEv.classList.add(`isActive`)
    caro1.classList.add(`isActive`)
})

btnCloseEv.addEventListener(`click`,() => {
    lightBoxEv.classList.remove(`isActive`)
})


