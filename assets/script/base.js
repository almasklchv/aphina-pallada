let openOrCloseMenu = () => {
    const dropdownMenuContent = document.querySelector(".dropdown-menu__content");
    
    dropdownMenuContent.classList.toggle("active");
    dropdownMenuContent.classList.toggle("hidden");

    const dropdownMenuIcon = document.querySelector(".dropdown-menu__icon");
    dropdownMenuIcon.classList.toggle("close");

}

document.querySelector('.dropdown-menu').addEventListener('click', openOrCloseMenu);