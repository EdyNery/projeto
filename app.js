function toggleMode(){
const html= document.documentElement
html.classList.toggle("dark")

const img = document.querySelector("#profile img")

if(html.classList.contains("light")){
  img.setAttribute("src", "./assets/frangao.jpg")
} else{
    img.setAttribute("src", "./assets/Tic.jpg")
}
}