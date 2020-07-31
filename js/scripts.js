function toggleFooter() {
    footer = document.getElementById("foot");
    var expanded = ($(".navbar-toggler").attr("aria-expanded"));
    if (expanded == "true") {
        footer.style.position = "absolute"
    } else {
        footer.style.position = "relative"
    }
}