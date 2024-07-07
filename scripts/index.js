document.getElementById("currentyear").innerHTML = new Date().getFullYear();

  // Update the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last modified on: ${lastModified}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});



const modal = document.querySelector("#modal");
const openModal = document.querySelector("#open");
const closeModal = document.querySelector("#close");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
