document.getElementById("displayPicture").addEventListener("click", function () {
    const dropdown = document.getElementById("userDropdown");
    const isVisible = dropdown.style.display === "block";
  

    dropdown.style.display = isVisible ? "none" : "block";
  });
  
  
  document.addEventListener("click", function (event) {
    const displayPicture = document.getElementById("displayPicture");
    const dropdown = document.getElementById("userDropdown");
  
    if (!displayPicture.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });
  