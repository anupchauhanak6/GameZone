const log = document.querySelector(".log")
const sign = document.querySelector(".sign")
const login = document.querySelector(".login")
const signup = document.querySelector(".signup")
const cut1 = document.querySelector(".cross2")
const cut = document.querySelector(".cross1")
const signupRedirect = document.querySelector(".signupRedirect")
const loginRedirect = document.querySelector(".loginRedirect")

log.addEventListener("click", ()=>{
    login.style.display="block"
    signup.style.display=""
    
})
sign.addEventListener("click", ()=>{
    signup.style.display="block"
    login.style.display=""
})
cut.addEventListener("click", ()=>{
    login.style.display=""
})
cut1.addEventListener("click", ()=>{
    signup.style.display=""
})

signupRedirect.addEventListener("click",()=>{
    signup.style.display="block"
    login.style.display=""
})
loginRedirect.addEventListener("click",()=>{
    signup.style.display=""
    login.style.display="block"
})

const loginButton = (e)=> {
    e.preventDefault()
    let username = document.querySelector('#username').value
    console.log(username);
    let password = document.querySelector('#password').value
    console.log(password);
}