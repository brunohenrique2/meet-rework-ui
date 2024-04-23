let offSetX
let offSetY

const move = (e) => {
    userView.style.left = `${e.targetTouches[0].clientX - offSetX}px`
    userView.style.top = `${e.targetTouches[0].clientY - offSetY}px`
    userView.style.transitionDuration = "0s"
}

userView.addEventListener("touchstart", (e) => {
    offSetX = e.targetTouches[0].clientX - userView.offsetLeft
    offSetY = e.targetTouches[0].clientY - userView.offsetTop
    userView.addEventListener("touchmove", move)

})

document.addEventListener("touchend", () => {
    userView.style.transitionDuration = ".3s"
    userView.removeEventListener("touchend", move)
})
