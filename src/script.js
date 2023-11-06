function toggleUserCard() {
    const detailedUser = document.getElementById("user-card-expanded");
    detailedUser.classList.toggle("invisible");
}

function toggleInterface() {
    const lightMode = document.getElementById("light-mode");
    const darkMode = document.getElementById("dark-mode");
    lightMode.classList.toggle("hidden");
    darkMode.classList.toggle("hidden");
}