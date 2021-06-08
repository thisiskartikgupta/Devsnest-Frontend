let addEventAction = () => {

    let firstNumber = Number(document.querySelector(".first-number").value);
    let secondNumber = Number(document.querySelector(".second-number").value);

    document.querySelector(".output-container").innerHTML = firstNumber + secondNumber;
}

let subtractEventAction = () => {

    let firstNumber = Number(document.querySelector(".first-number").value);
    let secondNumber = Number(document.querySelector(".second-number").value);

    document.querySelector(".output-container").innerHTML = firstNumber - secondNumber;
}

let multiplyEventAction = () => {

    let firstNumber = Number(document.querySelector(".first-number").value);
    let secondNumber = Number(document.querySelector(".second-number").value);

    document.querySelector(".output-container").innerHTML = firstNumber * secondNumber;
}

let divideEventAction = () => {

    let firstNumber = Number(document.querySelector(".first-number").value);
    let secondNumber = Number(document.querySelector(".second-number").value);

    document.querySelector(".output-container").innerHTML = firstNumber / secondNumber;
}

document.querySelector(".add-button").addEventListener("click", addEventAction);
document.querySelector(".subtract-button").addEventListener("click", subtractEventAction);
document.querySelector(".multiply-button").addEventListener("click", multiplyEventAction);
document.querySelector(".divide-button").addEventListener("click", divideEventAction);