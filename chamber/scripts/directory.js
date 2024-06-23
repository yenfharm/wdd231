document.getElementById("currentyear").innerHTML = new Date().getFullYear();

  // Update the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last modified on: ${lastModified}`;

fetch('data/members.json')
.then(response => response.json())
.then(membersData => {
    // Process the data, for example:
    console.log(membersData); 
    displayMembers(membersData); 
})
.catch(error => {
    console.error('Error fetching data:', error);
});

function displayMembers(membersData) {
    const membersContainer = document.getElementById('members-container'); 
    
    membersData.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('member');
      // Build HTML dynamically based on the member object:
    memberElement.innerHTML = `
        <h2>${member.name}</h2>
        <p>Address: ${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Website: <a href="${member.website}">${member.website}</a></p>
        <img src="${member.image}" alt="${member.name}"> 
`;
    membersContainer.appendChild(memberElement); 
    });
}

const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');
const membersContainer = document.getElementById('members-container'); 

gridButton.addEventListener('click', () => {
    membersContainer.classList.add('grid-view');
    membersContainer.classList.remove('list-view'); 
});

listButton.addEventListener('click', () => {
    membersContainer.classList.add('list-view');
    membersContainer.classList.remove('grid-view'); 
}); 