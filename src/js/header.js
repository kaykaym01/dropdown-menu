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

    header.append(menu());

    return header;
}

function menu(){
    const list = document.createElement("ul");
    list.classList.add("menu");
    
    const listItems = ["Pricing", "Demo", "Features"];
    listItems.forEach((value) => {
        const listItem = document.createElement("li");
        listItem.classList.add("menu-item");
        listItem.textContent = value;
        list.appendChild(listItem);
    });

    return list;
}

export default header;