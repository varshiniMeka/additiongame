let firstnumb = document.getElementById("firstNumber");
let secondnumb = document.getElementById("secondNumber");
let result = document.getElementById("gameResult");
let inputel = document.getElementById("userInput");

function reset() {
    let first = Math.ceil(Math.random() * 100);
    let second = Math.ceil(Math.random() * 100);
    firstnumb.textContent = first;
    secondnumb.textContent = second;
    result.textContent = "";
    inputel.textContent = "";
}
reset();

function check() {
    let firstintiger = parseInt(firstnumb.textContent);
    let secondintiger = parseInt(secondnumb.textContent);
    let total = firstintiger + secondintiger;
    let inputval = inputel.value;
    if (total === parseInt(inputval)) {
        result.textContent = "Congratulations you got it right!";
        result.classList.add("game-result");
        result.classList.remove("failed");

    } else {
        result.textContent = "Please try again";
        result.classList.add("failed");
        result.classList.remove("game-result");
    }
}