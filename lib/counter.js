const bodyElement = document.getElementsByTagName('body')[0]
const divElement = document.createElement("div");
bodyElement.appendChild(divElement);

function seconds() {
    setInterval(() => {
        const date = new Date()
        divElement.innerHTML = `${date.getSeconds()}`
    }, 1000)
}