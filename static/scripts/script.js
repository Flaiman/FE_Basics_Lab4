const elem = document.getElementById("getid")
const elem1 = document.querySelector("#querys")
function color1() {
    if (elem.style.color === "rgb(70, 130, 180)") {
        elem.style.color = "#F7DC6F"
        elem.style.background = "#2E4053"
    }
    else {
        elem.style.color = "#4682B4"
        elem.style.background = "#F0E68C"
    }
}
function color2() {
    if (elem1.style.color === "rgb(247, 220, 111)") {
        elem1.style.color = "#4682B4"
        elem1.style.background = "#F0E68C"
    }
    else {
        elem1.style.color = "#F7DC6F"
        elem1.style.background = "#2E4053"
    }
}
elem.addEventListener("click", color1)
elem1.addEventListener("click", color2)


let img = document.createElement("img")
img.src = "static/images/img3.jpg"
img.alt = "cat"
let originwidth = img.style.width = "300px";
let originheight = img.style.height = "400px";

function addimage() {
    img.style.width=originwidth
    img.style.height=originheight
    let container = document.getElementById("imgcont")
    container.appendChild(img)
}
function incscale() {
    let currentwidth = img.clientWidth
    let currentheight = img.clientHeight
    img.style.width = (currentwidth * 1.2) + "px"
    img.style.height = (currentheight * 1.2) + "px"
}
function redscale() {
    let currentwidth = img.clientWidth
    let currentheight = img.clientHeight
    img.style.width = (currentwidth / 1.2) + "px"
    img.style.height = (currentheight / 1.2) + "px"
}
function delimage(){
    img.remove()
    img.style.width=originwidth
    img.style.height=originheight
}
