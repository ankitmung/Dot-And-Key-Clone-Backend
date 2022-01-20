let item={};
let userDetail=JSON.parse(localStorage.getItem("userDetail"));
function addToCart(id){

    console.log(id);
    if(userDetail===null){
      myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; You need to login first`, false);
    }else{
    
        item.email=userDetail.email;
        
        item.id=id;
        // Adding size as defualt value. Because product page has no option se select size;
        item.size = "Default";
        
            console.log()
            let itemflag=false;
            let cartArray=JSON.parse(localStorage.getItem("cartItem"))||[];
            console.log(cartArray.size)
            for(let i=0;i<cartArray.length;i++){
                if(cartArray[i].id===item.id&&cartArray[i].size===item.size&&cartArray[i].email===item.email){
                    //console.log("HEre")
                    itemflag=true;
                    break;
                }
            }
            if(itemflag==true){
              myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; This item is already in cart`, false);
            }else{
              myFunction(`<span class="iconify" data-icon="teenyicons:tick-circle-solid" style="color: #3c763d; font-size: 22px;"></span> &nbsp; Item added to cart Successfully`, true);
                cartArray.push(item);
                localStorage.setItem("cartItem",JSON.stringify(cartArray));
            
            }
    }
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
