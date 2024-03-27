let meetFunctions = document.querySelectorAll(".meetFunctions")
console.log(meetFunctions[1])

for(let i = 0; i < meetFunctions.length; i++) {
    meetFunctions[i].addEventListener("click", () => {
        meetFunctions[i].classList.toggle("active")
        console.log(meetFunctions[i])
        if(meetFunctions[i].innerHTML == "videocam_off") {
            meetFunctions[i].innerHTML = "videocam"
        }
    })
}