
const btn_select = document.getElementById("select__input")
const select__choice = document.getElementById("select__choice")
btn_select.onclick = function(event) {
    event.preventDefault()
    select__choice.style.display = "block"
}

btn_select.onclick = function(event) {
  event.preventDefault()
  if (select__choice.style.display == "block") {
    select__choice.style.display = "none"
  }
  else {
    select__choice.style.display = "block"
  }

}


const select1 = document.getElementsByClassName("select__link")[0]
const select2 = document.getElementsByClassName("select__link")[1]
const span = document.getElementById("select__span")

select1.onclick = function(event) {
  span.innerHTML = select1.innerHTML
} 
select2.onclick = function(event) {
  span.innerHTML = select2.innerHTML
}
