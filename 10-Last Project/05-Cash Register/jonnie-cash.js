function checkCashRegister(price, cash, cid) {

    const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let changeDue = cash - price;

    let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);

    if (changeDue > totalCid) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (changeDue === totalCid) {
        return { status: "CLOSED", change: cid };
    }

    let change = [];

    for (let i = Object.keys(currencyUnit).length - 1; i >= 0; i--) {
        const unit = Object.keys(currencyUnit)[i];
        const unitValue = currencyUnit[unit];

        const unitCount = Math.floor(cid[i][1] / unitValue);

        const changeCount = Math.min(unitCount, Math.floor(changeDue / unitValue));

        const changeValue = changeCount * unitValue;

        changeDue = parseFloat((changeDue - changeValue).toFixed(2));
        if (changeCount > 0) {
            change.push([unit, changeValue]);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: change };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
