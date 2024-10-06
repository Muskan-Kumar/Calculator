function Solve(val){
    let v = document.querySelector("#res");
    v.value += val;
 }
 function Result() {
    let num1 = document.querySelector("#res").value;
    try {
       let num2 = eval(num1.replace("X", "*"));
    //    let num3 = eval(num1.replace("^", "**"));
       document.querySelector("#res").value = num2;
    //    document.querySelector("#res").value = num3;
    } catch {
       document.querySelector("#res").value = "Error";
    }
 }
 function Clear() {
    let input = document.querySelector("#res");
    input.value = " ";
 }
 function Back() {
    let ev = document.querySelector("#res");
    ev.value = ev.value.slice(0, -1);
 }
 document.addEventListener("keydown",(evt)=> {
    const key = evt.key;
    const validKey = "0123456789+-*/.%";
    if (validKey.includes(key)) {
       Solve(key === "*" ? "X" : key);
    //    Solve(key === "**" ? "^" : key);

    } else if (key === "Enter") {
       Result();
    } else if (key === "B") {
       Back();
    } else if (key.toLowerCase() === "C") {
       Clear();
    }
 });

