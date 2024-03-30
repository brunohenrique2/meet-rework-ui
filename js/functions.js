let meetFunctions = document.querySelectorAll(".meetFunctions")
let camera = document.querySelector("#videocam")
let dockerOptions = document.getElementById("dockerOptions")
let btnOptions = document.getElementById("moreOptions")
let userView = document.getElementById("userView")
let userHand = document.getElementById("userHand")
let userHandCallBack = document.getElementById("userHandCallBack")
let userImage = document.getElementById("userImage")
let floatScreenResizer = document.getElementById("floatScreenResizer")

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

    meetFunctions[i].addEventListener("touchstart", () => {
        console.log("pressionando...")
    })

    meetFunctions[i].addEventListener("touchmove", () => {
        console.log("movendo...")
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
    if(userHandCallBack.style.display == "") {
        userHandCallBack.style.display = "flex"
    }else if(userHandCallBack.style.display == "flex") {
        userHandCallBack.style.display = ""
    }
})

floatScreenResizer.addEventListener("touchend", () => {
    userView.classList.toggle("resize0")
})

function resizer() {
    userImage.addEventListener("touchend", () => {
        floatScreenResizer.style.visibility = "visible"
        console.log("click")
    })
}

setInterval(resizer(), 500)


