var behaviors = {
    DL_DR: 0,
    L_R: 1,
    WALL: 2,
};

var elements = {
    sand: {
        name: "sand",
        color: "#e6d577",
        image: "images/sand.png",
        behavior: behaviors.DL_DR,
    },
    water: {
        name: "water",
        color: "#0000ff",
        image: "images/water.png",
        behavior: behaviors.L_R,
    },
    wall: {
        name: "wall",
        color: "#808080",
        image: "images/golbin.png",
        behavior: behaviors.WALL,
    },
};

var elementImages = {};
for (var element in elements) {
    var image = new Image();
    image.src = elements[element].image;
    elementImages[element] = image;
}
