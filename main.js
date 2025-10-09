const input = document.getElementById("input");
const resultP = document.getElementById("result");
const changer = document.getElementById("changer");
const header = document.getElementById("header");
function toDecimal(binary) {
    let y = 0;
    binary = binary.toString();
    for (let i = 0; i < binary.length; i++) {
        let x = 0;
        let digit = Number(binary[i]);
        if (digit === 0) {
            x = digit * (2 ** (binary.length - 1 - i));
            y = y + x;
        } else if (digit === 1) {
            x = digit * (2 ** (binary.length - 1 - i));
            y = y + x;
        } else {
            y = "Not Binary";
            return y;
        }
    }
    return y;
}
function toBinary(decimal) {
    if (decimal <= 0) {
        return 0;
    } else {
        let answer = Math.floor(decimal / 2);
        let remain = decimal % 2;
        let y = remain.toString();
        while (answer != 0) {
            remain = (answer % 2).toString();
            answer = Math.floor(answer / 2);
            y = remain + y;
        }
        return Number(y);
    }
}
changer.addEventListener("click", () => {
    header.classList.toggle("active");
    input.value = "";
    resultP.textContent = "";
    if (header.classList.contains("active")) {
        input.placeholder = "Enter the Decimal Number...";
        header.textContent = "Decimal to Binary Converter";
        input.addEventListener("input", function () {
            const result = toBinary(input.value);
            resultP.textContent = result;
        })
    } else {
        input.placeholder = "Enter the Binary Number";
        header.textContent = "Binary to Decimal Converter";
        input.addEventListener("input", function () {
            const result = toDecimal(input.value);
            resultP.textContent = result;
        })
    }
})
input.addEventListener("input", function () {
    const result = toDecimal(input.value);
    resultP.textContent = result;
})