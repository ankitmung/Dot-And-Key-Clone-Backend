 // store address which is written in form
 var showCartItems;
 let user = JSON.parse(localStorage.getItem("userDetail"));
 document.querySelector("form").addEventListener("submit",addAddress);
//  var address = JSON.parse(localStorage.getItem("addressInfo")) || [];
async function addAddress(e) {
 e.preventDefault();

 var addressObj = {
     country:form.use_address1.value,
     firstname: form.first_name.value,
     lastname: form.last_name.value,
     address_one: form.address_1.value,
     address_two: form.address_2.value,
     city: form.city.value,
     state: form.state_name.value,
     pincode: form.pin_code.value,
     phonenum: form.phone_num.value,
     email:user.email,
     userID:user._id
 };

 if(addressObj.country=="" || addressObj.firstname=="" || addressObj.lastname=="" || addressObj.address_one=="" || addressObj.address_two=="" || addressObj.city=="" || addressObj.state=="" || addressObj.pincode=="" || addressObj.phonenum=="")
 {
   //  console.log("validation failed");  
   myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; All fields are Mandatory`, false);
 } 
 else
 {
   async function backendFunc(){
      const response = await fetch(`http://localhost:3000/postAddress`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
     body: JSON.stringify(addressObj) // body data type must match "Content-Type" header
    });
    var result = await response.json();
//   console.log(result);
  if(result.status == "success")
  {
     window.location.href = "/shipping";
  }
   }
   backendFunc(); 
 }


//returns to the cart page
document.getElementById("return_to_cart")
.addEventListener("click", function () {
   console.log("/cartpage");
   window.location.href = "/cartpage";
});


// go to the shipping page
document.getElementById("return_to_shipping")
.addEventListener("click", function () {
   window.location.href = "/shipping";
});


// showCartItems();


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



showCartItems = async ()=>{
   const response = await fetch(`http://localhost:3000/cartdata`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
    body: JSON.stringify({userID:user._id})
   });
   var result = await response.json();
   // console.log(result);
 
   var userCart = result.res;
 
 
   const res= await fetch("http://localhost:3000/data")
         var data  = await res.json();
       
         var prodBag=data.res;
 

         
//access user login details(name and email)

 user_detail = JSON.parse(localStorage.getItem("userDetail"));
 //console.log(user_detail);
 let names=document.getElementById("user_details_name");
 names.textContent=`${user_detail.name}, ${user_detail.email}`;
 
 let cartDiv=document.getElementById("cartBox");

 let totalAmount=0;
userCart.map((item)=>{
   let x=prodBag.filter((el)=>{
      if(item.productID===el._id){
         return true;
      }
   })
   // console.log(x)
   let num;
   let div=document.createElement("div");
   let divimg=document.createElement("div")
   let img=document.createElement("img");
   img.src=x[0].images[0];
   if(item.quantity){
       num=item.quantity;
   }else{
       num=1;
   }
   // console.log(num)
   let nodiv=document.createElement("div");
   nodiv.setAttribute("class","quantutyno");
   nodiv.textContent=num;
   let name=document.createElement("h3");
   name.textContent=x[0].title;

   divimg.append(nodiv,img)
   let price=document.createElement("h5");
   let disc = Math.floor((x[0].discount / 100) * x[0].price);
   disc = x[0].price - disc;
   totalAmount+=+disc;
   price.innerHTML= `&#8377; ${disc.toFixed(2)}`;

   //console.log(x[0].price)
   div.append(divimg,name,price);
   //div.innerHTML="asdsd"
   cartDiv.append(div)
   
})
//console.log(totalAmount)
document.getElementById("subtotal").innerHTML=`Subtotal. Rs. &#8377;${totalAmount.toFixed(2)}`
document.getElementById("total").innerHTML=`Total Rs. &#8377;${totalAmount.toFixed(2)}`
//console.log(totalAmount);

 
};


showCartItems();