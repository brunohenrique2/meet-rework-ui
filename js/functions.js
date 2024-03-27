let meetFunctions = document.querySelectorAll(".meetFunctions")
let camera = document.querySelector("#videocam")

for(let i = 0; i < meetFunctions.length; i++) {
    meetFunctions[i].addEventListener("click", () => {
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

    })
}

