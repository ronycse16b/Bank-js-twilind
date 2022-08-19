document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdarwFild = document.getElementById("withdraw-fild");
    const newWithdarw = withdarwFild.value;
    const withdrawReady = parseFloat(newWithdarw);

    withdarwFild.value = "";

    const withTotalElement = document.getElementById("withdraw");

    const previousWithdrawtString = withTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawtString);

    const newWithdrawTotal = withdrawReady + previousWithdrawTotal;

    withTotalElement.innerText = newWithdrawTotal;


    //   total blance
    const withTotalElementBlance = document.getElementById("totalBlance");

    const previousBlanceString = withTotalElementBlance.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceString);
    const newblanceTotal = withdrawReady - previousBlanceTotal;


    if (withdrawReady > previousBlanceTotal) {
        alert("You Dont Have Sufficiant Blance");

    } else {
        withTotalElementBlance.innerText = newblanceTotal;
    }







})