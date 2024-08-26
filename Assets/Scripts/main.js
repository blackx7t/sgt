
const radioInputs = document.querySelectorAll('input[type="radio"]');
const contentSections = document.querySelectorAll('.content-section');

radioInputs.forEach(input => {
    input.addEventListener('change', function () {
        const selectedValue = this.value;
        contentSections.forEach(section => {
            if (section.id === `${selectedValue}-content`) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var headTxt = document.querySelectorAll(".Head-txt");
    var tree = document.querySelectorAll(".tree");

    tree.forEach(function (item) {
        item.style.display = "none";
    });

    headTxt.forEach(function (txt) {
        txt.addEventListener("click", function () {
            var siblingTree = this.nextElementSibling;
            siblingTree.style.display = siblingTree.style.display === "none" ? "block" : "none";
        });
    });

    var toggles = document.querySelectorAll(".tree .toggle");

    toggles.forEach(function (toggle) {
        var nestedList = toggle.querySelector("ul");
        if (nestedList) {
            nestedList.style.display = "none";
            toggle.classList.remove("open");
        }

        toggle.addEventListener("click", function (event) {
            event.stopPropagation();
            nestedList = this.querySelector("ul");
            if (nestedList) {
                nestedList.style.display = nestedList.style.display === "none" ? "block" : "none";
                this.classList.toggle("open");
            }
        });

        toggle.addEventListener("mousedown", function (event) {
            event.preventDefault();
        });
    });

    document.querySelectorAll('.tree li:not(.toggle)').forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});


document.getElementById('menuToggle').addEventListener('click', function () {
    const offCanvasMenu = document.getElementById('offCanvasMenu');
    offCanvasMenu.classList.add('open');
    document.body.classList.add('no-scroll');
});


document.getElementById('closeMenu').addEventListener('click', function () {
    const offCanvasMenu = document.getElementById('offCanvasMenu');
    offCanvasMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
});


document.querySelector('.scroll-container-X').addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        this.scrollLeft += 100;
    } else {
        this.scrollLeft -= 100;
    }
    event.preventDefault();
});

const items = document.querySelectorAll('.item-X');
items.forEach(item => {
    item.addEventListener('click', function () {
        items.forEach(item => item.classList.remove('active-X'));
        this.classList.add('active-X');
    });
});