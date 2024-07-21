render();

//Proyectos
const btnRobotica = document.getElementById("robotica");
const btnRed = document.getElementById("red");
const btnPW = document.getElementById("pw");

btnRobotica.addEventListener('click', hideTabs)
btnRed.addEventListener('click', hideTabs)
btnPW.addEventListener('click', hideTabs)

function hideTabs() {
    const attribute = this.getAttribute("id");
    firstTab(attribute);
};

function firstTab(key){
    const tabs = document.querySelectorAll(".tab");
    for(let i = 0; i<tabs.length; i++){
        tabs[i].classList.add("hide_tab")
    }
    const thisTab = document.getElementById(`tab_${key}`);
    thisTab.classList.remove("hide_tab");
}

function render(){
    const attribute = localStorage.getItem("valor")
    firstTab(attribute)
}