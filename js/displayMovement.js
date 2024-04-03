const move = (e) => {
    userView.style.left = `${e.clientX - offSetX}px`
    userView.style.top = `${e.clientY - offSetY}px`
}

userView.addEventListener("mousedown", (e) => {
    offSetX = e.clientX - userView.offsetLeft
    offSetY = e.clientY - userView.offsetTop
    userView.style.transitionDuration = "0.1s"
    document.addEventListener("mousemove", move)
    console.log("pressionando...")
})

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", move)
})
