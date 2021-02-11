const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const social = document.getElementById("social");

openBtn.addEventListener("click", function () {
      social.classList.toggle("visible");
});

closeBtn.addEventListener("click", function () {
      social.classList.remove("visible");
});

document.addEventListener("click", function (event) {
      if (event.target.classList.contains("visible")) 
      return;
      
      social.classList.remove("visible");
}, true);

