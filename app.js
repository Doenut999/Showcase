const btn = document.querySelector(".toddler")
const nav = document.querySelector("nav.main-nav")
const line1 = document.querySelector(".line-1")
const line2 = document.querySelector(".line-2")
const line3 = document.querySelector(".line-3")
btn.addEventListener("click", ()=> {
    nav.classList.toggle("main-side")
    line1.classList.toggle("turn")
    line3.classList.toggle("turn-2")
    line2.classList.toggle("gone")
    console.log("It's working")
    console.log(line1)
    console.log(line2)
    console.log(line3)
})