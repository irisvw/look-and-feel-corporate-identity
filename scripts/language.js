buttonLang = document.querySelector(".button-language");
arSpans = document.querySelectorAll("span:lang(ar)");
enSpans = document.querySelectorAll("span:lang(en");

buttonLang.addEventListener("click", switchDir);

function switchDir() {
    let currentDir = document.documentElement.dir;

    if (currentDir == "rtl") {
        document.documentElement.dir = "ltr";
        enSpans.forEach(element => { element.setAttribute("aria-hidden", "false"); });
        arSpans.forEach(element => { element.setAttribute("aria-hidden", "true"); });
    } else {
        document.documentElement.dir = "rtl";
        enSpans.forEach(element => { element.setAttribute("aria-hidden", "true"); });
        arSpans.forEach(element => { element.setAttribute("aria-hidden", "false"); });
    }
}