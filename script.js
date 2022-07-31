const contextMenu = document.querySelector(".wrapper");
const shareMenu = contextMenu.querySelector(".share-menu");

//when you right mouse click
document.addEventListener("contextmenu", (e) => {
    e.preventDefault(); //prevents default context menu of the browser

    let x = e.offsetX, y = e.offsetY, winWidth = window.innerWidth, winHeight = window.innerHeight, cmWidth = contextMenu.offsetWidth, cmHeight = contextMenu.offsetHeight;

    //if x is greater than window width - contextMenu width - shareMenu width
    //then show the sharemenu to the left, else show it to the right
    if (x > (winWidth - cmWidth - shareMenu.offsetWidth)){
        shareMenu.style.left = "-200px";
    } else {
        shareMenu.style.left = "";
        shareMenu.style.right = "-200px";
    }

    //if x is greater than window width - contextMenu width, then set the value of x
    //to window with - contextMenu width, else set x to the offsetX. Similarly, to y.
    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
})

//when you right mouse click
document.addEventListener("click", () => {
    contextMenu.style.visibility = "hidden";
})