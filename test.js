function getVal(val) {
    multiplier = val.substr(-1).toLowerCase();
    if (multiplier == "k")
        return parseFloat(val) * 1000;
    else if (multiplier == "m")
        return parseFloat(val) * 1000000;
    else if (!isNaN(val))
        return parseFloat(val);
    else return console.log(` not a number`);
}
console.log(getVal('1000'));