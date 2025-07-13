function add() {
    const i1 = Number(document.getElementById("a").value);
    const i2 = Number(document.getElementById("b").value);
    const sum = i1 + i2;

    document.getElementById("result").textContent = `Sum: ${sum}`;
}

function dark() {
    document.body.classList.toggle("dark");
     const button = document.getElementById("2");

    if (document.body.classList.contains("dark")) {
        button.textContent = "Light";
    } else {
        button.textContent = "Dark";
    }
}
const dfs=document.querySelector("h1");
