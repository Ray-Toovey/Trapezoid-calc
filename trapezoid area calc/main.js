//event listner
document.getElementById('calc-btn').addEventListener("click", calctrap)

//event function
function calctrap(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);

    let total =  (num1 + num2)/2 * (num3);

    document.getElementById('sum').innerHTML = total;
}