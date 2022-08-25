function header(){
    const header = document.createElement("header");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.textContent = "Dropdown Menu";
    header.appendChild(title);

    return header;
}

export default header;