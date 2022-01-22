
    let userDetails=JSON.parse(localStorage.getItem("userDetail"));
    console.log(userDetails)
    if(userDetails==null||userDetails==undefined||userDetails.login==false){
        window.location.href="/loginpage"
    }
    let userName=userDetails.name;
    console.log(userName)
    document.getElementById("name").textContent=userName+" "+userDetails.lastName;

    document.getElementById("logout").addEventListener("click",logout);

    function logout(){
        userDetails.login=false;
        console.log(userDetails);
        //localStorage.removeItem("userDetail")
        localStorage.setItem("userDetail",JSON.stringify(userDetails));
        window.location.href="/loginpage";
    }