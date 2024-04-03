const move = (e) => {
    userView.style.left = `${e.clientX - offSetX}px`
    userView.style.top = `${e.clientY - offSetY}px`
}

userView.addEventListener("mousedown", (e) => {
    offSetX = e.clientX - userView.offsetLeft
    offSetY = e.clientY - userView.offsetTop
    document.addEventListener("mousemove", move)
    userView.style.transitionDuration = "0s"
    console.log("pressionando...")
})

document.addEventListener("mouseup", () => {
    userView.style.transitionDuration = ".3s"
    document.removeEventListener("mousemove", move)
})
