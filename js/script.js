function toggleBar() {
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");

    dropdownBtn.addEventListener("click", () => {
        dropdownMenu.classList.toggle("show");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  toggleBar();
});
