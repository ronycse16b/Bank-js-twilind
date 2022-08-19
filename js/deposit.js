document.getElementById("deposit-btn").addEventListener("click",function(){
   const depositFild = document.getElementById("dipososit-fild");
   const newDeposit = depositFild.value;
     const depositeReady =parseFloat(newDeposit);

     depositFild.value ="";

    const dipositTotalElement = document.getElementById("dipositvalue");

        const  previousDepositString = dipositTotalElement.innerText;
          const previousDepositTotal = parseFloat(previousDepositString);

          const newDipositTotal = depositeReady + previousDepositTotal;

          dipositTotalElement.innerText = newDipositTotal;


        //   total blance
          const dipositTotalElementBlance = document.getElementById("totalBlance");

          const  previousBlanceString = dipositTotalElementBlance.innerText;
            const previousBlanceTotal = parseFloat(previousBlanceString);
  
            const newDipositbTotal = depositeReady + previousBlanceTotal;
  
            dipositTotalElementBlance.innerText = newDipositbTotal;



  
   
})