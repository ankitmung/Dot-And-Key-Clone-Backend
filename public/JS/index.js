
let userDetail=JSON.parse(localStorage.getItem("userDetail"));

async function func(){
    try{
        const res= await fetch("http://localhost:3000/data")
        var data  = await res.json();
        // console.log(data.res);
        data=data.res
        localStorage.setItem("DotAndKeyProducts", JSON.stringify(data));
    }
    catch(err)
    {
        console.log(err.message);
    }
}
func();
let item={};
async function addToCart(id)
{
    if(userDetail===null){
        myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; You need to login first`, false);
      }
      else{

    let itemToCheck = {
        productID:id,
        userID:userDetail._id,
        size:"Default"
    }

   try{
    const response = await fetch(`http://localhost:3000/checkCart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
       body: JSON.stringify(itemToCheck) 
      });
      var result = await response.json();
      console.log(result);
      if(result.status == "failed")
      {
        myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; This item is already in cart`, false);
      }
      else{
        myFunction(`<span class="iconify" data-icon="teenyicons:tick-circle-solid" style="color: #3c763d; font-size: 22px;"></span> &nbsp; Item added to cart Successfully`, true)
      }
   }
   catch(err)
   {
       console.log(err.message);
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
