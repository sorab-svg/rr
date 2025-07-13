function add() {
    const i1 = Number(document.getElementById("a").value);
    const i2 = Number(document.getElementById("b").value);
    const sum = i1 + i2;

    document.getElementById("result").textContent = `Sum: ${sum}`;
}

function dark() {
    document.body.classList.toggle("dark");
}
