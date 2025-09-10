const log = document.querySelector(".log")
const login = document.querySelector(".login")
const cut = document.querySelector(".cross")

log.addEventListener("click", ()=>{
    login.style.display="block"
})
cut.addEventListener("click", ()=>{
    login.style.display=""
})