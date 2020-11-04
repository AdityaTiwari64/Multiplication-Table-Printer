function getTable() {
    var output = document.getElementById('output');
    var clear = document.getElementById('clear');
    var input = document.getElementById('inp').value;
    var textarea = document.getElementById('inp');

    output.innerHTML = " ";
    output.style.display = "block";
    for (var i = 1; i <= 10; i++) {
        var result = `${input} x ${i} = ${input*i} <hr>`;
        output.innerHTML += result
    }
    textarea.value = " ";
    clear.style.display = "block";
}

function clearTheTable() {
    var output = document.getElementById("output");
    var clear = document.getElementById("clear");
    clear.style.display = "none";
    output.style.display = "none";
    console.log("Table Cleared")
}