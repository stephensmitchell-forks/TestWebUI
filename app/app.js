﻿var payload;
function SayHi(name)
{
    payload = JSON.stringify({ returnValue: "some hi", numbers: [1000, 2000] });

    return payload;
}

function ReturnData(num)
{
    var arrayNum = [];
    for (var i = 0; i < num; i++)
        arrayNum.push(i);

    payload = JSON.stringify({ returnValue: "some data", numbers: arrayNum });

    return payload;

}

function GotoAnother(otherUrl)
{
    window.location.replace(otherUrl);
}

function IncreaseCounter()
{
    window.external.Count(true);
    document.getElementById('display').innerHTML = window.external.Counter;
}

function DecreaseCounter() {
    window.external.Count(false);
    document.getElementById('display').innerHTML = window.external.Counter;
}
