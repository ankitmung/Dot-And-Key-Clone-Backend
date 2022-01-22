
 let user = JSON.parse(localStorage.getItem("userDetail"));


 var showCartItems = async ()=>{
     const response = await fetch(`http://localhost:3000/cartdata`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
      body: JSON.stringify({userID:user._id})
     });
     var result = await response.json();
    //  console.log(result);
   
     var userCart = result.res;
   
   
     const res= await fetch("http://localhost:3000/data")
           var data  = await res.json();
         
           var prodBag=data.res;
   
  
           
  //access user login details(name and email)
  
   user_detail = JSON.parse(localStorage.getItem("userDetail"));
   
   
   let cartDiv=document.getElementById("cartBox");
  
   let totalAmount=0;
  userCart.map((item)=>{
     let x=prodBag.filter((el)=>{
        if(item.productID===el._id){
           return true;
        }
     })
    //  console.log(x)
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
    //  console.log(num)
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
  
  const res2= await fetch(`http://localhost:3000/findAddress/${user._id}`);
  var data2  = await res2.json();
 
  var add =data2.res;
 //  console.log(data2);
  
 let str = add[0].firstname + " " + add[0].lastname + " " + add[0].address_one + " " + add[0].address_two +" "+ add[0].pincode + " " + add[0].city + " " + add[0].state + " " + " " + add[0].country
 // console.log(str)
 document.getElementById("con").textContent = add[0].email;
 document.getElementById("addre").textContent =  str;
   
  };
  
  showCartItems();
  
 