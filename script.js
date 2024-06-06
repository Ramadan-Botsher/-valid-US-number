const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");

function validatePhoneNumber() {
    const pattern = /^1?[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (input.value === "") {
        alert("Please provide a phone number");
    } else if (pattern.test(input.value)) {
        result.innerText = `Valid US number: ${input.value}`;
    } else {
        result.innerText = `Invalid US number: ${input.value}`;
    }
}

function clearResult() {
    result.innerText = "";
    input.value = "";
}

checkButton.addEventListener("click", validatePhoneNumber);
clearButton.addEventListener("click", clearResult);
