import header from "./header";
import footer from "./footer";
import main from "./main";

function loadSite(){
    const body = document.body;
    body.appendChild(pageContent());
}

function pageContent(){
    const content = document.createElement("div");
    content.classList.add("page-content");
    content.appendChild(header());
    content.appendChild(main());
    content.appendChild(footer());
    return content;
}

export default loadSite;