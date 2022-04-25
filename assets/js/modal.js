const modals = document.getElementsByClassName("modal")
const body = document.querySelector('body')
const btn = document.getElementsByClassName("content__td-btn")
body.addEventListener('click', (event) =>  {
//    console.log(event.target.className)
    if(event.target.className !== "content__modal" && event.target.className !== "button__wrapper" && event.target.className !== "content__td-btn" && event.target.className !== "image" ) {
        // console.log(event.target.className)
        // console.log(event)
        for(let i = 0; i < modals.length; i++) {
            console.log(modals[i].classList.add("modal__active"))
        }
    }
    })
    
for (let i=0; i < btn.length; i++) {
    btn[i].onclick = function() {
        modals[i].classList.remove("modal__active")
        modals[i].style.display = "block"
    }
            
}


