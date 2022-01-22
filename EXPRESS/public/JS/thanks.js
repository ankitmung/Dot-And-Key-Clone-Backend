
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
// console.log(result);

var userCart = result.res;


const res= await fetch("http://localhost:3000/data")
      var data  = await res.json();
    
      var prodBag=data.res;

user_detail = JSON.parse(localStorage.getItem("userDetail"));
let index =0;

let total=0;
userCart.map((item, index)=>{
let prod=prodBag.filter((el)=>{
   if(item.productID===el._id){
      return true;
   }
})


 
 // let userCart=JSON.parse(localStorage.getItem("cartItem"));
//   let prodBag=JSON.parse(localStorage.getItem("DotAndKeyProducts"));
//   console.log(userCart)
let tab=document.querySelector("table");
//   userCart.map((item, index) => {
//     //console.log(item)
//       // filtering for same product id as original one
//       let prod = prodBag.filter((el) => {
//         if (item.id === el.id) {
//           return true;
//         }
//       });

   let tr=document.createElement("tr");

   let sr=document.createElement("td")
   sr.textContent=index+1;


   let title=document.createElement("td");
   title.textContent=prod[0].title;


   let quantity=document.createElement("td")
   if(item.quantity){

       quantity.textContent=item.quantity;
   }else{
       quantity.textContent=1;
   }


   let size=document.createElement("td")
   if(item.size){
       if(item.size=="Default"){
         //   console.log(prod[0].size)
           size.textContent=prod[0].size[0]
       }else{

         //   console.log(item.size)
           size.textContent=item.size;
       }
   }


   let price=document.createElement("td");
   price.textContent=prod[0].price;
   total+=+prod[0].price;


   tr.prepend(sr,title,size,quantity,price);
   tab.append(tr)
   
})
document.getElementById("total").textContent=`Subtotal Rs.${total.toFixed(2)}`
document.getElementById("orderid").textContent=`Order Id. D&k${Math.floor(Math.random()*10000)}`

// console.log(userCart);
for(var i=0 ; i<userCart.length; i++)
{
 
 const res= await fetch(`http://localhost:3000/removeItemFromCart/${userCart[i]._id}`);
     var result  = await res.json();    
         console.log(result);
}

}
showCartItems();