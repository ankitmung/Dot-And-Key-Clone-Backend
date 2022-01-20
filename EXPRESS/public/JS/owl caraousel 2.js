// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
    center: true,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});

var data = JSON.parse(localStorage.getItem("DotAndKeyProducts"));
var main = document.getElementById("slider-container");
var count = 0;
data.forEach(item => {
   if(count <= 20)
    {
        var x=Math.floor((item.discount/100)*item.price)
        x=item.price-x;
        var orignalPrice;
        if(item.discount != 0)
        {
            orignalPrice = `Rs: ${item.price}`;
            var disc = `SAVE ${item.discount}%`;
        }
        else
        {
            orignalPrice = "";
            var disc = "";
        }
        main.innerHTML += 
        `
        <div class="slider-card" >
                    <div class="d-flex justify-content-center align-items-center mb-4" onclick="redirectToProductDetailsPage('${item.id}')">
                        <img src="${item.images[0]}" alt="" >
                    </div>
                    <div class="description" onclick="redirectToProductDetailsPage('${item.id}')">
                        <p class="rating"><span style="font-size: 16px; margin-top: -4px;" class="iconify" data-icon="noto:star"></span> ${item.rating}/5</p>
                        <h5 class="title"><b>${item.title}</b></h5>
                        <p class="price"><span class="orignal-price">${orignalPrice}</span><span class="sale-price">Rs: ${x}</span></p>
                    </div>
                    <div class="discount">
                        ${disc}
                        </div>
                        <button onclick="addToCart('${item.id}')">Add to Cart</button>
                </div>
        `
    }
        count++
})

function redirectToProductDetailsPage(id)
{
    window.location.href = `productDetail.html?${id}`;
}