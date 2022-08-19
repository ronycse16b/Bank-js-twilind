
document.getElementById("withdraw-btn").addEventListener("click", function () 

{
    const withdarwFild = document.getElementById("withdraw-fild");
    const newWithdarw = withdarwFild.value;
    const withdrawReady = parseFloat(newWithdarw);

    withdarwFild.value = "";

    const withTotalElement = document.getElementById("withdraw");

    const previousWithdrawtString = withTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawtString);

    const newWithdrawTotal = withdrawReady + previousWithdrawTotal;



    //   total blance
    const withTotalElementBlance = document.getElementById("totalBlance");

    const previousBlanceString = withTotalElementBlance.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceString);


    if (withdrawReady > previousBlanceTotal) {
        alert("You Dont Have Sufficiant Blance");

    } else {
        
        const newblanceTotal = previousBlanceTotal - withdrawReady;

        withTotalElement.innerText = newWithdrawTotal;
        withTotalElementBlance.innerText = newblanceTotal;
    }







})