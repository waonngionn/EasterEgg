document.addEventListener("scroll", function () {
    let element = document.getElementsByClassName("title");
    const titleLength = 2;
    const topLimit = 80;
    for (let i = 0; i < titleLength; i++) {
        if (element[i].getBoundingClientRect().top < topLimit) {
            element[i].style.color = "rgba(0,0,0,0)";
        } else {
            element[i].style.color = "#212529";
        }
    }
});
