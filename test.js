document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("changeBackground");
    const body = document.body;

    let isBackground1 = true;

    button.addEventListener("click", function () {
        if (isBackground1) {
            body.style.backgroundImage = "url('image1.png')";
        } else {
            body.style.backgroundImage = "url('00014.jpg')";
        }

        isBackground1 = !isBackground1;
    });
});
