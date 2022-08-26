function header() {
  const header = document.createElement("header");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.textContent = "Dropdown Menu ";
  header.appendChild(title);

  header.appendChild(dropdown());

  return header;
}

function dropdown() {
  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");

  const dropdownButton = document.createElement("button");
  dropdownButton.classList.add("dropdown-btn");
  dropdownButton.textContent += String.fromCharCode(0x25be);
  dropdownButton.addEventListener("click", toggleDropdown);
  dropdown.append(dropdownButton);

  dropdown.append(menu());

  return dropdown;
}

function toggleDropdown() {
  const dropdownMenu = document.querySelector(".menu");
  dropdownMenu.classList.toggle("show");
}

function menu() {
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
