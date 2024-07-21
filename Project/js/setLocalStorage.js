function setLocalStorage(){
    const key = this.getAttribute("ref-item");
    console.log(key)
    localStorage.setItem("valor", key);
}

document.querySelectorAll('.dropdown-item').forEach(function (everyitem){
    everyitem.addEventListener("click", setLocalStorage)
})

