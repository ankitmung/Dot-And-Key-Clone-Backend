   //     async function Register() {
    //     let url=`https://masai-api-mocker.herokuapp.com/auth/register`
    //     let detail={
    //         name:document.getElementById("name").value,
    //         email:document.getElementById("email").value,
    //         password:document.getElementById("password").value,
    //         username:document.getElementById("email").value,
    //         mobile:" ",
    //         description:" "
    //     };
    //     console.log(detail)
    //     detail=JSON.stringify(detail)

    //     let res= await fetch(url,{
    //         method:"POST",

    //         body:detail,

    //         headers:{
    //             "Content-Type":"application/json"
    //         },



    //     });

    //     let data=await res.json();

    //     console.log(data)
    //     if(data.error==false){

    //         window.location.href="login.html";
    //     }else{
    //             document.getElementById("error").textContent=data.message;
    //     }
    // }



   async function Register(){
        let detail={
                first_name:document.getElementById("name").value,
                last_name : document.getElementById("lastName").value,
                email:document.getElementById("email").value,
                password:document.getElementById("password").value,
            };

          if(detail.email =="" || detail.lastName == "" || detail.name == "" || detail.password == "")
                myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; All fields are mandatory`, false);
          else
          {
          try{
            const response = await fetch(`http://localhost:3000/register`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
               body: JSON.stringify(detail) // body data type must match "Content-Type" header
              });
              var result = await response.json();
            console.log("result"+result);
            if(result.status == "failed")
              myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; ${result.message}`, false);
            else
              {
                location.href = "/loginpage";
              }
          }catch(err){

              console.log(err.message)
          }
        }
    
    //             else
    //             {
    //                 let userBag=JSON.parse(localStorage.getItem("userArray"))||[];
                    
    //                 var flag=false;
    //                 userBag.forEach(el => {
    //                     if(el.email == detail.email)
    //                     {
    //                             flag= true;
    //                     }
    //                 });

    //                 if(flag)
    //                 {
    //                     myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; This Email ID already exists`, false);
    //                 }
    //                 else
    //                 {
    //                     userBag.push(detail)
    //                     localStorage.setItem("userArray",JSON.stringify(userBag));
    //                     myFunction(`<span class="iconify" data-icon="teenyicons:tick-circle-solid" style="color: #3c763d; font-size: 22px;"></span> &nbsp; Your account is created`, true, 1);
    //                     userBag.push(detail);
    //                 }
    //     }
    // }
    
    function myFunction(msg, type, n=0) {
        var popup = document.getElementById("myPopup");
        popup.innerHTML = msg;
        if(type)
        {
            popup.style.color="#3C763D";
            popup.style.backgroundColor = "#DFF0D8"; 
            popup.style.border = "2px solid #3C763D";
        }
        else
        {
            popup.style.color="maroon";
            popup.style.backgroundColor = "#F2DEDE"; 
            popup.style.border = "2px solid maroon";
        }
        popup.classList.toggle("show");
    
        const myTimeout = setTimeout(myGreeting, 2000);
        
        function myGreeting() {
       popup.classList.toggle("show");
       if(n==1)
            window.location.href = "login.html";
      }
        
       }
      }