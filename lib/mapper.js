const listElement = document.getElementById('list')

for (var item = 1; item <= 10; item++) {
    const itemElement = document.createElement("li");
    const text = document.createTextNode(`${item}`);
    itemElement.appendChild(text);
    listElement.appendChild(itemElement);
}