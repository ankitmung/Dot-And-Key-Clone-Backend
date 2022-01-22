let heartFlag=false;


var url =  window.location.href;
 var output= "";
 for(var i=url.length-1; ;i--)
     {
         if(url[i] == "/")
             break;
         else
             output+=url[i];
     }
 output = output.split("").reverse().join("");
//  console.log("id passed by previous page "+output);
async function printData(){
    try{
         
 const response = await fetch(`http://localhost:3000/findProductDetails`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
   body: JSON.stringify({id:output}) // body data type must match "Content-Type" header
  });
  var result = await response.json();
  console.log(result);

  var obj = result.item;
  
let descul=document.getElementById("descplist");
let perksul=document.getElementById("perkslist");
let smallimg=document.getElementById("smallimg");
let size=document.getElementById("size");
// console.log(obj)

////DISCRIPTION ADDING
obj.description.map((item)=>{
//console.log(item)
let li=document.createElement("li");
li.textContent=item;
descul.append(li)
})

///FOR DISCOUNT AMOUNT ADDING
let x=Math.floor((obj.discount/100)*obj.price)
x=obj.price-x;
x=x.toFixed(2)
//console.log(x)
document.getElementById("disc").textContent=`RS:  ${x}`;



///PERKS ADDING
obj.perks.map((item)=>{
//console.log(item)
let li=document.createElement("li");
li.textContent=item;
perksul.append(li)
})

////TITLE ADDING
let title=document.getElementById("title");
title.textContent=obj.title;

///FOR DISCOUNT ====0
if(obj.discount!=0){

let price=document.getElementById("pec");
price.textContent=`RS:  ${obj.price}`;
}

///BIG IMAGE APPENDING
let imgs=document.getElementById("bigimg")
let img=document.createElement("img");
img.src=obj.images[0];
imgs.append(img)



///SMAL IMAGES APPENDING
obj.images.map((item)=>{
let img1=document.createElement("img");
img1.src=item;
smallimg.append(img1)

img1.addEventListener("click",func);

function func(){
    img.src=item;
    imgs.append(img)
    //console.log("hrer")
}

})


/// STARS APPENDING
var rating = "";
        if(obj.rating < 3.8 && obj.rating >= 3.5)
            rating = `
            <span class="iconify" data-icon="openmoji:star"></span> 
            <span class="iconify" data-icon="openmoji:star"></span> 
            <span class="iconify" data-icon="openmoji:star"></span> 
            <span class="iconify" data-icon="openmoji:star-with-right-half-black"></span>  
            <span class="iconify" data-icon="openmoji:black-star"></span>`;
            
        else if(obj.rating < 4.3 && obj.rating >= 3.8)
            rating = `
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:black-star"></span>`;
            
        else if(obj.rating < 4.8 && obj.rating >= 4.3)
                rating = `
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star-with-right-half-black"></span>`;
            
        else if(obj.rating <= 5 && obj.rating >= 4.8)
                rating = `
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> `;
        
                rating+=` &nbsp;&nbsp; <span>(${obj.rating}/5)</span>`


let ratingdiv=document.getElementById("ratings")
ratingdiv.innerHTML=rating


// FOR SIZE APPENDING
let sizeFlag=false;
obj.size.map((item)=>{

let div=document.createElement("button");
div.setAttribute("class","sizetoggel")
div.textContent=item;
div.addEventListener("click" ,()=>{
    console.log(sizeFlag)
    if(sizeFlag==false){
        div.style.border="3px solid red"
        sizeFlag=true;

    }else{
        let sizeDiv=document.querySelectorAll(".sizetoggel");
        for(let i=0;i<sizeDiv.length;i++){
            sizeDiv[i].style.border="2px solid black"
        }
        div.style.border="3px solid red"

    }
    sizeAdded(item)
})
size.append(div)
})
document.getElementById("blow").addEventListener("click", blow);
    
sizeAdded(obj.size[0]);
    console.log(obj)
    }
    catch(e)
    {
        console.log(e.message);
    }
}

printData();


function blow(){
// console.log(heartFlag)
if(heartFlag==false){

    heartFlag=true;
   // document.getElementById("heart").innerHTML=`<span id="heart" style="font-size: 47px;">&#x2764;</span>`
   // document.getElementById("heart").innerHTML=`<span class="iconify" data-icon="bi:heart"></span>`
   document.getElementById("blow").innerHTML=`<span class="iconify" data-icon="ant-design:heart-filled" style="font-size:40px; color : #3C3C3C;  margin-top: 10px;"></span>`
}else{
    //document.getElementById("blow").innerHTML=`<span id="heart" >&#x2661;</span>`
    document.getElementById("blow").innerHTML=`<span class="iconify" data-icon="ant-design:heart-outlined" style="font-size:40px; color: #3C3C3C; margin-top: 10px;"></span>`
    heartFlag=false;
}
}

// let item={};
// let userDetail=JSON.parse(localStorage.getItem("userDetail"));
// //console.log(userDetail)
// document.getElementById("addToCartBtn").addEventListener("click",()=>{

// if(userDetail===null||userDetail.login===false){
//     //console.log("heer")
//     myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; You need to login first`, false);
// }else{

//     item.email=userDetail.email;
    
//     item.id=obj.id;
   
//         //console.log()
//         let itemflag=false;
//         let cartArray=JSON.parse(localStorage.getItem("cartItem"))||[];
//         console.log(item.size)
//         for(let i=0;i<cartArray.length;i++){
//             //console.log(cartArray[i].size)
//             if(cartArray[i].id===obj.id&&cartArray[i].size===item.size&&cartArray[i].email===item.email){
//                 //console.log("HEre")
//                 itemflag=true;
//                 break;
//             }
//         }
//         if(itemflag==true){
//             myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; This item is already in cart`, false);
//         }else{

//             myFunction(`<span class="iconify" data-icon="teenyicons:tick-circle-solid" style="color: #3c763d; font-size: 22px;"></span> &nbsp; Item added to cart Successfully`, true);
//             cartArray.push(item);
//             localStorage.setItem("cartItem",JSON.stringify(cartArray));
        
//         }
// }
// })
function sizeAdded(size){
    
    item.size=size;
}

function myFunction(msg, type) {
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

    const myTimeout = setTimeout(myGreeting, 3000);
    
    function myGreeting() {
   popup.classList.toggle("show");
  }
    
  }