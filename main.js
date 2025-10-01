const input = document.getElementById("input");
const resultP = document.getElementById("result");
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
input.addEventListener("input", function () {
    const result = toDecimal(input.value);
    resultP.textContent = result;
})