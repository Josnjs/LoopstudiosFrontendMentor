const thumbnails = [
    {
        desktop: [
            {
                image: "./images/desktop/image-deep-earth.jpg",
                title: "DEEP EARTH",
            },
            {
                image: "/images/desktop/image-night-arcade.jpg",
                title: "NIGHT ARCADE",
            },
            {
                image: "./images/desktop/image-soccer-team.jpg",
                title: "SOCCER TEAM VR",
            },
            {
                image: "./images/desktop/image-grid.jpg",
                title: "THE GRID",
            },
            {
                image: "/images/desktop/image-from-above.jpg",
                title: "FROM UP ABOV VR",
            },
            {
                image: "./images/desktop/image-pocket-borealis.jpg",
                title: "POCKETS BOREALS",
            },
            {
                image: "./images/desktop/image-curiosity.jpg",
                title: "THE CURIOSIT",
            },
            {
                image: "./images/desktop/image-fisheye.jpg",
                title: "MAKE IT FISHEYE",
            },
        ],
    },
    {
        mobile: [
            {
                image: "./images/mobile/image-deep-earth.jpg",
                title: "DEEP EARTH",
            },
            {
                image: "./images/mobile/image-night-arcade.jpg",
                title: "NIGHT ARCADE",
            },
            {
                image: "./images/mobile/image-soccer-team.jpg",
                title: "SOCCER TEAM VR",
            },
            {
                image: "./images/mobile/image-grid.jpg",
                title: "THE GRID",
            },
            {
                image: "./images/mobile/image-from-above.jpg",
                title: "FROM UP ABOV VR",
            },
            {
                image: "./images/mobile/image-pocket-borealis.jpg",
                title: "POCKETS BOREALS",
            },
            {
                image: "./images/mobile/image-curiosity.jpg",
                title: "THE CURIOSIT",
            },
            {
                image: "./images/mobile/image-fisheye.jpg",
                title: "MAKE IT FISHEYE",
            },
        ],
    },
];

const divthumb = document.querySelector(".images");

function renderImages() {
    divthumb.innerHTML = "";

    const isMobile = window.innerWidth < 940;
    const imagesToRender = isMobile
        ? thumbnails[1].mobile
        : thumbnails[0].desktop;

    imagesToRender.forEach((item) => {
        const divImage = document.createElement("div");
        const thumb = document.createElement("img");
        const title = document.createElement("p");

        divImage.classList.add("divImage");
        thumb.classList.add("thumb");
        title.classList.add("title");

        thumb.src = item.image;
        thumb.alt = item.title;

        title.innerHTML = item.title;

        divImage.appendChild(thumb);
        divImage.appendChild(title);

        divthumb.appendChild(divImage);
    });
}

renderImages();

const menuHamb = document.getElementById("menuHamb");
const header = document.getElementById("header");
const divMenuHamb = document.getElementById("divMenuHamb");
const hideDiv = document.getElementById("hideDiv");

divMenuHamb.style.display = "none";

menuHamb.addEventListener("click", () => {
    divMenuHamb.style.display = "flow";
    header.style.display = "none";
});

hideDiv.addEventListener("click", () => {
    divMenuHamb.style.display = "none";
    header.style.display = "flow";
});

window.addEventListener("resize", renderImages);

const date = document.getElementById("date");

var year = new Date();

var yearNow = year.getFullYear();
date.innerHTML = yearNow;
