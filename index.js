const btn =document.getElementById("btn")
const link = document.getElementById("link")
btn.addEventListener("click",()=>{
    link.classList.toggle("show")
})
const form = document.getElementById("form")
const error = document.getElementById("error")
form.addEventListener("submit",()=>{
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value 
    const lastname = document.getElementById("lastname").value
    if(name===""|| email===""|| lastname===""){
        error.textContent = "fill everything"
        error.style.color = "red"
        return
    }
    error.textContent =""
    form.reset()
})