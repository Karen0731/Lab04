let inputN = document.getElementsByClassName("inputNumber");
let addButton = document.getElementById("addButton");
let substractButton = document.getElementById("substractButton");
let multiplicationButton = document.getElementById("multiplicationButton");
let divisionButton = document.getElementById("divisionButton");
let resetButton = document.getElementsByClassName("resetButton");
let equalButton = document.getElementsByClassName("equalButton");
let logInfo = document.getElementById("logInformation");
let resultValue = document.getElementById("resultValue");

var op = "";

addButton.onclick = function ()
{
    if(inputN[0].value=="")
    {
        alert("you need a number before the expression");
    }
    else
    {
        op += [inputN[0].value + " + "];
        inputN[0].value = "";
        console.log(op);
    }
};

substractButton.onclick = function()
{
    if(inputN[0].value=="")
    {
        alert("you need a number before the expression");
    }
    else
    {
        op += [inputN[0].value + " - "];
        inputN[0].value = "";
        console.log(op);
    }
};

multiplicationButton.onclick = function()
{
    if(inputN[0].value=="")
    {
        alert("you need a number before the expression");
    }
    else
    {
        op += [inputN[0].value + " * "];
        inputN[0].value = "";
        console.log(op);
    }
};

divisionButton.onclick = function()
{
    if(inputN[0].value=="")
    {
        alert("you need a number before the expression");
    }
    else
    {
        op += [inputN[0].value + " / "];
        inputN[0].value = "";
        console.log(op);
    }
};

resetButton[0].onclick = function()
{
    inputN[0].value = "";
    logInfo.value = "";
    resultValue.value = "";
};

equalButton[0].onclick = function()
{
    if(op=="")
    {
        alert("Yo need a number to calculate");
    }
    else
    {
        op += [inputN[0].value];
        inputN[0].value = "";
        var res = eval(op);
        console.log(res);
        logInfo.value = op + " = " + res;
        resultValue.value = res;
        inputN[0].value = "";
        op = "";
    }
};

