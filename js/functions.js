const meetFunctions = document.querySelectorAll(".meetFunctions")
const camera = document.querySelector("#videocam")
const dockerOptions = document.getElementById("dockerOptions")
const btnOptions = document.getElementById("moreOptions")
const userView = document.getElementById("userView")
const userHand = document.getElementById("userHand")
const userHandCallBack = document.getElementById("userHandCallBack")
const userImage = document.getElementById("userImage")
const floatScreenResizer = document.getElementById("floatScreenResizer")

for(let i = 0; i < meetFunctions.length; i++) {
    meetFunctions[i].addEventListener("touchend", () => {
        meetFunctions[i].classList.toggle("active")

        if(meetFunctions[i].id == "videocam" && meetFunctions[i].innerHTML == 'videocam_off') {
            meetFunctions[i].innerHTML = "videocam"
        }else if(meetFunctions[i].id == "videocam" && meetFunctions[i].innerHTML == 'videocam') {
            meetFunctions[i].innerHTML = "videocam_off"
        }

        if(meetFunctions[i].id == "mic" && meetFunctions[i].innerHTML == 'mic_off') {
            meetFunctions[i].innerHTML = "mic"
        }else if(meetFunctions[i].id == "mic" && meetFunctions[i].innerHTML == 'mic') {
            meetFunctions[i].innerHTML = "mic_off"
        }
        console.log("pressionou!")
    })
}

btnOptions.addEventListener("touchend", () => {
    if(dockerOptions.style.display == "") {
        dockerOptions.style.display = "flex"
    }else if(dockerOptions.style.display == "flex") {
        dockerOptions.style.display = ""
    }
})

userHand.addEventListener("touchend", () => {
    if(userHandCallBack.style.display == "" && userView.className == "") {
        userHandCallBack.style.display = "flex"
    }else if(userHandCallBack.style.display == "flex") {
        userHandCallBack.style.display = ""
    }
})

floatScreenResizer.addEventListener("touchend", () => {
    if(floatScreenResizer.innerHTML == "fullscreen_exit") {
        floatScreenResizer.innerHTML = "fullscreen"
        userView.classList.add("resize0")

    }else if(floatScreenResizer.innerHTML == "fullscreen") {
        floatScreenResizer.innerHTML = "fullscreen_exit"
        userView.classList.remove("resize1")
    }
})

userImage.addEventListener("touchend", () => {
    if(userView.className == "resize0") {
        userView.classList.remove("resize0")
        userView.classList.add("resize1")
    }

})

