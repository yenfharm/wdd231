render();

const btnElecronicos = document.getElementById("electronicos");
const btnLaboratorio = document.getElementById("laboratorio");
const btnComputo = document.getElementById("computo");

btnElecronicos.addEventListener('click', hideTabs)
btnLaboratorio.addEventListener('click', hideTabs)
btnComputo.addEventListener('click', hideTabs)


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