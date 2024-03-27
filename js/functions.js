let meetFunctions = document.querySelectorAll(".meetFunctions")

for(let i = 0; i < meetFunctions.length; i++) {
    meetFunctions[i].addEventListener("click", () => {
      meetFunctions[i].classList.toggle("active")
    })
}
