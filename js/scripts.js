function toggleFooter() {
    footer = document.getElementById("foot");
    var expanded = ($(".navbar-toggler").attr("aria-expanded"));
    if (expanded == "true") {
        footer.style.position = "absolute"
        console.log("why not absolute :(")
    } else {
        footer.style.position = "relative"
    }
}