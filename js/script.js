function toggleBar() {
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });
}

function scrollBar() {


  window.addEventListener("scroll", () => {

    const header = document.getElementById("header");

    if (window.scrollY > 90) {
      header.classList.add("fix");
    } else {
      header.classList.remove("fix");
    }


  })



}


document.addEventListener("DOMContentLoaded", () => {
  scrollBar();
  toggleBar();
});



