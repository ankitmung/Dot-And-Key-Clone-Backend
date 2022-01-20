  // async function login() {
    //     let detail={
    //         username:document.getElementById("username").value,
    //         password:document.getElementById("password").value,
    //     }

    //     detail=JSON.stringify(detail);
    //     console.log(detail)
    //     let url=`https://masai-api-mocker.herokuapp.com/auth/login`

    //     let res=await fetch(url,{
    //         method:"POST",
    //         body:detail,
    //         headers:{

    //             "Content-Type":"application/json"
    //         },
    //     });

    //     let data=await res.json();
    //     let name=document.getElementById("username").value;

    //     console.log(data)
    //     if (data.error==false){
    //         userData(name,data.token)
    //        // window.location.href="sucs.html"
    //         //profileDetails(name,data.token)

    //     }else{
    //         document.getElementById("error").textContent=data.message;
    //     }
    // }
    // async function userData(name,token){
    //     console.log(name,token)
    //     let url=`https://masai-api-mocker.herokuapp.com/user/${name}`

    //     let res=await fetch(url,{
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization": `Bearer ${token}`
    //         },
    //     })

    //     let data= await res.json();

    //     //console.log(data)
    //     console.log(data)
    //     let username=data.name;
    //     let email=data.email;
    //     //console.log(username,email);
    //     let user={
    //         login:true,
    //         name:username,
    //         email:email
    //     }
    //     console.log(user)
    //     localStorage.setItem("userDetail",JSON.stringify(user))
    //     window.location.href="index.html"
    // }



    async function login(){
        username=document.getElementById("username").value
        password=document.getElementById("password").value

        let obj={
            email:username,
            password:password
        }
        
        try{
            const response = await fetch(`http://localhost:3000/login`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
               
                
               
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
               body: JSON.stringify(obj) // body data type must match "Content-Type" header
              });

              console.log(await response.json())
            // const x= await fetch(`http://localhost:3000/users`)
            // // console.log(x)
            // const res=await x.json();
            // console.log(res)
            
            
          }catch(err){

              console.log(err.message)
          }
            





        // let flag=true;
//         let userBag=JSON.parse(localStorage.getItem("userArray")) || [];
//         var flag=false;
//         if(username == "" || password == "")
//              myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; All fields are Mandatory`, false);
       
//         else
//         {
//             userBag.map((item)=>{
//                 if(item.username==username&&item.password==password){
//                  let user={
//                login:true,
//                name:item.name,
//                lastName: item.lastName,
//                email:item.email,
//            }
//            console.log(user)
//            localStorage.setItem("userDetail",JSON.stringify(user))
//            window.location.href="index.html";
           
//            flag = true;
//        }
      
//    })

   
}
   
// if(!flag)
// myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; Invalid User Credentials`, false);
// }
// function myFunction(msg, type) {
//     var popup = document.getElementById("myPopup");
//     popup.innerHTML = msg;
//     if(type)
//     {
//         popup.style.color="#3C763D";
//         popup.style.backgroundColor = "#DFF0D8"; 
//         popup.style.border = "2px solid #3C763D";
//     }
//     else
//     {
//         popup.style.color="maroon";
//         popup.style.backgroundColor = "#F2DEDE"; 
//         popup.style.border = "2px solid maroon";
//     }
//     popup.classList.toggle("show");

//     const myTimeout = setTimeout(myGreeting, 3000);
    
//     function myGreeting() {
//    popup.classList.toggle("show");
//   }
    
//   }