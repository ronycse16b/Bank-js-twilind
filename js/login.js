document.getElementById("sign-btn").addEventListener('click',function(){

    const email = document.getElementById("emailInput");
    const emailfild = email.value;
    // clear value
    email.value ="";
    const password = document.getElementById("inputPassword");
    const passwordfild = password.value;
     // clear value
        password.value ="";


    if(emailfild === "rony@gmail.com" && passwordfild === "rony1234"){

        console.log("wellcom");
        window.location.href = "dashboard.html";
    }else{
        console.log("you are not a user ");}

})