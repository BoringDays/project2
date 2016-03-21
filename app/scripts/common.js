function loadtheme(name) {
    var link = document.createElement("link"),
        head = document.getElementsByTagName("head")[0];
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "../stylesheets/theme-" + name + ".css";
    head.appendChild(link);
}

$(document).ready(function () {
    loadtheme('red');
});
