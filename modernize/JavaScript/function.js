
function onHover(item, itemChild) {
    item.style.backgroundColor = "#EBF3FE";
    item.style.color = "#5D87FF";
    itemChild.style.color = "#5D87FF";
}

function ofHover(item, itemChild) {
    item.style.backgroundColor = "";
    item.style.color = "";
    itemChild.style.color = "";
}

function onClick(currActive, item) {
    currActive.classList.remove("active");
    item.classList.add("active");

    return item;
}

