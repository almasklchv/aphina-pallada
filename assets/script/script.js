let openOrCloseMenu = () => {
    const dropdownMenuContent = document.querySelector(".dropdown-menu__content");
    
    dropdownMenuContent.classList.toggle("active");
    dropdownMenuContent.classList.toggle("hidden");

    const dropdownMenuIcon = document.querySelector(".dropdown-menu__icon");
    dropdownMenuIcon.classList.toggle("close");

}

let updateVisibleItems = () => {
    const parentWidth = document.body.clientWidth - 102.8;
    let visibleItems = Math.floor(parentWidth / 329);
    let courses = document.querySelector(".courses");
    
    
    for (let i = visibleItems; i < courses.children.length; i++) {
        courses.children[i].classList.remove('active')
        courses.children[i].classList.remove('hidden')
        courses.children[i].classList.add('hidden')
    }

    for (let i = 0; i < courses.children.length; i++) {
        if (i < visibleItems) {
            courses.children[i].classList.remove('hidden')
            courses.children[i].classList.remove('active')
            courses.children[i].classList.add('active')
        } else {
            break;
        }
    }
    
}



document.querySelector('.dropdown-menu').addEventListener('click', openOrCloseMenu);

document.addEventListener('DOMContentLoaded', updateVisibleItems);

window.addEventListener("resize", updateVisibleItems);