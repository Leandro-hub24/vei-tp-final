const search = document.getElementById("search");
const hamburger = document.getElementById("hamburger");
const desplegable1 = document.getElementById("desplegable1")
const desplegable2 = document.getElementById("desplegable2")

search.addEventListener("click", (e) => {
    desplegable1.classList.toggle("view");

    if(desplegable2.classList.contains("view")){
        desplegable2.classList.toggle("view");
    }
})

hamburger.addEventListener("click", (e) => {
    desplegable2.classList.toggle("view");

    if(desplegable1.classList.contains("view")){
        desplegable1.classList.toggle("view");
    }
})
