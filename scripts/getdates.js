document.addEventListener("DOMContentLoaded", function () {
  
    let lastModifiedDate = new Date(document.lastModified);
  
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    let formattedDate = lastModifiedDate.toLocaleDateString("en-US", options);
    
    document.getElementById("lastModified").textContent += formattedDate;
  });