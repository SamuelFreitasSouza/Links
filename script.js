document.addEventListener("DOMContentLoaded", function () {
    const portfolioButton = document.querySelector(".button.portfolio");
    const notif = document.querySelector(".notif");
    const closeButton = document.querySelector(".close-button");
  
    portfolioButton.addEventListener("click", function () {
      notif.classList.add("active");
    });
  
    closeButton.addEventListener("click", function () {
      notif.classList.remove("active");
    });
  });
  