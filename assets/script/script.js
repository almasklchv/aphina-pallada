let openOrCloseMenu = () => {
    const dropdownMenuContent = document.querySelector(".dropdown-menu__content");
    
    dropdownMenuContent.classList.toggle("active");
    dropdownMenuContent.classList.toggle("hidden");

    const dropdownMenuIcon = document.querySelector(".dropdown-menu__icon");
    dropdownMenuIcon.classList.toggle("close");

}

let updateVisibleItems = (item) => {
    const parentWidth = document.body.clientWidth - 102.8;
    const visibleItems = Math.floor(parentWidth / 329);
    item.style.width = (visibleItems * 359) + 'px';
    item.style.overflow = 'hidden';
}



let nextSlide = (item) => {
    const parentWidth = document.body.clientWidth - 102.8;
    const visibleItems = Math.floor(parentWidth / 329);
    const offset = visibleItems * 359;
    const left = parseInt(item.style.left);
    if (item.style.left) {
        item.style.left = -(offset - left) + 'px';
    } else {
        item.style.left = -(offset) + 'px';
    }

    if (Math.abs(left) + offset >= (item.children.length * 359)) {
        item.style.left = left + 'px';
    }
}

let prevSlide = (item) => {
    const parentWidth = document.body.clientWidth - 102.8;
    const visibleItems = Math.floor(parentWidth / 329);
    const offset = visibleItems * 359;
    const left = parseInt(item.style.left);
    if (item.style.left) {
        item.style.left = left + offset + 'px';
    } else {
        item.style.left = offset + 'px';
    }
    console.log(left)
    if ((left + offset) > 0  ) {
        item.style.left = 0;
    }
}

document.querySelector('.dropdown-menu').addEventListener('click', openOrCloseMenu);

document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll(".courses-carousel")[0];
    updateVisibleItems(courses)
});

document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll(".courses-carousel")[1];
    updateVisibleItems(courses)
});

window.addEventListener("resize", () => {
    const courses = document.querySelectorAll(".courses-carousel")[0];
    updateVisibleItems(courses)
});

window.addEventListener("resize", () => {
    const courses = document.querySelectorAll(".courses-carousel")[1];
    updateVisibleItems(courses)
});

document.querySelectorAll('.right-btn')[0].addEventListener('click', () => {
    const courses = document.querySelector(".popular-courses");
    nextSlide(courses)
})

document.querySelectorAll('.right-btn')[1].addEventListener('click', () => {
    const courses = document.querySelector(".new-courses");
    nextSlide(courses)
})

document.querySelectorAll('.left-btn')[0].addEventListener('click', () => {
    const courses = document.querySelector(".popular-courses");
    prevSlide(courses)
})

document.querySelectorAll('.left-btn')[1].addEventListener('click', () => {
    const courses = document.querySelector(".new-courses");
    prevSlide(courses)
})