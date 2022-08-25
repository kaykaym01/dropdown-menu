function header(){
    const header = document.createElement("header");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.textContent = "Dropdown Menu ";
    header.appendChild(title);

    const dropdownButton = document.createElement("button");
    dropdownButton.classList.add("dropdown-btn")
    dropdownButton.textContent +=  String.fromCharCode(0x25BE);
    header.append(dropdownButton);

    return header;
}

export default header;