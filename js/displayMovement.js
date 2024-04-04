let offSetX
let offSetY

const move = (e) => {
    userView.style.left = `${e.touches[0].clientX - offSetX}px`
    userView.style.top = `${e.touches[0].clientY - offSetY}px`
    userView.style.transitionDuration = "0s"
}

userView.addEventListener("touchstart", (e) => {
    offSetX = e.touches[0].clientX - userView.offsetLeft
    offSetY = e.touches[0].clientY - userView.offsetTop
    document.addEventListener("touchmove", move)

})

document.addEventListener("touchend", () => {
    userView.style.transitionDuration = ".3s"
    document.removeEventListener("touchend", move)
})
