// const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
// const cards = document.querySelector('#cards');

// async function getProphetData() {
//     const response = await fetch(url)
//     const data = await response.json()
//     console.table(data.prophets);
    // displayProphets(data.prophets);
// }

// getProphetData();

fetch("https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json")
.then(res => res.json())
.then(response => {
    console.log(response)
})