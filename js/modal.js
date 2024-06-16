let $ = document;
let addBTN = $.querySelector("#add_btn")
let closeModalBTN = $.querySelector(".close-modal")
let modal = $.querySelector(".modal")
let modalBackGround = $.querySelector("#overlay")


addBTN.addEventListener("click" , ()=>{
     modal.classList.add("active")
     modalBackGround.classList.add("active")
})
closeModalBTN.addEventListener("click" , ()=>{
     modal.classList.remove("active")
     modalBackGround.classList.remove("active")
})