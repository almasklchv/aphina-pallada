let openOrCloseMenu = () => {
    const dropdownMenuContent = document.querySelector(".dropdown-menu__content");
    
    dropdownMenuContent.classList.toggle("active");
    dropdownMenuContent.classList.toggle("hidden");

    const dropdownMenuIcon = document.querySelector(".dropdown-menu__icon");
    dropdownMenuIcon.classList.toggle("close");

}

let updateVisibleItems = (items) => {
    const parentWidth = document.body.clientWidth - 102.8;
    const visibleItems = Math.floor(parentWidth / 329);
    
    
    for (let i = visibleItems; i < items.children.length; i++) {
        items.children[i].classList.remove('active')
        items.children[i].classList.remove('hidden')
        items.children[i].classList.add('hidden')
    }

    for (let i = 0; i < items.children.length; i++) {
        if (i < visibleItems) {
            items.children[i].classList.remove('hidden')
            items.children[i].classList.remove('active')
            items.children[i].classList.add('active')
        } else {
            break;
        }
    }
    
}



let nextSlide = () => {
    const courses = document.querySelector(".courses");
}

document.querySelector('.dropdown-menu').addEventListener('click', openOrCloseMenu);

document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelector(".popular-courses");
    updateVisibleItems(courses)
});

document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelector(".new-courses");
    updateVisibleItems(courses)
});

window.addEventListener("resize", () => {
    const courses = document.querySelector(".popular-courses");
    updateVisibleItems(courses)
});

window.addEventListener("resize", () => {
    const courses = document.querySelector(".new-courses");
    updateVisibleItems(courses)
});